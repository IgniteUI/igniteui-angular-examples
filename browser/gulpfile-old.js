// this reference file from old Angular samples browser

const gulp = require("gulp");
const fs = require("fs");
const path = require("path");
const es = require('event-stream');
const argv = require("yargs").argv;
const fsExtra = require("fs-extra");
const tsNode = require('ts-node').register({
    transpileOnly: true,
    compilerOptions: {
        module: "commonjs",
        allowJs: true
    }
});

// function getRelativePath(file) {
//     let filePath = file.dirname.replace(file.base, '');
//     filePath = './src/app' + filePath;
//     filePath = filePath.split('\\').join('/');
//     return filePath + "/" + file.basename;
// }

// function updateFile(outputPath, newContent, orgContent) {
//     let newLines = newContent.toString();
//     let orgLines = orgContent.toString();
//     if (newLines !== orgLines) {
//         console.log("updated " + outputPath);
//         fs.writeFileSync(outputPath, newContent);
//     } else {
//         console.log("up-to-date " + outputPath);
//     }
// }

// // run this gulp script to auto-generate .scss files from template css files
// function generateSamplesCss(done) {
//     var baseTemplate = fs.readFileSync("./templates/base.css", "utf8");
//     var cssTemplates = {
//         charts:      fs.readFileSync("./templates/charts.css", "utf8"),
//         maps:        fs.readFileSync("./templates/maps.css", "utf8"),
//         gauges:      fs.readFileSync("./templates/gauges.css", "utf8"),
//         excel:       fs.readFileSync("./templates/excel.css", "utf8"),
//         spreadsheet: fs.readFileSync("./templates/spreadsheet.css", "utf8"),
//     };

//      var cssFiles = [
//         // including these samples:
//          './src/app/**/charts/**/*.scss',
//         //  './src/app/**/charts/doughnut-chart/**/*.scss',
//         //  './src/app/**/charts/sparkline/**/*.scss',
//         //  './src/app/**/charts/tree-map/**/*.scss',
//         //  './src/app/**/charts/pie-chart/**/*.scss',
//         //  './src/app/**/charts/category-chart/**/*.scss',
//         //  './src/app/**/charts/financial-chart/**/*.scss',
//          './src/app/**/maps/**/*.scss',
//          './src/app/**/gauges/**/*.scss',
//          './src/app/**/spreadsheet/**/*.scss',
//          // excluding these samples:
//         '!./src/app/**/excel-library/**/*.scss',
//         '!./src/app/**/zoomslider/**/*.scss',
//      ];

//     gulp.src(cssFiles, {allowEmpty: true})
//     .pipe(es.map(function(file, fileCallback) {
//         let cssPath = getRelativePath(file);
//         // let cssContent = "\n/* auto-generated from ./templates/*.css files */ \n \n" + baseTemplate;
//         let cssContent = "" + baseTemplate;
//         let orgContent = file.contents;
//         // for (const name in cssTemplates) {
//         //     // console.log("template " + name);
//         //     if (cssPath.indexOf("/src/app/" + name + "/") > 0) {
//         //         // cssContent += "\n\n/* copied from ./templates/"+name+".css file: */ \n" + cssTemplates[name];
//         //         cssContent += "\n\n" + cssTemplates[name];
//         //     }
//         // }
//         updateFile(cssPath, cssContent, orgContent);
//         // let lines = orgContent.toString().split('\n');
//         // console.log( "lines " + lines.length +  " path " + cssPath);
//         fileCallback(null, file);
//     }))
//     .on("end", function() {
//         done();
//     });

// } exports.generateSamplesCss = generateSamplesCss;

function logSamples(done) {
    var fileFormat = "*.html";
    var fileSources = [
        // including these samples:
         './src/app/**/charts/**/' + fileFormat,
        //  './src/app/**/charts/doughnut-chart/**/' + fileFormat,
        //  './src/app/**/charts/sparkline/**/' + fileFormat,
        //  './src/app/**/charts/tree-map/**/' + fileFormat,
        //  './src/app/**/charts/pie-chart/**/' + fileFormat,
        //  './src/app/**/charts/category-chart/**/' + fileFormat,
        //  './src/app/**/charts/financial-chart/**/' + fileFormat,
         './src/app/**/maps/**/' + fileFormat,
         './src/app/**/gauges/**/' + fileFormat,
         './src/app/**/spreadsheet/**/' + fileFormat,
         // excluding these samples:
        '!./src/app/**/excel-library/**/' + fileFormat,
        '!./src/app/**/zoomslider/**/' + fileFormat,
     ];

    gulp.src(fileSources, {allowEmpty: true})
    .pipe(es.map(function(file, fileCallback) {
        let filePath = getRelativePath(file);
        let fileContent = file.contents.toString();
        let fileLines = fileContent.split('\n');
        let fileStart = fileLines[0];

        if (fileStart.indexOf("container sample") < 0) {
            console.log("'" + JSON.stringify(fileStart) + "' " + filePath);
        }

        fileCallback(null, file);
    }))
    .on("end", function() {
        done();
    });
} exports.logSamples = logSamples;


// const { generateLiveEditing } = require('igniteui-live-editing');

// const submodule = "igniteui-live-editing-samples";


