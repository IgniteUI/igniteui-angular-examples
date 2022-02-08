const fs = require("fs");
const path = require("path");

const EOL = '\r\n';

// trims ends of all lines
function trimLines(strContent) {
    var lines = splitLines(strContent);
    for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].trimEnd();
    }
    return lines.join(EOL);
} exports.trimLines = trimLines;

// removes all empty lines
function removeLines(strContent) {
    var output = [];
    var lines = splitLines(strContent);
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() !== "") {
            output.push(lines[i]);
        }
    }
    // for (let i = 0; i < output.length; i++) {
    //     console.log('removeLines ' + i + ' >>' + output[i] + '<<')
    // }
    return output.join(EOL);
} exports.removeLines = removeLines;

// removes duplicated empty lines
function removeDuplicates(strContent) {
    var lines = splitLines(strContent);
    var output = [];
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() !== "") {
            output.push(lines[i]);
        }
        else if (i < lines.length - 1 && lines[i+1].trim() !== "") {
            output.push(lines[i]);
        }
        else if (i > 0 && lines[i-1].trim() !== "") {
            output.push(lines[i]);
        }
    }
    // for (let i = 0; i < output.length; i++) {
    //     console.log('removeDuplicates ' + i + ' >>' + output[i] + '<<')
    // }
    return output.join(EOL);
} exports.removeDuplicates = removeDuplicates;

// trims replace tabs with 4 spaces
function removeTabs(strContent) {
    return strContent.replace(/\t/gm, '    ');
 } exports.removeTabs = removeTabs;


function joinLines(strArray) {
    return strArray.join(EOL);
} exports.joinLines = joinLines;

function splitLines(fileContent) {
    var content = fileContent.replace(/\r\n/gm, '\n');
    return content.split('\n');
} exports.splitLines = splitLines;

// replaces all instance of old string with the new string in the original
function replace(orgStr, oldStr, newStr) {
    return orgStr.split(oldStr).join(newStr);
} exports.replace = replace;

function toTitleCase(str, separator) {
    if (separator === undefined) { separator = ' '; }
    return str.toLowerCase().split(separator).map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(separator);
} exports.toTitleCase = toTitleCase;

function splitCamel(orgStr) {
    return orgStr.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
} exports.splitCamel = splitCamel;

function isPathDirectory(location) {
    return !isPathFile(location);
} exports.isPathDirectory = isPathDirectory;

function isPathFile(location) {
    return location.indexOf(".") > 0;
} exports.isPathFile = isPathFile;

function fileName(filePath) {
    var folders = filePath.split('/');
    return folders[folders.length - 1];
} exports.fileName = fileName;

// read file as a string that includes new line symbol: \n
function fileRead(filePath) {
    var fileContent = fs.readFileSync(filePath, "utf8");
    fileContent = removeTabs(fileContent);
    fileContent = trimLines(fileContent);
    return fileContent;
} exports.fileRead = fileRead;

// read file as array of string lines
function fileReadLines(filePath) {
    var fileContent = fs.readFileSync(filePath, "utf8");
    fileContent = removeTabs(fileContent);
    fileContent = trimLines(fileContent);
    return splitLines(content);
} exports.fileReadLines = fileReadLines;

function fileCleanup(fileContent) {
    // fileContent = fileContent.replace(/^(?m)[\r\n]+/g, '\r\n');
    // fileContent = fileContent.replace(/^(\s*\n){2,}/g, "\n")
    // fileContent = fileContent.replace(/[\r\n]+/g, '\n');
    // fileContent = fileContent.replace(/[\n\n\n]+/g, '\n\n');
    // fileContent = fileContent.replace(/\r\n\r\n\r\n/g, '\n\n\n');
    // fileContent = fileContent.replace(/\n\n\n/g, '\r\n\r\n');
    // var EOL = fileContent.match(/\r\n/gm) ? "\r\n": "\n";
    // var reg = new RegExp("(" + EOL + "){3,}", "gm");
    // fileContent = fileContent.replace(reg, EOL + EOL);
    fileContent = removeTabs(fileContent);
    fileContent = removeDuplicates(fileContent);
    fileContent = trimLines(fileContent);
    return fileContent;
} exports.fileCleanup = fileCleanup;

// safely saves a file content and creates sub-folder if they do not exits already
function fileSave(filePath, fileContent, autoCleanup) {
    fileMakeDir(filePath);
    if (autoCleanup === true || autoCleanup === undefined)
        fileContent = fileCleanup(fileContent);

    if (filePath.endsWith('package.json')) {
        fileContent = removeLines(fileContent);
        if (!fileContent.endsWith(EOL + EOL)) {
             fileContent += EOL;
        }
    }

    fs.writeFileSync(filePath, fileContent);
} exports.fileSave = fileSave;

// read file as array of string lines
function fileSaveLines(filePath, fileLines) {
    var content = joinLines(fileLines)
    return fileSave(filePath, content);
} exports.fileSaveLines = fileSaveLines;

function fileEndsWith(fileContent, strMatch) {
    var lines = splitLines(fileContent);
    return lines[lines.length -1] === strMatch;
} exports.fileEndsWith = fileEndsWith;


function fileMakeDir(filePath) {
    var dirName = path.dirname(filePath);
    if (fs.existsSync(dirName)) {
      return true; // already exits
    }
    fileMakeDir(dirName);
    fs.mkdirSync(dirName);
} exports.fileMakeDir = fileMakeDir;

function uniqueFilter(value, index, self) {
    return self.indexOf(value) === index;
}

function uniqueItems(arr) {
    return arr.filter(uniqueFilter);
}

var lintPackageNames = [
    'file-saver',
    '@angular/common',
    '@angular/core',
    '@angular/forms',
    'igniteui-angular',
    'igniteui-angular-core',
    'igniteui-angular-charts',
    'igniteui-angular-excel',
    'igniteui-angular-gauges',
    'igniteui-angular-maps',
    'igniteui-angular-spreadsheet',
    'igniteui-angular-spreadsheet-chart-adapter'
];
function lintSourceCode(content)  {
    for (const package of lintPackageNames) {
        content = replace(content, "'" + package + "'", '"' + package + '"');
    }
    return content;
} exports.lintSourceCode = lintSourceCode;


function lintImportsInline(content)  {
    var lines = content.split(';');

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].indexOf('import ') >= 0) {
            var lineEnds = lines[i].split('\r\n');
            if (lineEnds.length > 2) {
                var importLines = lines[i].split('import ');
                for (let i = 0; i < importLines.length; i++) {
                    if (importLines[i].indexOf('//') < 0) {
                        importLines[i] = replace(importLines[i], '\r\n', '');
                        importLines[i] = replace(importLines[i], '  ', ' ');
                        importLines[i] = replace(importLines[i], '  ', ' ');
                    }
                }
                lines[i] = importLines.join('import ');
                // console.log('>> lintImportInline << \n' + line);
            }
        }
    }
    var content = lines.join(';');
    content = replace(content, '} from',   ' } from');
    content = replace(content, '  } from', ' } from');
    content = replace(content, ';import', ';\r\nimport');
    return content;
} exports.lintImportsInline = lintImportsInline;

