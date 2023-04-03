const fs = require("fs");
const path = require("path");

//A <fs.Stats> object provides information about a file
console.log("true", fs.lstatSync(__dirname).isDirectory());
console.log(
  "false",
  fs.lstatSync(path.resolve(__dirname, "fs.js")).isDirectory()
);

// true
console.log("Returns true if the path exists", fs.existsSync(__dirname));

// undefined
console.log(
  "Create a directory",
  fs.mkdirSync(path.resolve(__dirname, "mkdirSync"))
);

// <Buffer 63 6f 6e 73 74 20 66 73 20 3d 20 72 65 71 75 69 72 65 28 22 66 73 22 29 3b 0d 0a 63 6f 6e 73 74 20 70 61 74 68 20 3d 20 72 65 71 75 69 72 65 28 22 70 ... 548 more bytes>
// 'utf-8' as a second paremether to encode Buffer
console.log(
  "Synchronously reads the entire contents of a file",
  fs.readFileSync(path.resolve(__dirname, "fs.js"))
);

// undefined
console.log(
  "Change the permissions of a given path",
  fs.chmodSync(path.resolve(__dirname, "fs.js"), "777")
);

// undefined
console.log(
  "Synchronously copies src to dest",
  fs.copyFileSync(
    path.resolve(__dirname, "test.txt"),
    path.resolve(__dirname, "test.js")
  )
);

// undefined
console.log(
  "Synchronous unlink",
  fs.unlinkSync(path.resolve(__dirname, "test.js"))
);
