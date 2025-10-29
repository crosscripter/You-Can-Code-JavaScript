// 🌍 Global Scope


// globalThis and window

// Example of globalThis
console.log(globalThis); // Logs the global object in any environment

// Example of window 
// WARNING: 🌍 only in browsers, window is not in NodeJS!
//! console.log(window); // Logs the window object


// Using globalThis Correctly

// Defining a utility function globally by attaching to globalThis:
globalThis.myUtility = function() {
  console.log("This does something really useful!");
};

// Accessing the utility function from anywhere without mentioning
// any object it's attached to (implicitly it's globalThis)
myUtility(); // Outputs: This does something really useful!


// 