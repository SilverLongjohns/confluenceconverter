let confluenceConverter = require("./confluenceConverter")
let getMarkdownFiles = require("./getMarkdownFiles")
const fs = require("fs");

const input = "./documentation"

let directories = []

    fs.readdirSync(input).forEach(elem => {
        let currentDir = input + "/" + elem
        let state = fs.statSync(currentDir)
        if(state.isDirectory()) directories.push(currentDir);
});

directories.forEach(folder => {
    getMarkdownFiles.getMarkdownFiles(folder);
    confluenceConverter.confluenceConverter(folder);
});
