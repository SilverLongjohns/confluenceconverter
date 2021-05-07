const fs = require("fs")

function getMarkdownFiles(directory) {
    // Create a source folder for cleanliness
    const dirConverted = directory + "/converted"
    const dirSource = directory + "/source"
    try {
        const arrayOfFiles = fs.readdirSync(directory)
        console.log(arrayOfFiles)
        let file;
        if (!fs.existsSync(dirConverted && dirSource)){
            fs.mkdirSync(dirConverted);
            fs.mkdirSync(dirSource);
        }
        for(file in arrayOfFiles) {
            const current = directory + "/" + arrayOfFiles[file];
            const future = directory + "/converted/" + arrayOfFiles[file];
            if(!arrayOfFiles[file].startsWith(".") && arrayOfFiles[file].endsWith(".md")) {
                try {
                    fs.copyFileSync(current, future);
                    console.log("File " + arrayOfFiles[file] + " successfully copied");
                } catch (err) {
                    console.log(err);
                    throw(err);
                }
            }
        }
        return arrayOfFiles
    } catch (e) {
        console.log(e)
    }
}

exports.getMarkdownFiles = getMarkdownFiles
