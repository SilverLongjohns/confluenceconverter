let assert = require('chai').assert;
let getMarkdownFiles = require("../getMarkdownFiles")
const fs = require("fs");
const {directoryAndMarkdownFileCleanup} = require("./helpers/directoryAndMarkdownFileCleanup");
const {createTestMarkdown} = require("./helpers/createTestMarkdown")

describe('getMarkdownFiles', function() {
    it('should form an array of any markdown files in the directory', function() {
        createTestMarkdown()
        assert.isArray(getMarkdownFiles.getMarkdownFiles("./test"));
    })
    it('should create a source and converted folder', function() {
        createTestMarkdown()
        getMarkdownFiles.getMarkdownFiles("./test/");
        assert.isOk(fs.existsSync("./test/converted"));
    })
    it('should throw an error if no MD files are detected', function() {
        assert.throws(() => { getMarkdownFiles.getMarkdownFiles("./test") }, Error, "No markdown detected.")
    });
    afterEach(function() {
        directoryAndMarkdownFileCleanup()
    });
});
