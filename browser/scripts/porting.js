// DO NOT CHANGE THIS FILE!

// this file contains scripts for porting live-editing sample, and updating them:
// - adding tsconfig files
// - updating package.json to angular v12
// - updating package.json with 'npm run start' script
// - replacing /app/pie-chart-styling/pie-chart-styling.component.html >> /app/app.component.html
// - replacing /app/pie-chart-styling/pie-chart-styling.component.scss >> /app/app.component.scss
// - replacing /app/pie-chart-styling/pie-chart-styling.component.ts   >> /app/app.component.ts

const gulp = require("gulp");
const chmod = require("gulp-chmod");
const flatten = require("gulp-flatten");
const fs = require("fs");
const path = require("path");
const es = require("event-stream");
const del = require("del");

const utils = require("./utils.js")
const EOL = '\r\n';

function log(msg) {
    console.log("porting.js >> " + msg);
} exports.log = log;

// log("loaded");

const repoName   =       "igniteui-live-editing-samples";
const repoPath   = "../../igniteui-live-editing-samples/angular-demos-dv/";
const repoOutput = "../samples/"; // ../samples-tmp/
const repoSourcePaths = [
    // repoPath + "**/package.json", // include all samples
    // repoPath + "charts/pie-chart*/**/package.json",
    // repoPath + "charts/data-chart*/**/package.json",
    // repoPath + "charts/tree-map-chart*/**/package.json",
    // repoPath + "charts/sparkline-chart*/**/package.json",
    // repoPath + "charts/doughnut-chart*/**/package.json",
    // repoPath + "charts/category-chart*/**/package.json",
    // repoPath + "charts/zoomslider-overview/**/package.json",
    // repoPath + "charts/**/package.json",
    // repoPath + "gauges/**/package.json",
    // repoPath + "excel-library/**/package.json",
    // repoPath + "maps/**/package.json",
    repoPath + "charts/category-chart-highlighting/package.json",
    repoPath + "charts/category-chart-point-chart-styling/package.json",
    repoPath + "charts/data-chart-axis-sharing/package.json",
    repoPath + "charts/financial-chart-stock-index-chart/package.json",
    repoPath + "charts/tree-map-overview/**/package.json",
    repoPath + "charts/sparkline-markers/package.json",
    repoPath + "charts/pie-chart-styling/package.json",
    repoPath + "gauges/linear-gauge-labels/package.json",
    repoPath + "gauges/radial-gauge-ranges/package.json",
    repoPath + "excel-library/excel-library-overview/**/package.json",
    repoPath + "maps/geo-map-overview/package.json",
    repoPath + "maps/geo-map-display-esri-imagery/package.json",

  "!" + repoPath + "**/node_modules/**/package.json" // excluding node_modules sub-folders
];

//      C:\REPOS\igniteui-live-editing-samples\angular-demos-dv\charts\pie-chart-legend/
// returns ../../igniteui-live-editing-samples/angular-demos-dv/charts/pie-chart-legend/
function getRelativePath(dirPath) {
    var relativePath = dirPath.split(repoName)[1];
    relativePath = "../../" + repoName + relativePath;
    relativePath = relativePath.split("\\").join("/");
    return relativePath;
}

// C:\REPOS\igniteui-live-editing-samples\angular-demos-dv\charts\pie-chart-legend\
// returns                                                 charts\pie-chart-legend\
function getRelativeFolder(dirPath) {
    var ret = dirPath.split(repoName)[1];
    ret = ret.split("\\").join("/");
    ret = ret.replace("/angular-demos-dv/", "");
    ret = ret.replace("/angular-demos-lob/", "");
    ret = ret.replace("/angular-demos/", "");
    return ret;
}

// C:\REPOS\igniteui-live-editing-samples\angular-demos-dv\charts\pie-chart-legend\
// returns                                                            charts
function getSampleGroup(dirPath) {
    var ret = getRelativeFolder(dirPath);
    ret = ret.split("/")[0];
    return ret;
}

var controlNames = [
    "data-chart",
    "category-chart",
    "doughnut-chart",
    "pie-chart",
    "sparkline",
    "tree-map",
    "zoomslider",
    "financial-chart",
    "linear-gauge",
    "bullet-graph",
    "radial-gauge",
    "geo-map",
    "excel-library",
];

