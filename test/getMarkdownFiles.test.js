let assert = require('chai').assert;
let getMarkdownFiles = require("../getMarkdownFiles")
const fs = require("fs");

describe('getMarkdownFiles', function() {
    it('should form an array of any markdown files in the directory', function() {
        assert.isArray(getMarkdownFiles.getMarkdownFiles("./test"));
    })
    it('should create a source and converted folder', function() {
        assert.isOk(fs.existsSync("./test/converted" && "./test/source"));
    })
    it('should throw an error if no MD files are detected', function() {

    });
    after(function() {
        fs.rmdir("./test/converted", {recursive: true}, function(err){
            if (err) {
                return console.error("***TESTERROR***", err);
            }
        });
        fs.rmdir("./test/source", {recursive: true}, function(err){
            if (err) {
                return console.error("***TESTERROR***", err);
            }
        });
    });
});
