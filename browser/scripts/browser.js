// this file should contain functions for:
// - copying repo/samples folder to repo/browser/samples folder
// - generating code-viewer json files
// - generating /src/app/app-routing.module.ts
// - generating routing and modules for each group of controls, e.g.
// /src/samples/charts/charts-routes-data.ts
// /src/samples/charts/charts-routing.module.ts
// /src/samples/charts/charts.module.ts

const gulp = require("gulp");
const chmod = require("gulp-chmod");
const flatten = require("gulp-flatten");
const fs = require("fs");
const path = require("path");
const es = require("event-stream");
const del = require("del");
const utils = require("./utils.js")

function log(msg) {
    console.log("browser.js >> " + msg);
} exports.log = log;

// log("loaded");

const repoName     = "igniteui-angular-examples";
const sampleRoot   = '../samples/';    // /samples/
const sampleOutput = './src/samples/'; // /browser/src/samples/

// C:\REPOS\GitInternalDocs\igniteui-angular-examples\samples\charts\data-chart\axis-sharing
// returns                                         ../samples/charts/data-chart/axis-sharing
function getSamplePath(dirPath) {
    var ret = dirPath.split(repoName)[1];
    ret = ".." + ret.split("\\").join("/");
    return ret;
}

// C:\REPOS\GitInternalDocs\igniteui-angular-examples\samples\charts\data-chart\axis-sharing
// returns                                                    charts
function getSampleGroup(dirPath) {
    var ret = getSamplePath(dirPath);
    ret = ret.replace("../samples/", "");
    ret = ret.split("/")[0];
    return ret;
}

// C:\REPOS\GitInternalDocs\igniteui-angular-examples\samples\charts\data-chart\axis-sharing
// returns                                                           data-chart
function getSampleControl(dirPath) {
    var ret = getSamplePath(dirPath);
    ret = ret.replace("../samples/", "");
    ret = ret.split("/")[1];
    return ret;
}

// C:\REPOS\GitInternalDocs\igniteui-angular-examples\samples\charts\data-chart\axis-sharing/
// returns                                                                      axis-sharing
function getSampleFolder(dirPath) {
    var ret = getSamplePath(dirPath);
    ret = ret.replace("../samples/", "");
    ret = ret.split("/")[2];
    return ret;
}
// C:\REPOS\GitInternalDocs\igniteui-angular-examples\samples\charts\data-chart\axis-sharing/
// returns                                         ../src/app/charts/data-chart/axis-sharing/
function getOutputPath(dirPath) {
    var ret = getSamplePath(dirPath);
    ret = ret.replace("../samples/", "./src/samples/")
    return ret;
}

// NOTE you can comment out strings in this array to run these function only on a subset of samples
var sampleSourcePaths = [
    sampleRoot + 'charts/category-chart/**/package.json',
    //sampleRoot + 'charts/data-chart/**/package.json',
    // sampleRoot + 'charts/doughnut-chart/**/package.json',
    // sampleRoot + 'charts/financial-chart/**/package.json',
    // sampleRoot + 'charts/pie-chart/**/package.json',
    // sampleRoot + 'charts/sparkline/**/package.json',
    // sampleRoot + 'charts/tree-map/**/package.json',
    // sampleRoot + 'charts/zoomslider/**/package.json',
    // sampleRoot + 'maps/**/package.json',
    // sampleRoot + 'excel/excel-library/**/package.json',
    // sampleRoot + 'excel/spreadsheet/**/package.json',
    // sampleRoot + 'gauges/bullet-graph/**/package.json',
    // sampleRoot + 'gauges/linear-gauge/**/package.json',
    // sampleRoot + 'gauges/radial-gauge/**/package.json',
    // sampleRoot + 'grids/**/package.json',
    // sampleRoot + 'layouts/**/package.json',
    // sampleRoot + 'editors/**/package.json',

    // excluding package.json in node_modules sub folders in case they are installed locally
    "!" + sampleRoot + '**/node_modules/**/package.json',
    '!' + sampleRoot + '**/node_modules/**',
    '!' + sampleRoot + '**/node_modules',
];

// stores info about each sample: folder path, file paths, routing path, etc
var samplesDatabase = [];