// C:\REPOS\igniteui-live-editing-samples\angular-demos-dv\charts\pie-chart-legend\
// returns                                                        pie-chart
function getSampleControl(dirPath) {
    var group  = getSampleGroup(dirPath);
    // var folder = getSampleFolder(dirPath);
    var ret = getRelativeFolder(dirPath);
    ret = ret.replace(group + "/", "");

    for (const name of controlNames) {
        if (ret.indexOf(name) >= 0) {
            // log("control: " + name)
            //var name = sample.replace(control + "-", "");
            //log("name: " + name)
            return name;
        }
    }

    ret = ret.replace("-" + folder, "");
    return ret
}

// C:\REPOS\igniteui-live-editing-samples\angular-demos-dv\charts\pie-chart-legend\
// returns                                                                  legend
function getSampleFolder(dirPath) {
    var group   = getSampleGroup(dirPath);
    var control = getSampleControl(dirPath);
    var ret = getRelativeFolder(dirPath);

    var folder  = ret.replace(group + "/", "").replace(control + "-", "");
    return folder;
}

// C:\REPOS\igniteui-live-editing-samples\angular-demos-dv\charts\pie-chart-legend\
// returns                                      ../samples/charts/pie-chart/legend/
function getOutputPath(dirPath) {
    var group   = getSampleGroup(dirPath);
    var control = getSampleControl(dirPath);
    var folder  = getSampleFolder(dirPath);
    outputPath = repoOutput + group + "/" + control + "/" + folder + "/";

    // log("getSampleGroup " + group)
    // log("getSampleControl " + control)
    // log("getSampleFolder " + folder)
    return outputPath;
}

function exportAppComponentCSS(sample) {
    var sampleFile = "";
    for (const filePath of sample.FilesComponent) {
        if (filePath.indexOf("component.scss") > 0){
            sampleFile = filePath;
        }
    }
    var content = utils.fileRead(sampleFile);
    var outputPath = sample.OutputPath + "src/app/app.component.scss";
    // log("exportAppComponentCSS: " + outputPath);
    utils.fileSave(outputPath, content);
}

function exportAppComponentHTML(sample, sampleFile) {
    var content = utils.fileRead(sampleFile);
    var outputPath = sample.OutputPath + "src/app/app.component.html";
    // log("exportAppComponentHTML: " + outputPath);
    utils.fileSave(outputPath, content);
}

function exportAppModuleTS(sample, sampleFile) {
    var content = utils.fileRead(sampleFile);
    var importMatches = content.match(/import.\{.(.*Component)(.*)/gm);
    var importClass = "";
    var importLine = "";

    for (const line of importMatches) {
        // skip AppComponent
        if (line.indexOf("AppComponent") < 0) {
            importLine = line
            importClass = line.match(/import.\{.(.*Component)(.*)/)[1];
            // log("importMatches: " + line);
        }
    }
    // log("importClass: '" + importClass + "'");
    content = content.replace(importLine + "", "");
    content = content.replace(importClass + ",", "");
    content = content.replace(importClass + "", "");

    //content = content.replace(importClass, "");
    // content = content.replace("\t", "    ");
    var lines = updateDataReference(content, sample.FilesData);
    content = utils.joinLines(lines);

    var outputPath = sample.OutputPath + "src/app/app.module.ts";
    // log("exportAppModuleTS: \n" + content);
    utils.fileSave(outputPath, content);
}

function exportSampleFile(sample, sampleFile) {
    // log("exportSampleFile: " + sampleFile);
    var content = utils.fileRead(sampleFile);
    var outputPath = repoOutput + getRelativeFolder(sampleFile);

    var subFolder1 = sample.OutputGroup + "/" + sample.OutputControl + "-" + sample.OutputFolder + "/";
    var subFolder2 = sample.OutputGroup + "/" + sample.OutputControl + "/" + sample.OutputFolder + "/";
    outputPath = outputPath.replace(subFolder1, subFolder2);

    // log("exportDataFile2: " + outputPath);
    utils.fileSave(outputPath, content);
}

function exportDataFile(sample, fileInfo) {
    // log("exportDataFile: " + fileInfo.sourcePath);
    var content = utils.fileRead(fileInfo.sourcePath);
    var outputPath = fileInfo.outputPath; // repoOutput + getRelativeFolder(sampleFile);

    var subFolder1 = sample.OutputGroup + "/" + sample.OutputControl + "-" + sample.OutputFolder + "/";
    var subFolder2 = sample.OutputGroup + "/" + sample.OutputControl + "/" + sample.OutputFolder + "/";
    outputPath = outputPath.replace(subFolder1, subFolder2);

    // log("exportDataFile2: " + outputPath);
    utils.fileSave(outputPath, content);
}

function updateDataReference(fileContent, dataFiles) {
    var lines = utils.splitLines(fileContent);
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].indexOf('import') >= 0) {
            for (const data of dataFiles) {
                if (lines[i].indexOf(data.sourceName) >=  0) {
                    lines[i] = lines[i].replace('../' + data.sourceFolder, '.'); // '../services' -> '.'
                    lines[i] = lines[i].replace('./'  + data.sourceFolder, '.');
                    lines[i] = lines[i].replace('././', './');
                    lines[i] = lines[i].replace(data.sourceName, data.outputName);
                }
            }
        }
    }
    return lines;
}

