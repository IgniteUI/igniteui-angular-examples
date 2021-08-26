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
const sampleRoot   = '../samples/';    // <igniteui-angular-examples> /samples/
const sampleOutput = './src/samples/'; // <igniteui-angular-examples> /browser/src/samples/


// NOTE you can comment out strings in this array to run these function only on a subset of samples
var sampleSources = [
    // sampleRoot + 'charts/category-chart/**/package.json',
    // sampleRoot + 'charts/data-chart/**/package.json',
    // sampleRoot + 'charts/doughnut-chart/**/package.json',
    // sampleRoot + 'charts/financial-chart/**/package.json',
    sampleRoot + 'charts/pie-chart/**/package.json',
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

function getSampleLocations(cb) {
    log("getSampleLocations");
    samplesDatabase = [];
    // NOTE this function should be similar to importSamples() in porting.js
    // TODO gulp files from sampleSources array
    // TODO get info for each sample
    // TODO store info in samplesDatabase array
    // TODO call cb() on gulp's "end"
    if (cb) cb();
} exports.getSampleLocations = getSampleLocations;

function copySampleComponents(cb) {
    log("copySampleComponents");
    // TODO for each in samplesDatabase array, copy repo/samples files to repo/browser/samples folder
    // NOTE you need to copy only files in repo/samples/**/src/app/ folder
    if (cb) cb();
} exports.copySampleComponents = copySampleComponents;

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
    log("cleanSamples");
    return del([
          sampleOutput + "*.ts",
          sampleOutput + "**/*.ts",
          sampleOutput + "**/*.html",
          sampleOutput + "**/*.scss"
    ],{force: true});
} exports.cleanSamples = cleanSamples;

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


// C:\REPOS\igniteui-angular-examples/samples\charts\pie-chart-legend/
// returns                                         ../samples/charts/pie-chart-legend/
function getRelativePath(filePath) {
    var relativePath = filePath.split(repoName)[1];
    relativePath = relativePath.split("\\").join("/");

    if (relativePath.indexOf("/samples/") > 0)
        relativePath = ".." + relativePath; // relative samples ../samples/charts/pie-chart-legend/
    else
        relativePath = "." + relativePath;  // relative browser ./browser/src/samples/charts/pie-chart-legend/
    return relativePath;
}
