const path = require("path");

// c:\Users\Bianca\Desktop\studies
console.log("Directory from which you invoked the node command", process.cwd());

// c:\Users\Bianca\Desktop\studies\git-commit-msg-linter
console.log(
  "Directory name of the directory containing the JavaScript source code file",
  __dirname
);

// c:\Users\Bianca\Desktop\studies\git-commit-msg-linter\node.js
console.log(
  "Absolute path with filename of the code which is executed",
  __filename
);

// node.js
console.log("Last portion of a path", path.basename(__filename));

// .js
console.log("Extension of the path", path.extname(__filename));

/* {
  root: 'c:\\',
  dir: 'c:\\Users\\Bianca\\Desktop\\studies\\git-commit-msg-linter',
  base: 'node.js',
  ext: '.js',
  name: 'node'
} */
console.log(
  "Object from a path string - the opposite of format()",
  path.parse(__filename)
);

// c:\Users\Bianca\Desktop\studies\git-commit-msg-linter\node.js
console.log(
  "Path string from a object - the opposite of parse()",
  path.format(path.parse(__filename))
);

// true
console.log(
  "Determines whether a path is an absolute path",
  path.isAbsolute(__filename)
);

// c:\Users\Bianca\Desktop\studies\git-commit-msg-linter\folder1\folder2\index.html
console.log(
  "Join all arguments together and normalize the resulting path",
  path.join(__dirname, "folder1", "folder2", "//folder3", "../index.html")
);

// c:\folder1\folder2\index.html
// c:\Users\Bianca\Desktop\studies\folder1\folder2\index.html
// c:\folder2\index.html
console.log(
  "Join all arguments together and normalize the resulting path",
  path.resolve("/folder1", "folder2", "index.html"),
  path.resolve("folder1", "folder2", "index.html"),
  path.resolve("folder1", "/folder2", "index.html")
);

// join vs resolve
// 1. resolve will always result in an absolute URL
// 2. resolve will use the working directory as a base to resolve the path
// 3.1 join will just concatenate segments starting with / with the previous argument
// 3.2 resolve will treat segments starting with / as the root directory