function exportAppComponentTS(sample, sampleFile) {
    // log("exportAppComponentTS: " + sampleFile);

    var content = utils.fileRead(sampleFile);
    var matchSelectorName = content.match(/selector:.(.*)/)[1];
    var matchStyleUrls = content.match(/styleUrls:.(.*)/)[1];
    var matchTemplateUrl = content.match(/templateUrl:.(.*)/)[1];
    var matchClassName = content.match(/class.(.*).\{/)[1];
        // log("matchSelectorName: " + matchSelectorName);
        // log("matchStyleUrls: " + matchStyleUrls);
        // log("matchTemplateUrl: " + matchTemplateUrl);
    content = content.replace(matchClassName, "AppComponent");
    content = content.replace(matchSelectorName, "\"app-root\",");
    content = content.replace(matchStyleUrls, "[\"./app.component.scss\"],");
    content = content.replace(matchTemplateUrl, "\"./app.component.html\"");

    // var lines = utils.splitLines(content);
    var lines = updateDataReference(content, sample.FilesData);
    // content = utils.joinLines(lines);

    var indexTemplateUrl = -1;
    var indexStyleUrls = -1;
    // var lines = utils.splitLines(content);

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].indexOf("styleUrls") >= 0) {
            indexStyleUrls = i;
        }
        if (lines[i].indexOf("templateUrl") >= 0) {
            indexTemplateUrl = i;
        }
    }

    if (indexTemplateUrl > 0 && indexTemplateUrl < indexStyleUrls) {
        var strTemplateUrl = lines[indexTemplateUrl].replace(',','');
        var strStyleUrls = lines[indexStyleUrls].replace(',','');
        lines[indexStyleUrls] = strTemplateUrl;
        lines[indexTemplateUrl] = strStyleUrls + ',';
    }
    content = utils.joinLines(lines);
    content = content.replace("../", "./");

    var outputPath = sample.OutputPath + "src/app/app.component.ts";
    // log("exportAppComponentTS: " + outputPath);

    utils.fileSave(outputPath, content);

    // log("exportAppComponentTS: " + outputPath);
}

function exportPackage(sample, sampleFile) {

    var templatePath = "../porting/templates/package.json";
    // log("templatePath: " + templatePath);
    var fileContent = utils.fileRead(templatePath);
    var fileLines = utils.splitLines(fileContent);

    for (let i = 0; i < fileLines.length; i++) {

        if (sample.OutputPath.indexOf("charts") < 0 &&
            sample.OutputPath.indexOf("maps") < 0) {
            if (fileLines[i].indexOf('"igniteui-angular-charts"') > 0) {
                fileLines[i] = "";
            }
        }

        if (sample.OutputPath.indexOf("gauges") < 0) {
            if (fileLines[i].indexOf('"igniteui-angular-gauges"') > 0) {
                fileLines[i] = "";
            }
        }

        if (sample.OutputPath.indexOf("maps") < 0) {
            if (fileLines[i].indexOf('"igniteui-angular-maps"') > 0) {
                fileLines[i] = "";
            }
        }

        if (sample.OutputPath.indexOf("excel") < 0) {
            if (fileLines[i].indexOf('"igniteui-angular-excel"') > 0) {
                fileLines[i] = "";
            }
            if (fileLines[i].indexOf('"igniteui-angular-spreadsheet-chart-adapter"') > 0) {
                fileLines[i] = "";
            }
            if (fileLines[i].indexOf('"igniteui-angular-spreadsheet"') > 0) {
                fileLines[i] = "";
            }
        }
    }
    fileContent = utils.joinLines(fileLines);
    var outputPath = sample.OutputPath + "package.json";
    utils.fileSave(outputPath, fileContent, true);
}

