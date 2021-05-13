let confluenceConverter = require("./confluenceConverter")
let getMarkdownFiles = require("./getMarkdownFiles")
let Confluence = require("confluence-api")

var config = {
    username: "testuser",
    password: "test-user-pw-or-rest-api-token",
    baseUrl:  "https://confluence-api-test.atlassian.net/wiki",
};

const input = "./documentation"

getMarkdownFiles.getMarkdownFiles(input);
confluenceConverter.confluenceConverter(input);