function getSampleInfo(samplePath, sampleCallback, sampleDirector) {
    var info = {};
    info.SourcePath    = getSamplePath(samplePath);     //     ../samples/charts/data-chart/axis-sharing/
    info.OutputPath    = getOutputPath(samplePath);     //  ./src/samples/charts/data-chart/axis-sharing/
    info.SampleGroup   = getSampleGroup(samplePath);    //               |charts|          |
    info.SampleControl = getSampleControl(samplePath);  //                      |data-chart|
    info.SampleFolder  = getSampleFolder(samplePath);   //                      |          |axis-sharing|
    // console.log("SamplePath " + samplePath);
    // console.log("OutputPath  " + info.OutputPath);
    console.log("SourcePath " + info.SourcePath);
    // console.log("SampleGroup   " + info.SampleGroup);
    // console.log("SampleControl " + info.SampleControl);
    // console.log("SampleFolder  " + info.SampleFolder);

    info.SampleRoutePath = info.SampleControl + "-" + info.SampleFolder;  // data-chart-axis-sharing
    //console.log("SampleRoutePath  " + info.SampleRoutePath);

    info.ControlDisplayName = utils.toTitleCase(utils.replace(info.SampleControl, "-", " ")); // Data Chart
    info.ControlName = utils.replace(info.ControlDisplayName, " ", "");                       // DataChart

    info.SampleDisplayName  = utils.toTitleCase(utils.replace(info.SampleFolder, "-", " "));  // Axis Sharing
    info.SampleClassName = utils.replace(info.SampleDisplayName, " ", "") + "Component";      // AxisSharingComponent
    info.SampleClassName = info.ControlName + info.SampleClassName;
    // console.log("ControlDisplayName " + info.ControlDisplayName);
    // console.log("SampleDisplayName  " + info.SampleDisplayName);
    //console.log("SampleClassName " + info.SampleClassName);
    // console.log("ComponentName " + info.ComponentName);
    // console.log("DisplayName " + info.DisplayName);
    // console.log("SourcePath " + info.SourcePath);
    // console.log("OutputPath " + info.OutputPath);
    // console.log("OutputGroup " + info.OutputGroup);
    // console.log("OutputControl " + info.OutputControl);
    // console.log("OutputFolder " + info.OutputFolder);
    // info.SandboxUrlView = "";     // https://codesandbox.io/embed/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/data-chart/axis-sharing
    // info.SandboxUrlEdit = "";     //     https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/data-chart/axis-sharing
    // info.SandboxUrlShort = "",    //     https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/data-chart/axis-sharing

    info.SourceComponentHTML = "";        // e.g. ./samples/charts/data-chart/axis-sharing/src/app/app.component.html
    info.SourceComponentSCSS = "";        // e.g. ./samples/charts/data-chart/axis-sharing/src/app/app.component.scss
    info.SourceComponentTS = "";          // e.g. ./samples/charts/data-chart/axis-sharing/src/app/app.component.ts
    info.SourceModuleTS = "";             // e.g. ./samples/charts/data-chart/axis-sharing/src/app/app.module.ts
    info.SourceDataFiles = [];            // e.g. ./samples/charts/data-chart/axis-sharing/src/app/SampleFinancialData.ts
    info.SourceFiles = [];  // all above

    // getting path to files in a given sample's source path:
    gulp.src([
          info.SourcePath + "/src/app/*.*",
    "!" + info.SourcePath + "/node_modules/**",
    ])
    .pipe(es.map(function(file, fileCallback) {
        // console.log("getSampleInfo " + file.dirname + "/" + file.basename);
        var filePath = getSamplePath(file.dirname + "/" + file.basename);
        //log("getSampleInfo " + filePath);

        if (filePath.indexOf('/app/app.module.ts') >= 0) {
            info.SourceModuleTS = filePath;
            var fileContent = file.contents.toString();
            getSampleModules(fileContent, info);
        }
        else if (filePath.indexOf('/app/app.component.html') >= 0) {
            info.SourceComponentHTML = filePath;
        }
        else if (filePath.indexOf('/app/app.component.ts') >= 0) {
            info.SourceComponentTS = filePath;
        }
        else if (filePath.indexOf('/app/app.component.scss') >= 0) {
            info.SourceComponentSCSS = filePath;
        }
        else { // data files, .e.g. SampleFinancialData.ts
            info.SourceDataFiles.push(filePath);
            //console.log("getSampleInfo " + filePath);
        }
        info.SourceFiles.push(filePath);
        fileCallback(null, file);
    }))
    .on("end", function() {
        // saving info about samples in database
        samplesDatabase.push(info);
        sampleCallback(null, sampleDirector);
    });
}

