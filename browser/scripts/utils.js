const fs = require("fs");
const path = require("path");

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

function fileRead(filePath) {
    var content = fs.readFileSync(filePath, "utf8");
    return content;
} exports.fileRead = fileRead;

// safely saves a file content and creates sub-folder if they do not exits already
function fileSave(filePath, fileContent) {
    fileMakeDir(filePath);
    var content = fs.writeFileSync(filePath, fileContent);
    return content;
} exports.fileSave = fileSave;

function fileMakeDir(filePath) {
    var dirName = path.dirname(filePath);
    if (fs.existsSync(dirName)) {
      return true; // already exits
    }
    fileMakeDir(dirName);
    fs.mkdirSync(dirName);
} exports.fileMakeDir = fileMakeDir;
