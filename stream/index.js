// const fs = require("fs");

// const readableStream = fs.createReadStream(`${__dirname}/article.txt`, {
//     highWaterMark: 10
// });
 
// readableStream.on("readable", () => {
//     try {
//         process.stdout.write(`[${readableStream.read()}]`);
//     } catch(error) {
//         // catch the error when the chunk cannot be read.
//         console.log(error);
//     }
// });
 
// readableStream.on("end", () => {
//     console.log("Done");
// });

/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require("fs")
const readableStream = fs.createReadStream(`${__dirname}/input.txt`, { highWaterMark: 15 })
const writableStream = fs.createWriteStream(`${__dirname}/output.txt`)
readableStream.on("readable", () => {
    writableStream.write(`${readableStream.read()}\n`)
})