function getSampleModules(fileContent, info) {
    var lines = fileContent.split(';');
    info.ImportsLines = [];
    info.ImportsModules = [];

    for (const line of lines) {

        if (line.indexOf('import ') >= 0 && line.indexOf('Module') >= 0) {

            var importLine = line.replace('\n', '')
            if (importLine.indexOf(',') >= 0) {
                //var importModules = importLine.replace('import {');

                var package = importLine.split(' from ')[1];
                //console.log( package );

                var words = importLine.split(' ');
                for (const word of words) {
                    if (word.indexOf('Module') >= 0) {

                        var modules = word.split(',');
                        for (const name of modules) {

                            var module = utils.replace(name, ' ', '');
                            module = utils.replace(module, '\t', '');
                            module = utils.replace(module, '\n', '');

                            if (module !== 'NgModule')
                                info.ImportsModules.push(module);
                         //   console.log(module);

                            info.ImportsLines.push('import { ' + module + ' } from ' + package + ';');
                        }

                    }
                }

            } else {
               importLine += ';';
               info.ImportsLines.push(importLine);

               var module = importLine.split(' from ')[0].replace('import { ', '').replace(' }', '');
               if (module !== 'NgModule')
                   info.ImportsModules.push(module);

            }
            //console.log(importLine);
        }

    }

    // console.log("importsModules "  + info.ImportsModules.length);
    // console.log("importsLines "  + info.ImportsLines.length);

    // for (const line of info.ImportsModules) {
    //     console.log(line);
    // }

    // for (const line of info.ImportsLines) {
    //     console.log(line);
    // }

}

function findSamples(cb) {
    log("findSamples");
    samplesDatabase = [];

    gulp.src(sampleSourcePaths, {allowEmpty: true})
    .pipe(es.map(function(file, fileCallback) {
        //log("getting: " + file.dirname);
        // saving info for each samples in samplesDatabase
        getSampleInfo(file.dirname, fileCallback, file);
    }))
    .on("end", function() {
        log("findSamples... done = " + samplesDatabase.length);
        cb();
    });

} exports.findSamples = findSamples;


function copySamples(cb) {
    //log("copySamples");

    //cleanBrowser();

    log("copySamples = " + samplesDatabase.length);

    // TODO for each in samplesDatabase array, copy repo/samples files to repo/browser/samples folder
    // NOTE you need to copy only files in repo/samples/**/src/app/ folder

    var samplesModules = {};
    // exporting all samples to repo/samples folder based on gathered sample info
    for (const info of samplesDatabase) {

    // log("copying sample: " + info.SourcePath);

        if (samplesModules[info.SampleControl] === undefined) {
            samplesModules[info.SampleControl] = {}
            samplesModules[info.SampleControl].Group = info.SampleGroup;
            samplesModules[info.SampleControl].Control = info.ControlName;
            samplesModules[info.SampleControl].Modules = [];
            samplesModules[info.SampleControl].Imports = [];
            samplesModules[info.SampleControl].Components = [];
        }

        samplesModules[info.SampleControl].Path = './src/samples/' + info.SampleGroup + '/' + info.SampleControl + '/samples.ts';
        // samplesModules[info.SampleControl].Path = './src/samples/' + info.SampleGroup + '/' + info.SampleControl + '/' + info.SampleControl + 'samples.ts';
        samplesModules[info.SampleControl].Components.push(info.SampleClassName);

        for (const module of info.ImportsModules) {
            if (samplesModules[info.SampleControl].Modules.indexOf(module) < 0) {
                samplesModules[info.SampleControl].Modules.push(module);
            }
        }
        for (const line of info.ImportsLines) {
            if (samplesModules[info.SampleControl].Imports.indexOf(line) < 0) {
                samplesModules[info.SampleControl].Imports.push(line);
            }
        }
        // adding import for the current sample's component
        var importComponent = 'import { ' + info.SampleClassName + ' } from ' + '"./' + info.SampleFolder + '/app.component";';
        samplesModules[info.SampleControl].Imports.push(importComponent);

        // console.log(samplesModules[info.SampleControl].Modules);

        for (const filePath of info.SourceFiles) {

            if (filePath.indexOf('app.module.ts') > 0) continue;

            var fileContent = utils.fileRead(filePath);
            var fileName    = utils.fileName(filePath);
            var fileOutput  = info.OutputPath + "/" + fileName;

            if (filePath.indexOf('app.component.ts') > 0) {
                fileContent = fileContent.replace('class AppComponent', 'class ' + info.SampleClassName);
            }

            //log("copying: " + filePath);
            utils.fileSave(fileOutput, fileContent);
        }
    }

    console.log(samplesModules);

    for(var key in samplesModules) {
        var data = samplesModules[key];

        var ret = "";
        ret += "/* tslint:disable */ \n\n";

        for (const line of data.Imports) {
            ret += line + "\n";
        }
        ret += "\n";
        ret += "@NgModule({\n";
        ret += "   declarations: [\n";
        ret += data.Components.join(',\n');
        ret += "\n   ], \n";

        ret += "   imports: [\n";
        ret += data.Modules.join(',\n');
        ret += " \n   ] \n";
        ret += "}) \n\n";

       // var className = utils.replace(key, '-')
        ret += "export class " + data.Control  + "SamplesModules {} \n";

        // console.log(ret);

        utils.fileSave(data.Path, ret);
        // do something with "key" and "value" variables
    }


    if (cb) cb();
} exports.copySamples = copySamples;

