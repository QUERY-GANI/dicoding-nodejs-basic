const fs = require("fs") // TODO: tampilkan teks pada notes.txt pada console.
console.log(fs.readFileSync(`${__dirname}/notes.txt`, { encoding: "utf-8" }))