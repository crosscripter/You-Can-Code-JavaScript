/// math.js — The module that exports a function

// Our useful function we want to share
function add(a, b) {
  return a + b;
}

// CommonJS module exports
// Exporting the add function using module.exports
module.exports = add;

// NOTE: Can be an individual object or an object
// that contains multiple exported objects:
//   module.exports = { add };