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
const stats = require("./stats.js")

const EOL = '\r\n';

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
// returns                                     ../src/samples/charts/data-chart/axis-sharing/
function getOutputPath(dirPath) {
    var ret = getSamplePath(dirPath);
    ret = ret.replace("../samples/", "./src/samples/")
    return ret;
}

// NOTE you can comment out strings in this array to run these function only on a subset of samples
var sampleSourcePaths = [
    // include samples for all components
    sampleRoot + '**/package.json',

    // sampleRoot + 'charts/doughnut-chart/overview/package.json',
    // sampleRoot + 'charts/category-chart/area-chart-multiple-sources/package.json',
    // sampleRoot + 'gauges/**/measures/package.json',
    // sampleRoot + 'charts/sparkline/grid/package.json',
    // sampleRoot + 'maps/**/display-heat-imagery/package.json',
    // sampleRoot + 'excel/**/operations-on-workbooks/package.json',
    // sampleRoot + 'charts/zoomslider/overview/package.json',

    // include samples for specific components
    // sampleRoot + 'charts/category-chart/**/package.json',
    // sampleRoot + 'charts/data-chart/**/package.json',
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

    // sampleRoot + 'maps/geo-map/type-scatter-bubble-series/package.json',
    // sampleRoot + 'maps/geo-map/display-heat-imagery/package.json',
    // excluding package.json in node_modules sub folders in case they are installed locally
    // "!" + sampleRoot + '**/charts/financial-chart/theming/package.json',
    "!" + sampleRoot + '**/node_modules/**/package.json',
    '!' + sampleRoot + '**/node_modules/**',
    '!' + sampleRoot + '**/node_modules',
];

// stores info about each sample: folder path, file paths, routing path, etc
var samplesDatabase = [];

function getSampleInfo(samplePath, sampleCallback, sampleFile) {
    var info = {};
    info.SourcePath    = getSamplePath(samplePath);     //     ../samples/charts/data-chart/axis-sharing/
    info.OutputPath    = getOutputPath(samplePath);     //  ./src/samples/charts/data-chart/axis-sharing/
    info.SampleGroup   = getSampleGroup(samplePath);    //               |charts|          |
    info.SampleControl = getSampleControl(samplePath);  //                      |data-chart|
    info.SampleFolder  = getSampleFolder(samplePath);   //                      |          |axis-sharing|
    // console.log("SamplePath " + samplePath);
    // console.log("OutputPath  " + info.OutputPath);
    // console.log("SourcePath " + info.SourcePath);
    // console.log("SampleGroup   " + info.SampleGroup);
    // console.log("SampleControl " + info.SampleControl);
    // console.log("SampleFolder  " + info.SampleFolder);

    // for backward comparability:
    // using old routing that uses "-" between ComponentFolder and sample SampleFolderName
    // using new routing that uses "/" between ComponentFolder and sample SampleFolderName
    // new routing path matches exactly sample path this makes it easier to use in docs since routing and github source are the same
    info.SampleRoutePathOld = info.SampleControl + "-" + info.SampleFolder;  // data-chart-axis-sharing
    info.SampleRoutePathNew = info.SampleControl + "/" + info.SampleFolder;  // data-chart/axis-sharing

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

    info.SourceComponentHTML = "";        // e.g. ./samples/charts/data-chart/axis-sharing/src/app.component.html
    info.SourceComponentSCSS = "";        // e.g. ./samples/charts/data-chart/axis-sharing/src/app.component.scss
    info.SourceComponentTS = "";          // e.g. ./samples/charts/data-chart/axis-sharing/src/app.component.ts
    info.SourceModuleTS = "";             // e.g. ./samples/charts/data-chart/axis-sharing/src/app.module.ts
    info.SourceDataFiles = [];            // e.g. ./samples/charts/data-chart/axis-sharing/src/SampleFinancialData.ts
    info.SourceFiles = [];  // all above
    info.ImportsLines = [];
    info.ImportsModules = [];

    // getting path to files in a given sample's source path:
    gulp.src([
          info.SourcePath + "/src/*.*",
          info.SourcePath + "/src/app/*.*",
    "!" + info.SourcePath + "/src/index.html",
    "!" + info.SourcePath + "/src/main.ts",
    "!" + info.SourcePath + "/src/polyfills.ts",
    "!" + info.SourcePath + "/src/styles.scss",
    "!" + info.SourcePath + "/src/typings.d.ts",
    "!" + info.SourcePath + "/src/config/*.*",
    "!" + info.SourcePath + "/node_modules/**",
    ])
    .pipe(es.map(function(file, fileCallback) {
        // console.log("getSampleInfo " + file.dirname + "/" + file.basename);
        var filePath = getSamplePath(file.dirname + "/" + file.basename);
        //log("getSampleInfo " + filePath);

        if (filePath.indexOf('/app.module.ts') >= 0) {
            info.SourceModuleTS = filePath;
            var fileContent = file.contents.toString();
            getSampleModules(fileContent, info);
        }
        else if (filePath.indexOf('/app.component.html') >= 0) {
            info.SourceComponentHTML = filePath;
        }
        else if (filePath.indexOf('/app.component.ts') >= 0) {
            info.SourceComponentTS = filePath;
        }
        else if (filePath.indexOf('/app.component.scss') >= 0) {
            info.SourceComponentSCSS = filePath;
        }
        // else if (filePath.indexOf('.css') < 0) {
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
        sampleCallback(null, sampleFile);
    });
}

function getSampleModules(fileContent, info) {
    var content = fileContent.replace(/\r\n/g, '').replace(/\n/g, '');
    var lines = content.split(';');
    info.ImportsLines = [];
    info.ImportsModules = [];

    for (const line of lines) {

        if (line.indexOf('import ') >= 0 && line.indexOf('Module') >= 0) {

            var importLine = line.replace('\r\n', '');
            importLine = importLine.split('\'').join('"');
            importLine = importLine.split('  ').join(' ');

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
                            module = utils.replace(module, '\r\n', '');
                            module = module.trim();

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
               module = module.trim();
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
        // log("sample: " + file.dirname);
        getSampleInfo(file.dirname, fileCallback, file);
    }))
    .on("end", function() {
        log("findSamples... done = " + samplesDatabase.length);
        cb();
    });

} exports.findSamples = findSamples;

exports.generateStats = function generateStats(cb) {
    var combinedSamples = [];
    for (const info of samplesDatabase) {
        // console.log(info);
        var samplePath = info.SourcePath.replace('samples/', '').replace('../','');
        combinedSamples.push(samplePath);
        break;
    }
    combinedSamples.sort();
    stats.generate(cb, combinedSamples);
}