function exportAppFiles(sample) {
    for (const filePath of sample.FilesComponent) {
        // log("exportAppFiles " + filePath);
        if (filePath.indexOf("component.ts") > 0) {
            exportAppComponentTS(sample, filePath);
        }
        else if (filePath.indexOf("module.ts") > 0) {
            exportAppModuleTS(sample, filePath);
        }
        else if (filePath.indexOf("component.html") > 0) {
            exportAppComponentHTML(sample, filePath);
        }
        else if (filePath.indexOf("component.scss") > 0) {
            exportAppComponentCSS(sample, filePath);
        }
        else { //
            exportSampleFile(sample, filePath);
        }
    }

    for (const fileInfo of sample.FilesData) {
        exportDataFile(sample, fileInfo);
    }

    for (const filePath of sample.FilesOther) {
        if (filePath.indexOf("package.json") > 0) {
            exportPackage(sample, filePath);
        }
    }

}

function exportTemplateFiles(sample) {

    var templateFiles = [
        "src/index.html",
        "src/main.ts",
        "src/polyfills.ts",
        "src/styles.scss",
        "src/typings.d.ts",
        "src/config/tsconfig.app.json",
        "src/config/tsconfig.base.json",
        "src/config/tsconfig.spec.json",
        "src/config/tsconfig.worker.json",
        "src/config/tsconfig-es5.app.json",

        ".stackblitzrc",
        "angular.json",
        //"package.json",
        "tsconfig.json",
        "tsconfig.json"
    ];

    for (const filePath of templateFiles) {
        var templatePath = "../porting/templates/" + filePath;
        // log("templatePath: " + templatePath);

        var content = utils.fileRead(templatePath);
        var outputPath = sample.OutputPath + filePath;

        utils.fileSave(outputPath, content);
        // log("templatePath: " + outputPath);
    }
}

// this array stores info about all imported samples
let samplesDatabase = [];