function generateSampleRouting(cb) {
    log("generateSampleRouting");
    // TODO group items in samplesDatabase array by samples' group (e.g. charts) into a new array
    // TODO generate routing data and modules for each group of samples, e.g.
    // /src/samples/charts/charts-routes-data.ts
    // /src/samples/charts/charts-routing.module.ts
    // /src/samples/charts/charts.module.ts

    // NOTE use /src/sample-old/ files as reference
    if (cb) cb();
} exports.generateSampleRouting = generateSampleRouting;

function generateAppRouting(cb) {
    log("generateAppRouting");
    // TODO generate routing modules: src/app/app-routing.module.ts

    if (cb) cb();
} exports.generateAppRouting = generateAppRouting;

function generateCodeViewerFiles(cb) {
    log("generateCodeViewerFiles");
    // TODO for each in samplesDatabase array, generate code viewer .json files
    // NOTE see existing file in src/assets/samples/*.json
    if (cb) cb();
} exports.generateCodeViewerFiles = generateCodeViewerFiles;

function cleanSamples() {
    log("cleanSamples: " + sampleOutput);
    return del([
          sampleOutput + "*.ts",
          sampleOutput + "**/*.ts",
          sampleOutput + "**/*.html",
          sampleOutput + "**/*.scss",
          sampleOutput + "**/*.css"
    ],{force: true});
} exports.cleanSamples = cleanSamples;

function skipSamples(cb) {
    if (cb) cb();
} exports.skipSamples = skipSamples;

function listSamples(cb) {
    var fileFormat = "package.json";
    var fileSources = [
        // including these samples:
        sampleRoot + 'charts/**/' + fileFormat,
     // sampleRoot + 'charts/doughnut-chart/**/' + fileFormat,
     // sampleRoot + 'charts/sparkline/**/' + fileFormat,
     // sampleRoot + 'charts/tree-map/**/' + fileFormat,
     // sampleRoot + 'charts/pie-chart/**/' + fileFormat,
     // sampleRoot + 'charts/category-chart/**/' + fileFormat,
     // sampleRoot + 'charts/financial-chart/**/' + fileFormat,
        sampleRoot + 'maps/**/' + fileFormat,
        sampleRoot + 'gauges/**/' + fileFormat,
        sampleRoot + 'spreadsheet/**/' + fileFormat,
         // excluding these samples:
        '!'+sampleRoot + '**/excel-library/**/' + fileFormat,
        '!'+sampleRoot + '**/zoomslider/**/' + fileFormat,
        '!'+sampleRoot + '**/node_modules/**/' + fileFormat, // excluding node_modules sub-folders
     ];

    gulp.src(fileSources, {allowEmpty: true})
    .pipe(es.map(function(file, fileCallback) {
        // let filePath = getRelativePath(file);
        // let fileContent = file.contents.toString();
        // let fileLines = fileContent.split('\n');
        // let fileStart = fileLines[0];
        // if (fileStart.indexOf("container sample") < 0) {
        //     console.log("'" + JSON.stringify(fileStart) + "' " + filePath);
        // }
        log(" " + file.dirname + "/" + file.basename);

        fileCallback(null, file);
    }))
    .on("end", function() {
        if (cb) cb();
    });
} exports.listSamples = listSamples;


// C:\REPOS\igniteui-angular-examples/samples\charts\data-chart-axis-sharing/
// returns                                         ../samples/charts/data-chart-axis-sharing/
function getRelativePath(filePath) {
    var relativePath = filePath.split(repoName)[1];
    relativePath = relativePath.split("\\").join("/");

    if (relativePath.indexOf("/samples/") > 0)
        relativePath = ".." + relativePath; // relative samples ../samples/charts/data-chart-axis-sharing/
    else
        relativePath = "." + relativePath;  // relative browser ./browser/src/samples/charts/data-chart-axis-sharing/
    return relativePath;
}