// this function is copying source files for individual samples to browser
// generates modules for samples, routing data, and routing modules
function copySamples(cb) {
    //log("copySamples");

    //log("copySamples = " + samplesDatabase.length);

    const outputFolder = "./src/samples/**/";
    log("cleaning up: " + outputFolder);
    del.sync(outputFolder + "/**");

    var controlsModules = {}; // storing modules per each control, e.g. data-chart
    var groupModules = {};    // storing modules for multiple controls, e.g. charts
    var routingStorage = {};    // storing routing data for all samples

    // copying all samples to repo/samples folder based on gathered sample info
    for (const info of samplesDatabase) {

        //log("copying sample: " + info.SourcePath);

        var group = info.SampleGroup;
        var control = info.SampleControl;
        var importComponent = 'import { ' + info.SampleClassName + ' } from ' + '"./' + info.SampleFolder + '/app.component";';

        // log("copySamples " + importComponent);

        if (routingStorage[group] === undefined) {
            routingStorage[group] = {}
            routingStorage[group].Group = info.SampleGroup;
            routingStorage[group].Control = info.ControlName;
            routingStorage[group].ModuleName = "RoutingDataFor" + utils.toTitleCase(info.SampleGroup);
            routingStorage[group].Samples = {};
            routingStorage[group].Modules = [];
            routingStorage[group].Imports = [];
            routingStorage[group].Output = './src/samples/' + info.SampleGroup+ '/';
        }

        var routing = info.SampleRoutePathNew;
        if (routingStorage[group].Samples[routing] === undefined) {
            var data = {
                showLink: true,
                routing: routing,
                name: info.SampleDisplayName,
                parent: info.ControlName,
                componentImport: importComponent.replace('./', './' + info.SampleControl + '/'),
                componentName: info.SampleClassName,
            };
            routingStorage[group].Samples[routing] = data;
        }

        // TODO remove in 23.2 release
        routing = info.SampleRoutePathOld;
        if (routingStorage[group].Samples[routing] === undefined) {
            var data = {
                showLink: false,
                routing: routing,
                name: info.SampleDisplayName,
                parent: info.ControlName,
                componentImport: importComponent.replace('./', './' + info.SampleControl + '/'),
                componentName: info.SampleClassName,
            };
            routingStorage[group].Samples[routing] = data;
        }
        // grouping sample's modules by group of controls, e.g. charts
        if (groupModules[group] === undefined) {
            groupModules[group] = {}
            groupModules[group].Group = info.SampleGroup;
            groupModules[group].Control = info.ControlName;
            groupModules[group].ModuleName = "SamplesFor" + utils.toTitleCase(info.SampleGroup);
            groupModules[group].Modules = [];
            groupModules[group].Imports = [];
            groupModules[group].Components = [];
            groupModules[group].Path = './src/samples/' + info.SampleGroup + '/samples-modules.ts';
        }

        // grouping sample's modules by the control that is used in samples
        if (controlsModules[control] === undefined) {
            controlsModules[control] = {}
            controlsModules[control].Group = info.SampleGroup;
            controlsModules[control].Control = info.ControlName;
            controlsModules[control].ModuleName = "SamplesFor" + info.ControlName;
            controlsModules[control].Modules = [];
            controlsModules[control].Imports = [];
            controlsModules[control].Components = [];
            controlsModules[control].DataFiles  = [];
            controlsModules[control].Path = './src/samples/' + info.SampleGroup + '/' + info.SampleControl + '/samples-modules.ts';
            // controlsModules[control].Path = './src/samples/' + info.SampleGroup + '/' + info.SampleControl + '/' + info.SampleControl + 'samples-modules.ts';

            var controlsModule = controlsModules[control].ModuleName.trim();
            var controlsPath = './' + info.SampleControl + '/samples-modules';
            var controlsImport = 'import { ' + controlsModule + ' } from "' + controlsPath + '";';
            if (groupModules[group].Imports.indexOf(controlsImport) < 0) {
                groupModules[group].Imports.push(controlsImport);
            }
            if (groupModules[group].Modules.indexOf(controlsModule) < 0) {
                groupModules[group].Modules.push(controlsModule);
            }

            var commonModule = 'CommonModule';
            var commonImport = 'import { ' + commonModule + ' } from "@angular/common";';
            if (groupModules[group].Imports.indexOf(commonImport) < 0) {
                groupModules[group].Imports.push(commonImport);
            }
            if (groupModules[group].Modules.indexOf(commonModule) < 0) {
                groupModules[group].Modules.push(commonModule);
            }

            if (routingStorage[group].Imports.indexOf(controlsImport) < 0) {
                routingStorage[group].Imports.push(controlsImport);
            }
            if (routingStorage[group].Modules.indexOf(controlsModule) < 0) {
                routingStorage[group].Modules.push(controlsModule);
            }
        }

        controlsModules[control].Components.push(info.SampleClassName);

        for (const module of info.ImportsModules) {

            if (module.trim() !== "" &&
                module.indexOf('BrowserModule') < 0 &&
                module.indexOf('BrowserAnimationsModule') < 0 &&
                controlsModules[control].Modules.indexOf(module) < 0) {
                controlsModules[control].Modules.push(module);
            }

            if (module.trim() !== "" &&
                module.indexOf('BrowserModule') < 0 &&
                module.indexOf('BrowserAnimationsModule') < 0 &&
                module.indexOf('Component') < 0 &&
                groupModules[group].Modules.indexOf(module) < 0) {
                groupModules[group].Modules.push(module);
            }
        }

        for (const line of info.ImportsLines) {

            if (line.indexOf('BrowserModule') < 0 &&
                line.indexOf('BrowserAnimationsModule') < 0 &&
                line.indexOf('import {  } from') < 0 &&
                controlsModules[control].Imports.indexOf(line) < 0) {
                controlsModules[control].Imports.push(line);
            }

            if (line.indexOf('BrowserModule') < 0 &&
                line.indexOf('BrowserAnimationsModule') < 0 &&
                line.indexOf('Component') < 0 &&
                line.indexOf('import {  } from') < 0 &&
                groupModules[group].Imports.indexOf(line) < 0) {
                groupModules[group].Imports.push(line);
            }
        }

        // adding import for the current sample's component
        if (controlsModules[control].Imports.indexOf(importComponent) < 0)
            controlsModules[control].Imports.push(importComponent);

        for (const filePath of info.SourceFiles) {

            if (filePath.indexOf('app.module.ts') > 0) continue;

            var fileContent = utils.fileRead(filePath);
            var fileName    = utils.fileName(filePath);
            var fileOutput  = info.OutputPath + "/" + fileName;

            if (filePath.indexOf('app.component.ts') > 0) {
                log("generating sample:  " + fileOutput); // + ' from ' + filePath );
                fileContent = fileContent.replace('class AppComponent', 'class ' + info.SampleClassName);
            }
            else if (filePath.indexOf('app.') < 0) {
                //var dataPath = fileOutput.replace('.ts', '');
                var dataName = fileName.replace('.ts', '');
                var dataPath = './' +  info.SampleFolder + '/' + dataName;

                // if (controlsModules[control].DataFiles[dataPath] === undefined) {
                //     controlsModules[control].DataFiles[dataPath] = dataName;

                if (dataName.indexOf('Worker') < 0 && // HeatmapWorker
                    dataName.indexOf('.css') < 0 &&
                    controlsModules[control].DataFiles.indexOf(dataName) < 0) {
                    controlsModules[control].DataFiles.push(dataName);

                    var dataImport = 'import { ' + dataName + ' } from "' + dataPath + '";';
                    if (controlsModules[control].Imports.indexOf(dataImport) < 0)
                        controlsModules[control].Imports.push(dataImport);
                }
                //controlsModules[control].DataFiles.push(importComponent);
            }

            //log("copying: " + filePath);
            utils.fileSave(fileOutput, fileContent);
        }
    }

    // console.log(controlsModules);

    // generating ./src/samples/GROUP/CONTROL/samples-modules.ts
    for(var key in controlsModules) {
        var data = controlsModules[key];
        data.Modules.sort();
        data.Imports.sort();

        // log("generating samples' control: " + data.Path + ' ' + data.Modules.length + ' modules ' +  data.Imports.length + ' imports');
        var ret = "";
        ret += "/* tslint:disable */ \r\n\r\n";
        for (const line of data.Imports) {
            ret += line + "\n";
        }

        if (data.DataFiles.length > 0) {
            ret += 'import { ModuleWithProviders } from "@angular/core";\r\n';
        }

        ret += "\r\n";
        ret += "@NgModule({\r\n";
        ret += "   declarations: [\r\n";
        ret += data.Components.join(',\r\n');
        ret += "\r\n   ], \r\n";
        ret += "   imports: [\r\n";
        ret += data.Modules.join(',\r\n');
        ret += " \r\n   ] \r\n";
        ret += "}) \r\n\r\n";
        ret += "export class " + data.ModuleName  + " {";

        if (data.DataFiles.length > 0) {
            ret += "\r\n";
            ret += "    public static forRoot(): ModuleWithProviders<" + data.ModuleName + "> {\n";
            ret += "        return {\r\n";
            ret += "           ngModule: " + data.ModuleName + ",\r\n";
            ret += "           providers: [\r\n";
            ret += "                " + data.DataFiles.join(',\r\n                ') + "\r\n";
            ret += "           ]\r\n";
            ret += "        };\r\n";
            ret += "    }\r\n";
        }
        ret += "} \r\n";

        // console.log(ret);

        utils.fileSave(data.Path, ret);
    }
    var appModuleRoutes = [];

    // generating ./src/samples/GROUP/samples-modules.ts
    for(var key in groupModules) {
        var data = groupModules[key];

        var routingClass = 'RoutingModulesFor' + utils.toTitleCase(key);
        var routingImport = 'import { ' + routingClass + ' } from "./routing-modules";';
        data.Imports.push(routingImport);
        data.Modules.push(routingClass);
        data.Modules.sort();
        data.Imports.sort();

        // log("generating group module:   " + data.Path + ' ' + data.Modules.length + ' modules ' +  data.Imports.length + ' imports');
        var ret = "/* tslint:disable */ \n\n";
        for (const line of data.Imports) {
            ret += line + "\r\n";
        }
        ret += "\r\n";
        ret += "@NgModule({\r\n";
        ret += "   imports: [\r\n";
        ret += "" + data.Modules.join(',\r\n');
        ret += " \r\n   ] \r\n";
        ret += "}) \r\n\r\n";
        ret += "export class " + data.ModuleName  + " {} \r\n";
        // console.log(ret);
        utils.fileSave(data.Path, ret); // ./src/samples/GROUP/samples-modules.ts

        var appRouteImport = 'import("../samples/' + key + '/samples-modules").then(m => m.' + data.ModuleName + ')';
        var appRouteInfo   = '    { path: "' + key + '", data: ["' + data.ModuleName + '"], loadChildren: () => ' + appRouteImport + ' }';
        appModuleRoutes.push(appRouteInfo);
    }

    var routingDataImports = [];
    var routingDataArray = [];
    for(var group in routingStorage) {
        var data = routingStorage[group];

        var routingDataFile = 'routing-data';
        var routingData = "/* tslint:disable */ \r\n\r\n";
        routingData += "export const " + data.ModuleName + " = { \r\n";

        // generating ./src/samples/GROUP/routing-data.ts
        var routingOutputPath = data.Output + routingDataFile + '.ts';
        // log("generating group routing data: " + routingOutputPath);
        var routingSamples = [];
        var routingComponents = [];
        for(var routing in data.Samples) {
            var sample = data.Samples[routing];
            var str = '    "' + routing + '": { displayName: ' + '"' + sample.name + '", parentName: "' + sample.parent + '", showLink: ' + sample.showLink + ' }';
            routingSamples.push(str);
            var strRouting = '"' + routing + '"';
            var strData = data.ModuleName + '[' + strRouting + ']';
            var strComp = ' { component: ' + sample.componentName + ', path: ' + strRouting + ', data: ' + strData + ' }';
            routingComponents.push(strComp);
            if (sample.showLink) {
                data.Imports.push(sample.componentImport);
            }
        }
        routingData += routingSamples.join(',\r\n');
        routingData += "\r\n";
        routingData += "}; \r\n";

        //console.log(ret);
        utils.fileSave(routingOutputPath, routingData);

        var routingDataImport = "import { " + data.ModuleName + ' } from "../../samples/' + group + '/' + routingDataFile + '";';
        routingDataImports.push(routingDataImport);

        var routingDataItem = '        { path: "' + group + '", routesData: ' + data.ModuleName + ' }'
        routingDataArray.push(routingDataItem);

        // generating ./src/samples/GROUP/routing-modules.ts
        var routingModulePath = data.Output + 'routing-modules.ts';
        // log("generating group routing module: " + routingModulePath);
        var routingExportName = 'RoutesFor' + utils.toTitleCase(group);
        var routingModules = "/* tslint:disable */ \r\n\r\n";
        routingModules += 'import { NgModule } from "@angular/core";\r\n';
        routingModules += 'import { RouterModule, Routes } from "@angular/router";\r\n';
        routingModules += "\r\n";
        routingModules += "import { " + data.ModuleName + ' } from "./' + routingDataFile + '"; \r\n';;
        routingModules += "\r\n";
        routingModules += data.Imports.join('\r\n');
        routingModules += "\r\n\r\n";
        routingModules += 'export const ' + routingExportName + ': Routes = [\r\n'
        routingModules += routingComponents.join(',\r\n');
        routingModules += "\r\n];\r\n\r\n";

        var routingClassName = 'RoutingModulesFor' + utils.toTitleCase(group);
        routingModules += "@NgModule({\r\n";
        routingModules += "   exports: [\r\n";
        routingModules += 'RouterModule \r\n';
        routingModules += "    ], \r\n";
        routingModules += "   imports: [\r\n";
        routingModules += data.Modules.join(',\r\n') + ",\r\n";
        routingModules += 'RouterModule.forChild(' + routingExportName + ') \r\n'
        routingModules += "    ] \r\n";
        routingModules += "}) \r\n\r\n";
        routingModules += 'export class ' + routingClassName + ' { }\r\n'

        utils.fileSave(data.Output + 'routing-modules.ts', routingModules);
        //console.log(routingModules);

    }
    // console.log(routingStorage);


    // updating ./src/app.routing.module.ts
    var appModuleFile = './src/app/app-routing.module.ts';
    var appModuleContent = utils.fileRead(appModuleFile);
    var appModuleLines = appModuleContent.split('\r\n');
    //console.log('appModuleLines ' + appModuleLines.length);
    let autoInsertStart = -1;
    let autoInsertEnd = -1;
    // log('updating ' + appModuleFile)

    for (let i = 0; i < appModuleLines.length; i++) {
        let line = appModuleLines[i];
        if (line.indexOf("Auto-Insert-Modules-Start") > 0) {
            autoInsertStart = i;
        }
        else if (line.indexOf("Auto-Insert-Modules-End") > 0) {
            autoInsertEnd = i;
        }
    }
    if (autoInsertStart < 0 ) {
        throw new Exception("File " + appModuleFile + "\r\n is missing: 'Auto-Insert-Modules-Start' ");
    }
    else if (autoInsertEnd < 0 ) {
        throw new Exception("File " + appModuleFile + "\r\n is missing: 'Auto-Insert-Modules-End' ");
    }
    else if (autoInsertStart > 0 && autoInsertEnd > 0) {
        for (let i = autoInsertStart+1; i < autoInsertEnd; i++) {
            appModuleLines[i] = ""; // clearing previously auto-generated inserts
        }
        appModuleRoutes = appModuleRoutes.sort();
        // adding latest auto-generated inserts for JS files
        appModuleLines[autoInsertStart + 1] = appModuleRoutes.join(',\r\n');
        appModuleContent = appModuleLines.join('\r\n');
        utils.fileSave(appModuleFile, appModuleContent, true);
    }

    // updating ./src/app/index/index.component.ts
    var appIndexFile = './src/app/index/index.component.ts';
    var appIndexContent = utils.fileRead(appIndexFile);
    var appIndexLines = appIndexContent.split('\r\n');
    let appIndexRoutingImportStart = -1;
    let appIndexRoutingImportEnd = -1;
    // log('updating ' + appIndexFile)

    let appIndexRoutingArrayStart = -1;
    let appIndexRoutingArrayEnd = -1;
    for (let i = 0; i < appIndexLines.length; i++) {
        let line = appIndexLines[i];
        if (line.indexOf("Auto-Insert-Imports-RoutingData-Start") > 0) {
            appIndexRoutingImportStart = i;
        }
        else if (line.indexOf("Auto-Insert-Imports-RoutingData-End") > 0) {
            appIndexRoutingImportEnd = i;
        }

        if (line.indexOf("Auto-Insert-SamplesRoutingArray-Start") > 0) {
            appIndexRoutingArrayStart = i;
        }
        else if (line.indexOf("Auto-Insert-SamplesRoutingArray-End") > 0) {
            appIndexRoutingArrayEnd = i;
        }
    }

    var appIndexChanged = false;
    if (appIndexRoutingImportStart > 0 && appIndexRoutingImportEnd > 0) {
        for (let i = appIndexRoutingImportStart+1; i < appIndexRoutingImportEnd; i++) {
            appIndexLines[i] = ""; // clearing previously auto-generated inserts
        }
        routingDataImports = routingDataImports.sort();
        // adding latest auto-generated inserts for JS files
        appIndexLines[appIndexRoutingImportStart + 1] = routingDataImports.join('\r\n');
        appIndexChanged = true;
    }

    if (appIndexRoutingArrayStart > 0 && appIndexRoutingArrayEnd > 0) {
        for (let i = appIndexRoutingArrayStart+1; i < appIndexRoutingArrayEnd; i++) {
            appIndexLines[i] = ""; // clearing previously auto-generated inserts
        }
        routingDataArray = routingDataArray.sort();
        // adding latest auto-generated inserts for JS files
        appIndexLines[appIndexRoutingArrayStart + 1] = routingDataArray.join(',\r\n');
        appIndexChanged = true;
    }

    if (appIndexChanged) {
        appIndexContent = appIndexLines.join('\r\n');
        utils.fileSave(appIndexFile, appIndexContent, true);
    }

    // console.log('appIndexLines ' + appIndexRoutingArrayStart + ' ' + appIndexRoutingImportStart);

    if (cb) cb();

} exports.copySamples = copySamples;

