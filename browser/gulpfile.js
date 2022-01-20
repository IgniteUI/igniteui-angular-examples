const gulp = require("gulp");
const chmod = require('gulp-chmod');
const flatten = require('gulp-flatten');
const fs = require("fs");
const path = require("path");
const es = require('event-stream');
const del = require('del');
const argv = require("yargs").argv;
const fsExtra = require("fs-extra");
const tsNode = require('ts-node').register({
    transpileOnly: true,
    compilerOptions: {
        module: "commonjs",
        allowJs: true
    }
});

function log(msg) {
    console.log("gulpfile.js >> " + msg);
} exports.log = log;

// log("loaded");

const porting = require('./scripts/porting.js')
gulp.task('portSamples', function(cb) {
    porting.importSamples(cb)
});

const browser = require('./scripts/browser.js')

// TODO implement these browser functions in './scripts/browser.js'
// // NOTE you can call this series of functions in terminal: "gulp updateBrowser"
// gulp.task('updateBrowser', gulp.series(
//    // browser.cleanSamples,
//     browser.findSamples,
//     browser.copySamples,
//    // browser.generateSampleRouting,
//     // browser.generateAppRouting,
//     // browser.generateCodeViewerFiles
// ));

// NOTE you can call each function in terminal: "gulp findSamples"
gulp.task('findSamples', browser.findSamples);
gulp.task('copySamples', gulp.series(browser.findSamples, browser.copySamples));

exports.updateBrowser = updateBrowser = gulp.series(
    browser.findSamples,
    browser.copySamples,
);

gulp.task('generateSampleRouting', browser.generateSampleRouting);
gulp.task('generateCodeViewerFiles', browser.generateCodeViewerFiles);
gulp.task('listSamples', browser.listSamples);

gulp.task("overwrite-package-json", (done) => {
    const packagesPaths = [
        "./node_modules/igniteui-angular-charts/package.json",
        "./node_modules/igniteui-angular-core/package.json",
        "./node_modules/igniteui-angular-excel/package.json",
        "./node_modules/igniteui-angular-gauges/package.json",
        "./node_modules/igniteui-angular-spreadsheet/package.json",
        "./node_modules/igniteui-angular-spreadsheet-chart-adapter/package.json",
        "./node_modules/igniteui-angular-maps/package.json"];
    packagesPaths.forEach((packagePath) => {
        const package = require(packagePath);
        fs.writeFileSync(packagePath, JSON.stringify(package));
    });
    done();
});


