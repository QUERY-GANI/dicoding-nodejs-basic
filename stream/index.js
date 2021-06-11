const fs = require("fs");
const path = require("path");

const readableStream = fs.createReadStream(`${__dirname}/article.txt`, {
    highWaterMark: 10
});
 
readableStream.on("readable", () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
        console.log(error);
    }
});
 
readableStream.on("end", () => {
    console.log("Done");
});