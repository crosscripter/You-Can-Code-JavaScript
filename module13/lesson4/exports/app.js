
/// app.js — the module that imports our Math module
// Importing the add function from math.js using the require function:
// require() takes the path to the module on the file system where ./
// is the current directory.  You can omit the .js file extension by
// convention:

const add = require('./math');

// OR if we exported multiple exports we could destructure add:
//   const { add } = require('./math');


// Using the imported function is as simple as calling it!
const result = add(5, 3); // this is add function from math.js
console.log(result); // Outputs: 8
