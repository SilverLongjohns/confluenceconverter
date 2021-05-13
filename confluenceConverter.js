const markdown2confluence = require('@shogobg/markdown2confluence');
const fs = require("fs")

function confluenceConverter(directory) {
    try {
        const arrayOfFiles = fs.readdirSync(directory + "/converted");
        console.log("CONVERTERARRAY", arrayOfFiles);
        let file;
        for(file in arrayOfFiles) {
            let markdown = fs.readFileSync(directory + '/converted/' + arrayOfFiles[file]);
            let confluence = markdown2confluence(markdown)
            console.log(arrayOfFiles[file] + " successfully converted to confluence format.")
            fs.writeFile(directory + '/converted/' + arrayOfFiles[file], confluence, function(err) {
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