// gulp.task("generate-live-editing", async () => {
//     const liveEditingOptions =
//     {
//         platform: 'angular',
//         samplesDir: "./src/assets",
//         configGeneratorPath: "./live-editing/ConfigGenerators.ts",
//         module: {
//            routerPath: './live-editing/Routes.ts',
//         }
//     }

//     await generateLiveEditing(liveEditingOptions);
// });

gulp.task("overwrite-package-json", (done) => {
    const packagesPaths = [
        "./node_modules/igniteui-angular-charts/package.json",
        "./node_modules/igniteui-angular-data-grids/package.json",
        "./node_modules/igniteui-angular-dashboards/package.json",
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

// gulp.task("watch-live-editing", gulp.series("generate-live-editing", () => {
//     gulp.watch(["./src/**/*.*", "!./src/assets/**", "./live-editing/**/*.*", "package.json"], function () {
//         Object.keys(require.cache).forEach(function (key) {
//             if (key.indexOf("node_modules") === -1) {
//                 delete require.cache[key];
//             }
//         });
//         gulp.start("generate-live-editing");
//     });
// }));


// const getSampleNameFromFileName = (fileName, sampleBaseDir) => fileName.replace(sampleBaseDir + "--", "");
// var assetsRegex = new RegExp("\/?assets\/", "g");

// const processApp = (projectPath, dest) => {
//     if(!fs.existsSync(submodule)) {
//         return console.error("No submodule found");
//     }
//     const jsonSamplesPath = path.join(__dirname, `${projectPath}/assets/samples`);
//     const sharedJson = JSON.parse(fs.readFileSync(path.join(jsonSamplesPath, "/shared.json")));
//     const submoduleAppDest = submodule + `/${dest}/`;
//     if(!fs.existsSync(submoduleAppDest)) {
//         fs.mkdirSync(submoduleAppDest);
//     }
//     let i = 0;
//     return gulp.src([`${jsonSamplesPath}/*.json`,`!${jsonSamplesPath}/shared.json`, `!${jsonSamplesPath}/meta.json`])
//                .pipe(es.map((file, cb) => {
//                     fs.readFile(file.path, 'utf-8', (err, content) => {
//                         // Adjust sample application bundle files
//                         const jsonObj = JSON.parse(content);
//                         const packageJson =
//                         {
//                             "path": "package.json",
//                             "hasRelativeAssetsUrls": false,
//                             "content": JSON.stringify({
//                                     "dependencies": JSON.parse(jsonObj.sampleDependencies),
//                                     "devDependencies": sharedJson.devDependencies }, null, 2)
//                         }
//                         jsonObj.sampleFiles = jsonObj.sampleFiles.concat(sharedJson.files).concat(packageJson);

//                         // Configure sample application file structure
//                         const fileName = file.path.substring(file.base.length + 1).replace(".json", "");
//                         let sampleBaseDir = fileName.indexOf("--") !== -1 ? fileName.substring(0, fileName.indexOf("--")) : "";
//                         if(sampleBaseDir && !fs.existsSync(submoduleAppDest + sampleBaseDir)) {
//                             fs.mkdirSync(submoduleAppDest + sampleBaseDir);
//                         }
//                         const sampleName = sampleBaseDir ? getSampleNameFromFileName(fileName, sampleBaseDir) : fileName;
//                         const sampleAppPath = submoduleAppDest + sampleBaseDir + "/" + sampleName;
//                         if(!fs.existsSync(sampleAppPath)) {
//                             fs.mkdirSync(sampleAppPath);
//                         }

//                         // Distribute Sample Files
//                         jsonObj.sampleFiles.forEach(sampleFile => {
//                             let sampleContent;
//                             const isProduction = argv.prodEnv !== undefined && argv.prodEnv.toLowerCase().trim() === "true";
//                             const assetsUrl = `https://${isProduction ? "www." : "staging."}infragistics.com/${dest}/assets/`;
//                             if(sampleFile.hasRelativeAssetsUrls) {
//                                 sampleContent = sampleFile.content.replace(assetsRegex, assetsUrl);
//                             } else {
//                                 sampleContent = sampleFile.content;
//                             }
//                             const paths = sampleFile.path.replace("./", "").split("/");
//                             let tempPath = "";
//                             paths.forEach(p => {
//                                 tempPath += p + "/";
//                                 if(p.indexOf(".") !== -1) {
//                                     fs.writeFileSync(sampleAppPath + "/" + tempPath, sampleContent);
//                                 } else
//                                 if(!fs.existsSync(sampleAppPath + "/" + tempPath)) {
//                                     fs.mkdirSync(sampleAppPath + "/" + tempPath)
//                                 }
//                             })
//                         });
//                         i++;
//                         console.log(`Processing ${fileName}.json with SCSS styling`);
//                         cb(null, file);
//                     })
//                }))
//                .on("error", () => console.log(err))
//                .on("end", () => console.log(`Generated ${i} applications with SCSS in ${dest.toUpperCase()} project.`));
// }

// const processDemosDVWithScss = () =>  processApp("src", "angular-examples");


// const cleanupAngularDemosDV = (cb) => {
//     fsExtra.removeSync(submodule + "/angular-examples");
//     fsExtra.mkdirSync(submodule + "/angular-examples");
//     cb();
// }
// let repositorifyAngularDemosDv;
// exports.repositorifyAngularDemosDv = repositorifyAngularDemosDv = gulp.series(cleanupAngularDemosDV, processDemosDVWithScss);


