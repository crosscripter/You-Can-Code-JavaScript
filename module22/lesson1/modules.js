// 📄 Modules

// Importing the 'fs' module for file handling in Node.js
const fs = require('fs');

//#region 
const { join } = require('path');
//#endregion

// Using a method from the fs module to read a file
// specify the path to file, encoding (UTF8) and callback
fs.readFile(join(__dirname, 'example.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
