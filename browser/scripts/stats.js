// this script generates JSON file with stats on:
// - which samples are in the browser (DOC samples)
// - which samples are excluded from browser (DEV samples)
// - which samples are imported from xplat repo

const gulp = require("gulp");
const chmod = require("gulp-chmod");
const flatten = require("gulp-flatten");
const fs = require("fs");
const path = require("path");
const es = require("event-stream");
const del = require("del");

// NOTE you can comment out strings in this array to run these function only on a subset of samples
var samplesRepoPath = [
    // including samples for all components
    '../samples/**/package.json',

    // including specific samples
    // '../samples/charts/doughnut-chart/overview/package.json',
    // '../samples/charts/category-chart/area-chart-multiple-sources/package.json',
    // '../samples/gauges/**/measures/package.json',
    // '../samples/charts/sparkline/grid/package.json',
    // '../samples/maps/**/display-heat-imagery/package.json',
    // '../samples/excel/**/operations-on-workbooks/package.json',
    // '../samples/charts/zoomslider/overview/package.json',

    // including samples for specific components
    // '../samples/charts/**/package.json',
    // '../samples/maps/**/package.json',
    // '../samples/excel/**/package.json',
    // '../samples/gauges//**/package.json',
    // '../samples/grids/**/package.json',
    // '../samples/layouts/**/package.json',
    // '../samples/editors/**/package.json',

    // excluding package.json in node_modules sub folders in case they are installed locally
    // '!../samples/**/charts/financial-chart/theming/package.json',
    '!../samples/**/node_modules/**/package.json',
    '!../samples/**/node_modules/**',
    '!../samples/**/node_modules',
];

function generate(cb, samplesInBrowser) {

    var sampleStats = {};
    gulp.src(samplesRepoPath, {allowEmpty: true})
    .pipe(es.map(function(file, fileCallback) {
        //log("getting: " + file.dirname);
        // saving info for each samples in samplesDatabase
        // log("sample: " + file.dirname);
        var samplePath = file.dirname.toString().split('\\samples\\')[1].split('\\').join('/');
        sampleStats[samplePath] = { browser: false, xplat: false, path: samplePath,  }

        fileCallback(null, file);
    }))
    .on("end", function() {

        for (const samplePath of samplesInBrowser) {
            if (sampleStats[samplePath]) {
                sampleStats[samplePath].browser = true;
            } else {
                console.log(sampleStats);
                throw new Error("Cannot find a sample in all samples: " + samplePath);
            }
        }

        var jsonStats = [];
        var keys = Object.keys(sampleStats);
        for (const samplePath of keys) {
            var info = sampleStats[samplePath];
            jsonStats.push( '  { "browser": ' + info.browser + ', "xplat": ' + info.xplat + ', "path": "' + info.path + '" }' );
            // jsonStats.push(sampleStats[samplePath]);
            // if (sampleStats[samplePath])
        }
        var jsonData = jsonStats.join(',\n').replace(/true,/g, 'true, ');
        jsonData = "[\n" + jsonData + "\n]"
        // var json = JSON.stringify(jsonStats, null, ' ').replace(/\",\n/g, '\",')
        // .replace(/  /g, ' ')
        // // .replace(/true,/g, 'true, ')
        // .replace(/\"\n*.\}/g, '\" \}')
        // .replace(/\{\n*.\"/g, '\{ \"')
        // ;

        // console.log(jsonStats);
        // console.log(sampleStats);
        // console.log("generate... done = " + sampleStats.length);

        const jsonPath = "./src/assets/stats.json";
        fs.writeFileSync(jsonPath, jsonData);
        // console.log(jsonData);
        console.log("saved " + jsonStats.length + " samples stats to " + jsonPath);

        if (cb) cb();
    });

} exports.generate = generate;
