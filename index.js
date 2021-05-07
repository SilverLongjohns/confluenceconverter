let confluenceConverter = require("./confluenceConverter")
let getMarkdownFiles = require("./getMarkdownFiles")

getMarkdownFiles.getMarkdownFiles(".");
confluenceConverter.confluenceConverter();
