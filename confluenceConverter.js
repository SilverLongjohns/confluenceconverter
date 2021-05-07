const markdown2confluence = require('@shogobg/markdown2confluence');
const fs = require("fs")

function confluenceConverter() {
    try {
        const arrayOfFiles = fs.readdirSync("./converted");
        console.log(arrayOfFiles);
        let file;
        for(file in arrayOfFiles) {
            let markdown = fs.readFileSync(arrayOfFiles[file]);
            let confluence = markdown2confluence(markdown)
            console.log(arrayOfFiles[file] + " successfully converted to confluence format.")
            fs.writeFile('./converted/' + arrayOfFiles[file], confluence, function(err) {
                if (err) {
                    return console.error(err);
                }
            });
            fs.writeFile('./source/' + arrayOfFiles[file], markdown, function(err) {
                if (err) {
                    return console.error(err);
                }
            });
        }
    } catch (e) {
        console.log(e);
    }
}

exports.confluenceConverter = confluenceConverter
