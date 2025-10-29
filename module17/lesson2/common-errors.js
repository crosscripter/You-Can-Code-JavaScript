// 🩻 Common Error Objects and Properties

//#region 
let err;
//#endregion

// Error Object: Properties and Methods

// .name
// The type or name of the error.
err = new Error("Oops!");
console.log(err.name); // Output: "Error"


// .message
// A description of what went wrong.

err = new Error("Something went wrong.");
console.log(err.message); // Output: "Something went wrong."


// .stack
// A stack trace showing where the error occurred.

err = new Error("Stack trace example");
console.log(err.stack);


// Useful Methods:

// toString(): Converts the error object to a string.
err = new Error("Error example");
console.log(err.toString()); // Output: "Error: Error example"


// Built-In Error Types in☕JavaScript

// Error
// The generic error object.
//! throw new Error("A general error occurred.");


// TypeError
// Thrown when a variable is of an unexpected type.
let num = 5;
//! num.toUpperCase(); // Throws TypeError


// ReferenceError
// Thrown when trying to access a variable that doesn’t exist.
//! console.log(nonExistentVar); // Throws ReferenceError


// 📑 SyntaxError
// Thrown when there’s a syntax mistake in your code.
//! eval("console.log('Hello)"); // Throws SyntaxError


// RangeError
// Thrown when a number is outside an allowable range.
//! let arr = new Array(-1); // Throws RangeError


// URIError
// Thrown when there’s an issue with encoding or decoding URIs.
//! decodeURIComponent("%"); // Throws URIError


// 👿 EvalError
// Thrown when there’s an issue with the eval() function (rare in modern code).


// Example: Obsolete usage, but technically possible.
//! throw new EvalError("Eval function failed.");

// AggregateError
// Represents multiple errors wrapped into a single error object (commonly used with Promises).
err = new AggregateError([
  new Error("First"),
  new Error("Second")
], "Multiple errors");

console.log(err.message); // Output: "Multiple errors"