function updateCodeViewer(cb) {

    const outputFolder = "./src/assets/code-viewer/";
    log("cleaning up: " + outputFolder);
    del.sync(outputFolder + "/**");

    // generating code viewer files (.json) for each sample
    for (const info of samplesDatabase) {
        var sampleFiles = [];
        // console.log(info);

        // https://staging.infragistics.com/angular-demos-dv/assets/code-viewer/
        // zoomslider-overview.json OLD format
        // zoomslider/overview.json NEW format

        var codeViewPath = outputFolder + info.SampleRoutePathNew + ".json";
        log("generating: " + codeViewPath);

        for (const filePath of info.SourceFiles) {
            var codeViewItem = {
                hasRelativeAssetsUrls: false,
                isMain: true,
            };

            if (filePath.indexOf(".scss") > 0) {
                codeViewItem.fileExtension = 'scss';
                codeViewItem.fileHeader = 'scss';
            }
            else if (filePath.indexOf(".module.ts") > 0) {
                codeViewItem.fileExtension = 'ts';
                codeViewItem.fileHeader = 'modules';
            }
            else if (filePath.indexOf(".component.ts") > 0) {
                codeViewItem.fileExtension = 'ts';
                codeViewItem.fileHeader = 'ts';
            }
            else if (filePath.indexOf(".ts") > 0) {
                codeViewItem.fileExtension = 'ts';
                codeViewItem.fileHeader = "DATA";
            }
            else if (filePath.indexOf(".html") > 0) {
                codeViewItem.fileExtension = 'html';
                codeViewItem.fileHeader = 'html';
            }

            codeViewItem.path = filePath;
            codeViewItem.content = utils.fileRead(filePath);

            sampleFiles.push(codeViewItem);
        }

        var packageInfo = {};
        packageInfo.hasRelativeAssetsUrls = false;
        packageInfo.path = "package.json";
        packageInfo.content = utils.fileRead(info.SourcePath + "/package.json");
        sampleFiles.push(packageInfo);

        var codeViewContent = '{\r\n';
        codeViewContent += '"addTsConfig": false,\r\n';
        codeViewContent += '"sampleFiles":\r\n';
        codeViewContent += JSON.stringify(sampleFiles, null, ' ');
        codeViewContent += '\r\n}';

        utils.fileSave(codeViewPath, codeViewContent);

        // backward compatible format with sample group to match Blazor/React/WC browsers
        codeViewPath = outputFolder + info.SampleGroup + "/" + info.SampleRoutePathNew + ".json";
        utils.fileSave(codeViewPath, codeViewContent);
    }

    if (cb) cb();
} exports.updateCodeViewer = updateCodeViewer;

