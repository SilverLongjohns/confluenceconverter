const fs = require("fs")

function getMarkdownFiles(directory) {
    // Create a source folder for cleanliness
    const dirConverted = directory + "/converted"
    const dirSource = directory + "/source"
    try {
        const arrayOfFiles = fs.readdirSync(directory)
        console.log(arrayOfFiles)
        let file;
        let arrayOfMarkdown = [];

        for(file in arrayOfFiles) {
            if(!arrayOfFiles[file].startsWith(".") && arrayOfFiles[file].endsWith(".md")) {
                try {
                    arrayOfMarkdown.push(arrayOfFiles[file]);
                } catch (err) {
                    console.log(err);
                    throw(err);
                }
            }
        }

        if(arrayOfMarkdown === []){throw new Error("No markdown detected.")}

        if (!fs.existsSync(dirConverted && dirSource)){
            fs.mkdirSync(dirConverted);
            fs.mkdirSync(dirSource);
        }

        for(file in arrayOfMarkdown) {
            const current = directory + "/" + arrayOfMarkdown[file];
            const future = directory + "/converted/" + arrayOfMarkdown[file];
            try {
                fs.copyFileSync(current, future);
                console.log("File " + arrayOfMarkdown[file] + " successfully copied");
            } catch (err) {
                console.log(err);
                throw(err);
            }
        }

        return arrayOfMarkdown
    } catch (e) {
        console.log(e);
    }
}

exports.getMarkdownFiles = getMarkdownFiles