function getSampleInfo(samplePath, sampleCallback, sampleDirector) {
    var sample = {};
    sample.SourcePath    = getRelativePath(samplePath);      // ../../igniteui-live-editing-samples/angular-demos-dv/charts/pie-chart-legend/
    sample.OutputPath    = getOutputPath(sample.SourcePath); // ../samples/charts/pie-chart-legend/
    sample.OutputGroup   = getSampleGroup(samplePath);       //           |charts|         |
    sample.OutputControl = getSampleControl(samplePath);     //                  |pie-chart|
    sample.OutputFolder  = getSampleFolder(samplePath);      //                  |         |legend|

    sample.RoutePath  = "/" + sample.OutputGroup;
    sample.RoutePath += "/" + sample.OutputControl;
    sample.RoutePath += "-" + sample.OutputFolder + "/";     // /charts/pie-chart-legend/

    sample.ComponentName = utils.toTitleCase(utils.replace(sample.OutputControl, "-", " ")); // Pie Chart
    sample.DisplayName   = utils.toTitleCase(utils.replace(sample.OutputFolder, "-", " "));  // Binding Data
    sample.FilesApp = [];           // e.g. /app/app.component.html
    sample.FilesComponent = [];     // e.g. /app/pie-chart-legend/pie-chart-legend.component.html
    sample.FilesData = [];          // e.g. /app/data.ts
    sample.FilesOther = [];         // e.g. /app/main.ts, package.json etc.
    // sample.SandboxUrlView = "";     // https://codesandbox.io/embed/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/pie-chart/legend
    // sample.SandboxUrlEdit = "";     //     https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/pie-chart/legend
    // sample.SandboxUrlShort = "",    //     https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/pie-chart/legend

    // C:\REPOS\GitInternalDocs\igniteui-live-editing-samples\angular-demos-dv\charts\financial-chart-stock-index-chart\src\app
    // C:\REPOS\GitInternalDocs\igniteui-live-editing-samples\angular-demos-dv\maps\geo-map-binding-data-model\src\app\utilities

    // log("ComponentName " + sample.ComponentName);
    // log("DisplayName " + sample.DisplayName);

    // log("SourcePath " + sample.SourcePath);
    // log("OutputPath " + sample.OutputPath);
    // log("OutputGroup " + sample.OutputGroup);
    // log("OutputControl " + sample.OutputControl);
    // log("OutputFolder " + sample.OutputFolder);

    // getting path to files in a given sample's source path:
    gulp.src([
          sample.SourcePath + "/**/*.*",
    "!" + sample.SourcePath + "/node_modules/**",
    // "!" + sample.SourcePath + "/*.d.ts"
    ])
    .pipe(es.map(function(file, fileCallback) {
        var filePath = getRelativePath(file.dirname + "/" + file.basename);
        //log("getSampleInfo " + filePath);

        // grouping files of a sample based on their locations
        if (filePath.indexOf('/app/app.module.ts') >= 0) {
            sample.FilesComponent.push(filePath);       // these files are replaced by sample.FilesComponent
            // log("A " + filePath);
        }
        else if (filePath.indexOf('/app/app.') >= 0) {
            sample.FilesApp.push(filePath);       // these files are replaced by sample.FilesComponent
            // log("A " + filePath);
        }
        else if (filePath.indexOf('component.') >= 0) {
            sample.FilesComponent.push(filePath);  // e.g. sample-name.component.ts
            // log("C " + filePath);
        }
        else if (filePath.indexOf('/app/') >= 0) { // data/services/utility files
            // log("C " + filePath);
            var fileName = file.basename;
            var fileFolder = filePath.toString().split('/app/')[1];

            var data = {};
            data.sourceFolder = fileFolder.replace('/' + fileName,'');
            data.sourcePath = filePath;

            data.sourceName = file.basename.replace('.ts','');
            data.sourceName = data.sourceName.replace('.json','');
            data.sourceName = data.sourceName.replace('.scss','');
            data.sourceName = data.sourceName.replace('.css','');

            data.outputName = data.sourceName;
            if (data.outputName.indexOf('.') >= 0) {
                data.outputName = utils.replace(data.outputName, ".", "-");
            }
            if (data.outputName.indexOf('-') >= 0) {
                data.outputName = utils.replace(data.outputName, "-", " ");
                data.outputName = utils.toTitleCase(data.outputName, " ");
            }
            data.outputName = utils.replace(data.outputName, " ", "");

            data.outputPath = file.basename.replace(data.sourceName,  data.outputName);
            data.outputPath = sample.OutputPath + "src/app/" + data.outputPath;

            sample.FilesData.push(data);

            // log(data);
            // log(sample);
            // log('fileFolder ' + fileFolder);
        }
        else {
            // sample.FilesOther.push(filePath);     // these files are not changed
            // log("O " + filePath);
        }

        fileCallback(null, file);
    }))
    .on("end", function() {
        // log("getPortSample " + location + " done");

        // log(sample);
        // saving info about samples in database
        samplesDatabase.push(sample);

        sampleCallback(null, sampleDirector);
    });
}

// importing samples form igniteui-live-editing-samples repo
function importSamples(cb) {

    samplesDatabase = []
    // log("importSamples... ");

    gulp.src(repoSourcePaths, {allowEmpty: true})
    .pipe(es.map(function(file, fileCallback) {
        log("importing: " + file.dirname);
        // saving info for each samples in samplesDatabase
        getSampleInfo(file.dirname, fileCallback, file);
        // fileCallback(null, file);
    }))
    .on("end", function() {
        // exporting all samples to repo/samples folder based on gathered sample info
        for (const sample of samplesDatabase) {
            log("exporting: " + sample.OutputPath);
            // modifying and exporting sample files
            exportAppFiles(sample);
            // overriding rest of files with template files
            exportTemplateFiles(sample);
        }

        // log("importSamples... done");
        cb();
    });
};
exports.importSamples = importSamples;
