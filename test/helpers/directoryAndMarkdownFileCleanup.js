const fs = require("fs");

function directoryAndMarkdownFileCleanup() {
    fs.rm("./test/test.md", function(err){
        if (err) {
            return console.error("***TESTERROR***", err);
        }
    });
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
}

module.exports = {directoryAndMarkdownFileCleanup}