function cleanSamples() {
    log("cleaning up ../samples folder and ./browser/src/samples folder");
    return del([
          sampleOutput + "**/*.*",
          sampleOutput,
          "../samples/**/.angular/**/*.*",
          "../samples/**/.angular",
          "../samples/**/.git/**/*.*",
          "../samples/**/.git",
          "../samples/**/build/**/*.*",
          "../samples/**/dist/**/*.*",
          "../samples/**/node_modules/**/*.*",
          "../samples/**/node_modules",
          "../samples/**/package-lock.json"
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
        // let fileLines = fileContent.split('\r\n');
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
// function getRelativePath(filePath) {
//     var relativePath = filePath.split(repoName)[1];
//     relativePath = relativePath.split("\\").join("/");

//     if (relativePath.indexOf("/samples/") > 0)
//         relativePath = ".." + relativePath; // relative samples ../samples/charts/data-chart-axis-sharing/
//     else
//         relativePath = "." + relativePath;  // relative browser ./browser/src/samples/charts/data-chart-axis-sharing/
//     return relativePath;
// }


function testFileParsing(cb) {
    const repoPath   = "../../igniteui-live-editing-samples/angular-demos-dv/";
    var filePath = repoPath + "charts/category-chart-highlighting/src/app.module.ts"
    var endLine = '\r\n';
    //var filePath = "./src/samples/charts/samples-n-line.ts";
    var fileContent = utils.fileRead(filePath);
    var fileLinesR = fileContent.split('\r\n');
    var fileLinesN = fileContent.split('\n');

    var fileLinesS = utils.split(fileContent);

    console.log('fileLinesR=' + fileLinesR.length);
    console.log('fileLinesN=' + fileLinesN.length);
    console.log('fileLinesS=' + fileLinesS.length);
    var fileOutput = "./src/samples/charts/";
    var r = fileLinesR.join('\r\n');
    var n = fileLinesN.join('\n');

    utils.fileSave(fileOutput + 'samples-r.ts', r );
    utils.fileSave(fileOutput + 'samples-n.ts', n );

    if (cb) cb();
} exports.testFileParsing = testFileParsing;


function logRoutes(cb) {
    let routes = [];
    for (const sample of samplesDatabase) {
        routes.push("/" + sample.SampleGroup + "/" + sample.SampleRoutePathNew)
    }
    routes.sort();
    for (const route of routes) {
        console.log(route);
    }
    cb();
} exports.logRoutes = logRoutes;

function logSandboxUrls (cb) {

    let content = "";
    var sandboxRoot = "https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/"
    for (const sample of samplesDatabase) {
        let sampleRoute = sample.SampleGroup + '/' + sample.SampleControl + "-" + sample.SampleFolder;
        let sandboxURL = sandboxRoot + sample.SampleGroup + '/' + sample.SampleControl + "/" + sample.SampleFolder;
        // sandboxURL += "?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/app.component.html"
        content += sandboxURL + "\n";
        console.log(sandboxURL);
    }

    let output = "./sandbox-angular.txt";
    fs.writeFileSync(output, content);

    cb();
} exports.logSandboxUrls  = logSandboxUrls ;

function updateReadme(cb) {

    log('updating readme files... ');
    // var sandboxTemplate = fs.readFileSync("../samples/templates/sandbox.config.json", "utf8");
    // for (const sample of samplesDatabase) {
    //     let sandboxOutput = '../samples/' + sample.SampleGroup + '/' + sample.SampleControl + '/' + sample.SampleFolder + "/sandbox.config.json";
    //     fs.writeFileSync(sandboxOutput, sandboxTemplate);
    //     console.log(sandboxOutput)
    // }

    // "https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/category-chart/annotations?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/app/app.component.html"
    // "https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/category-chart/annotations"

    var changeFilesCount = 0;
    var sandboxRoot = "https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/"
    var readmeTemplate = fs.readFileSync("../samples/templates/ReadMe.md", "utf8");
    for (const sample of samplesDatabase) {
        let sampleRoute = sample.SampleGroup + '/' + sample.SampleControl + "-" + sample.SampleFolder;
        let sandboxURL = sandboxRoot + sample.SampleGroup + '/' + sample.SampleControl + "/" + sample.SampleFolder;
        sandboxURL += "?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/app.component.html"

        let readmePath = '../samples/' + sample.SampleGroup + '/' + sample.SampleControl + "/" + sample.SampleFolder + "/ReadMe.md";

        let readmeNewFile = readmeTemplate + "";
        readmeNewFile = readmeNewFile.replace("{ComponentName}", sample.ControlName);
        readmeNewFile = readmeNewFile.replace("{SandboxUrlEdit}", sandboxURL);
        readmeNewFile = readmeNewFile.replace("{SampleDisplayName}", sample.SampleDisplayName);
        readmeNewFile = readmeNewFile.replace("{SampleFolderPath}", sample.SourcePath);
        readmeNewFile = readmeNewFile.replace("{SampleRoute}", sampleRoute);

        let readmeOldFile = "";
        if (fs.existsSync(readmePath)) {
            readmeOldFile = fs.readFileSync(readmePath).toString();
        }

        if (readmeNewFile !== readmeOldFile) {
            console.log('UPDATED: ' + readmePath)
            changeFilesCount++;
            fs.writeFileSync(readmePath, readmeNewFile);
        }
    }

    if (changeFilesCount > 0) {
        console.log('WARNING: you must commit above ' + changeFilesCount + ' readme files in a pull request')
    }
    cb();
} exports.updateReadme = updateReadme;


function makeDirectoryFor(filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
      return true;
    }
    makeDirectoryFor(dirname);
    fs.mkdirSync(dirname);
    // fs.mkdir(sampleOutputFolder + 'src', { recursive: true }, (err) => { if (err) throw err; });
}

// copies files from samples/templates folder to samples, e.g. charts
function updateSamples(cb) {
    log('updating samples files... ');

    var templateFiles = [
        ".stackblitzrc",
        "angular.json",
        "tsconfig.json",
        "src/environments/environment.ts",
        "src/environments/environment.prod.ts",
        "src/config/tsconfig-es5.app.json",
        "src/config/tsconfig.app.json",
        "src/config/tsconfig.base.json",
        "src/config/tsconfig.spec.json",
        "src/config/tsconfig.worker.json",
        // "src/main.ts",
        // "src/index.html",
        "src/polyfills.ts",
        // "src/styles.scss",
        "src/typings.d.ts",
    ];

    for (const templatePath of templateFiles) {
        var templateFile = fs.readFileSync("../samples/templates/" + templatePath, "utf8");
        for (const sample of samplesDatabase) {
            let samplePath = '../samples/' + sample.SampleGroup + '/' + sample.SampleControl + "/" + sample.SampleFolder + "/";
            let outputPath = samplePath + templatePath;
            // log(outputPath);
            makeDirectoryFor(outputPath)
            fs.writeFileSync(outputPath, templateFile);
        }
    }
    cb();
} exports.updateSamples = updateSamples;


function sortByKeys(dependencies)
{
    let keys = Object.keys(dependencies);
    keys.sort();

    var sorted = {};
    for (const key of keys) {
        sorted[key] = dependencies[key];
    }
    return sorted;
}
function updateIG(cb) {

    // cleanup packages to speedup this gulp script
    // del.sync("./samples/**/node_modules/**/*.*", {force:true});
    // del.sync("./samples/**/node_modules/**", {force:true});
    // del.sync("./samples/**/node_modules", {force:true});

    // NOTE: change this array with new version of packages
    // and optionally use "@infragistics/" proget prefix, e.g.
    // { name: "@infragistics/igniteui-angular-charts", version: "23.2.18" }, // PROGET
    // { name:               "igniteui-angular-charts", version: "14.1.0" },  // NPM
    let packageUpgrades = [
        // these IG packages are often updated:
        { name: "igniteui-angular-core"                     , version: "17.3.1-alpha.0" },
        { name: "igniteui-angular-charts"                   , version: "17.3.1-alpha.0" },
        { name: "igniteui-angular-excel"                    , version: "17.3.1-alpha.0" },
        { name: "igniteui-angular-gauges"                   , version: "17.3.1-alpha.0" },
        { name: "igniteui-angular-inputs"                   , version: "17.3.1-alpha.0" },
        { name: "igniteui-angular-layouts"                  , version: "17.3.1-alpha.0" },
        { name: "igniteui-angular-maps"                     , version: "17.3.1-alpha.0" },
        { name: "igniteui-angular-spreadsheet-chart-adapter", version: "17.3.1-alpha.0" },
        { name: "igniteui-angular-spreadsheet"              , version: "17.3.1-alpha.0" },
        { name: "igniteui-angular-datasources"              , version: "17.3.1-alpha.0" },
        // these IG packages are sometimes updated:
        { name: "igniteui-webcomponents",            version: "4.9.0" },
        { name: "igniteui-theming",                  version: "6.4.0-beta.2" },
        { name: "igniteui-angular",                  version: "17.2.3" },
        { name: "@angular/animations",               version: "18.0.2" },
        { name: "@angular/common",                   version: "18.0.2" },
        { name: "@angular/compiler",                 version: "18.0.2" },
        { name: "@angular/core",                     version: "18.0.2" },
        { name: "@angular/forms",                    version: "18.0.2" },
        { name: "@angular/platform-browser",         version: "18.0.2" },
        { name: "@angular/platform-browser-dynamic", version: "18.0.2" },
        { name: "@types/hammerjs",                   version: "2.0.40" },
        { name: "classlist-js",         version: "1.1.20150312" },
        { name: "core-js",              version: "3.21.0" },
        { name: "hammerjs",             version: "2.0.8" },
        { name: "intl",                 version: "1.2.5" },
        { name: "jszip",                version: "3.8.0" },
        { name: "rxjs",                 version: "7.8.1" },
        { name: "tslib",                version: "2.6.1" },
        { name: "web-animations-js",    version: "2.3.2" },
        { name: "zone.js",              version: "~0.14.4" },
        // dev packages:
        { name: "@angular/cli",                     version: "18.0.3"},
        { name: "@angular/compiler-cli",            version: "18.0.2"},
        { name: "@angular/language-service",        version: "18.0.2"},
        { name: "@angular-devkit/build-angular",    version: "18.0.3"},
        { name: "@types/node",                      version: "18.17.0"},
        { name: "codelyzer",                        version: "6.0.2"},
        { name: "jasmine-core",                     version: "5.1.1"},
        { name: "jasmine-spec-reporter",            version: "~4.2.1"},
        { name: "sass.js",                          version: "0.11.1"},
        { name: "tslint",                           version: "~6.1.3"},
        { name: "ts-node",                          version: "10.9.1"},
        { name: "typescript",                       version: "5.4.5"},
    ];

    // NOTE you can comment out strings in this array to run these function only on a subset of samples
    var packagePaths = [
        './package.json', // browser
        '../samples/**/package.json',
        // '../samples/charts/**/package.json',
        // '../samples/gauges/**/package.json',

        // skip packages in node_modules folders
        '!../samples/**/node_modules/**/package.json',
        '!../samples/**/node_modules/**',
        '!../samples/**/node_modules',
    ];

    // creating package mapping without proget prefix so we can upgrade to/from proget packages
    let packageMappings = {};
    for (const item of packageUpgrades) {
        item.id = item.name.replace("@infragistics/", "");
        packageMappings[item.id] = item;
    }

    let updatedPackages = 0;
    // gulp all package.json files in samples/browser
    gulp.src(packagePaths, {allowEmpty: true})
    .pipe(es.map(function(file, fileCallback) {
        let filePath = file.dirname + "/" + file.basename;

        var fileContent = file.contents.toString();
        var fileLines = fileContent.split('\n');

        var fileChanged = false;
        for (let i = 0; i < fileLines.length; i++) {
            const line = fileLines[i];
            let words = line.split(":");
            if (words.length === 2) {
                // matching packages
                let packageName = words[0].replace("@infragistics/", "").replace('"', '').replace('"', '').trim();
                let packageInfo = packageMappings[packageName];
                if (packageInfo !== undefined) {
                    let newLine = '    "' + packageInfo.name + '": "' + packageInfo.version + '",';
                    if (fileLines[i].trim() !== newLine.trim()) {
                        fileLines[i] = newLine;
                        fileChanged = true;
                    }
                }
            }
            // remove a comma from the last item in a list of dependencies
            let next = i + 1 < fileLines.length ? i + 1 : i;
            if (fileLines[next].indexOf('}') >= 0 &&
                fileLines[i].indexOf(',') > 0) {
                fileLines[i] = fileLines[i].replace(',','');
                fileChanged = true;
            }
        }

        let newContent = fileLines.join('\n');
        let jsonPackages = JSON.parse(newContent);
        // sort package dependencies by their names
        let sortPackages = sortByKeys(jsonPackages.dependencies);
        if (JSON.stringify(sortPackages) !== JSON.stringify(jsonPackages.dependencies)) {
            jsonPackages.dependencies = sortPackages;
            jsonPackages.devDependencies = sortByKeys(jsonPackages.devDependencies);
            newContent = JSON.stringify(jsonPackages, null, '  ') + '\n';
            fileChanged = true;
        }

        if (fileChanged) {
            updatedPackages++;
            fs.writeFileSync(filePath, newContent);
            console.log("updated: " + filePath);
        }
        fileCallback(null, file);
    }))
    .on("end", function() {
        console.log("updated: " + updatedPackages + " package files");
        cb();
    });

} exports.updateIG = updateIG;

function copyBootstrapCss(cb) {
    let file = fs.readFileSync("./node_modules/igniteui-webcomponents/themes/light/bootstrap.css");
    let filePath = "./src/assets/css/bootstrap.css";
    fs.writeFileSync(filePath, file.toString());
    cb();
} exports.copyBootstrapCss = copyBootstrapCss;

function updateBootstrap(cb) {
    let template = fs.readFileSync("./node_modules/igniteui-webcomponents/themes/light/bootstrap.css");
    var filePaths = [
        '../samples/**/app.component.ts',
        '../samples/**/styles.scss',
        '../samples/**/app.component.scss',
        '!../samples/**/node_modules/**',
        '!../samples/**/node_modules',
    ];
    gulp.src(filePaths, {allowEmpty: false})
    .pipe(es.map(function(file, fileCallback) {
        let filePath = file.dirname + "\\" + file.basename;
        var fileContent = file.contents.toString();
        var fileLines = fileContent.split('\n');
        var fileChanged = false;

        var bootstrap = "igniteui-webcomponents/themes/light/bootstrap.css";
        if (fileContent.indexOf(bootstrap) > 0) {
            fileContent = fileContent.replace("import 'igniteui-webcomponents/themes/light/bootstrap.css';", "");
            fileContent = fileContent.replace("@import url('../node_modules/igniteui-webcomponents/themes/light/bootstrap.css');", "");
            fs.writeFileSync(filePath, fileContent);

            // let scssPath = file.dirname.replace("\\app","") + "\\styles.scss"
            // let scssContent = fs.readFileSync(scssPath).toString();
            // scssContent = scssContent.replace("@import url('../node_modules/igniteui-webcomponents/themes/light/bootstrap.css');", "");
            // fs.writeFileSync(scssPath, scssContent);

            let htmlPath = file.dirname.replace("\\app","") + "\\index.html"
            let htmlContent = fs.readFileSync(htmlPath).toString();
            let oldLink = '<link href="https://static.infragistics.com/xplatform/css/samples/shared.v8.css" rel="stylesheet">'
            let newLink = '<link href="https://static.infragistics.com/xplatform/css/themes/light/bootstrap.css" rel="stylesheet">'

            let newContent = htmlContent.replace(oldLink, oldLink + "\n  " + newLink);
            newContent = newContent.replace(newLink + "\n  " + newLink, newLink);
            newContent = newContent.replace(newLink + "\n    " + newLink, newLink);
            newContent = newContent.replace("    ", "  ");

            fs.writeFileSync(htmlPath, newContent);

            log("updated: " + filePath);
        }

        // let htmlPath = file.dirname.replace("\\app","") + "\\index.html"
        // let htmlContent = fs.readFileSync(htmlPath).toString();
        // let oldLink = '<link href="https://static.infragistics.com/xplatform/css/samples/themes/light/bootstrap.css" rel="stylesheet">'
        // let newLink = '<link href="https://static.infragistics.com/xplatform/css/samples/themes/light/bootstrap.css" rel="stylesheet">'
        // let newContent = htmlContent.replace(oldLink, newLink);
        // newContent = htmlContent.replace(newLink + "\n  " + newLink, newLink);
        // fs.writeFileSync(htmlPath, newContent);

        fileCallback(null, file);
    }))
    .on("end", function() {
        cb();
    });
    cb();
} exports.updateBootstrap = updateBootstrap;


function logVersionIgniteUI(cb) {
    let packageFile = fs.readFileSync("./package.json");
    let packageJson = JSON.parse(packageFile.toString());
    let packageData = JSON.stringify(packageJson.dependencies, null, ' ');

    let igPackages = [];
    for (const line of packageData.split('\n')) {
        if (line.indexOf('igniteui-') > 0) {
            let packageLine = line.replace(',', '')
            packageLine = packageLine.split('"').join('');
            packageLine = packageLine.replace('@infragistics/', '');
            let packagePair = packageLine.split(':');
            let packageVersion = packagePair[1].trim();
            let packageName = packagePair[0].trim();

            console.log('>> using package: ' + packageVersion + ' ' + packageName);
            let package = { ver: packageVersion, name: packageName };
            igPackages.push(package);
        }
    }

    let outputText = '[\r\n';
    for (let i = 0; i < igPackages.length; i++) {
        outputText += JSON.stringify(igPackages[i]);
        if (i < igPackages.length - 1)
            outputText += ',';
        outputText += '\r\n';
    }
    outputText += "]";

    const outputPath = "./src/browser-info.json";

    fs.writeFileSync(outputPath, outputText);
    cb();
} exports.logVersionIgniteUI = logVersionIgniteUI;


// move samples files up one level, e.g. /scr/app/*.* to /scr/*.* 
exports.moveAppFiles = function moveAppFiles(cb) {
    var appFolders = [];

    gulp.src(
        "../samples/**/src/app/*.*", 
        "../samples/**/type-scatter-symbol-series/src/app/*.*", 
    {allowEmpty: true})
    .pipe(es.map(function(file, fileCallback) {
       
        var fileContent = file.contents.toString();
        let fileOutput = file.dirname.replace("\\app", "") + "\\" + file.basename; 
        
        if (appFolders.indexOf(file.dirname) < 0) {
            appFolders.push(file.dirname);
        }
        // console.log("" + fileOutput);

        fs.writeFileSync(fileOutput, fileContent);
         fileCallback(null, file);
    }))
    .on("end", function() {
        
        console.log(appFolders);
        console.log("moved " + appFolders.length + " samples from /scr/app/*.* to /scr/*.* ");
        del(appFolders, {force: true});

        for (let i = 0; i < appFolders.length; i++) {
            
            var mainPath = appFolders[i].replace("\\app", "") + "\\main.ts";
            let mainFile = fs.readFileSync(mainPath).toString();
            mainFile = mainFile.replace("/app/", "/");
            fs.writeFileSync(mainPath, mainFile);
         }
        cb();
    });

} 
 
exports.updateCodeSandbox = function updateCodeSandbox(cb) {
    var appFolders = [];
    var copyFiles = [
        "../tests/donut-ava4/.stackblitzrc",
        "../tests/donut-ava4/.codesandbox/tasks.json",
        "../tests/donut-ava4/.codesandbox/Dockerfile",
        "../tests/donut-ava4/tsconfig.app.json",
        "../tests/donut-ava4/tsconfig.json",
        "../tests/donut-ava4/angular.json",
    ];
    var deleteFiles = [
        "sandbox.config.json",
        "src\\config",
    ];
    
    gulp.src( [
        "../samples/**/package.json", 
        // "../samples/**/display-osm-imagery/package.json",
        // "../samples/**/doughnut-chart/overview/package.json", 
        // "../samples/**/display-heat-imagery/package.json", 
    ], {allowEmpty: true})
    .pipe(es.map(function(file, fileCallback) {
       
        var fileContent = file.contents.toString();
        let fileOutput = file.dirname + "\\" + file.basename; 
        
        console.log("updating " + fileOutput);
        fileContent = fileContent.replace('"@angular/animations": "17.0.0"','"@angular/animations": "^17.2.1"');
        fileContent = fileContent.replace('"@angular/common": "17.0.0"','"@angular/common": "^17.2.1"');
        fileContent = fileContent.replace('"@angular/compiler": "17.0.0"','"@angular/compiler": "^17.2.1"');
        fileContent = fileContent.replace('"@angular/core": "17.0.0"','"@angular/core": "^17.2.1"');
        fileContent = fileContent.replace('"@angular/forms": "17.0.0"','"@angular/forms": "^17.2.1"');
        fileContent = fileContent.replace('"@angular/platform-browser": "17.0.0"','"@angular/platform-browser": "^17.2.1"');
        fileContent = fileContent.replace('"@angular/platform-browser-dynamic": "17.0.0"','"@angular/platform-browser-dynamic": "^17.2.1"');
        fileContent = fileContent.replace('"rxjs": "6.6.7"','"rxjs": "^7.8.1"');
        fileContent = fileContent.replace('"tslib": "2.3.1"','"tslib": "^2.6.1"');
        fileContent = fileContent.replace('"zone.js": "~0.14.1"','"zone.js": "~0.14.4"');
        fileContent = fileContent.replace('"@angular-devkit/build-angular": "17.0.0"','"@angular-devkit/build-angular": "17.2.0"');
        fileContent = fileContent.replace('"@angular/cli": "17.0.0"','"@angular/cli": "17.2.0"');
        fileContent = fileContent.replace('"@angular/compiler-cli": "17.0.0"','"@angular/compiler-cli": "17.2.1"');
        fileContent = fileContent.replace('"@angular/language-service": "17.0.0"','"@angular/language-service": "17.2.1"');
        fileContent = fileContent.replace('"@types/node": "14.14.28"','"@types/node": "18.17.0"');
        fileContent = fileContent.replace('"jasmine-core": "3.7.1"','"jasmine-core": "5.1.1"');
        fileContent = fileContent.replace('"ts-node": "9.1.1"','"ts-node": "10.9.1"');
        fileContent = fileContent.replace('"typescript": "5.2.2"','"typescript": "5.3.3"');
        fileContent = fileContent.replace('"hammerjs": "2.0.8"','"hammerjs": "^2.0.8"');

        fs.writeFileSync(fileOutput, fileContent);
            
        for (let i = 0; i < deleteFiles.length; i++) {
            var deletePath = file.dirname + "\\" + deleteFiles[i];
            console.log("delete " + deletePath); 
            del([deletePath], {force: true});
        }

        for (let i = 0; i < copyFiles.length; i++) {
            var outputPath = copyFiles[i].replace('../tests/donut-ava4/', file.dirname + "/");
            // del([deletePath], {force: true});
            console.log("copy " + outputPath);
            let outputFile = fs.readFileSync(copyFiles[i]).toString();
            // outputFile = outputFile.replace("/app/", "/");
            makeDirectoryFor(outputPath);
            fs.writeFileSync(outputPath, outputFile);
        }
         fileCallback(null, file);
    }))
    .on("end", function() {
        cb();
    });

} 