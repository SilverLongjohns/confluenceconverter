const fs = require("fs");

function createTestMarkdown() {
    fs.appendFile('./test/test.md', '## Test', function (err) {
        if (err) {
            return console.error("***TESTERROR***", err);
        }
    });
}

module.exports = {createTestMarkdown}
