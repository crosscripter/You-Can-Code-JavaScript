// typeof Operator
// This operator returns the type of a value as a string:

console.log(typeof 42); // "number"
console.log(typeof 'Hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof undefined); // "undefined"

// 🫠 Watch out for these though!
console.log(typeof []); // 😨 "object" (not "array"??)
console.log(typeof null); // 😱 "object" (not "null"?!)

//! Common Pitfalls:
//! - typeof null returns "object", which is just plain wrong can be misleading. 
//! - Arrays also return "object", though they behave differently from regular 
//!   objects. Technically, this is true but not helpful for most coding!

// Array.isArray()
// Some advanced types require special methods
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray('Array'));

// instanceof Operator
// This checks if a variable is an instance of a specific constructor
console.log([] instanceof Array);
console.log({} instanceof Object);


// 🫣 Checking for null values
// Use a strict comparison (ie. triple equals signs) to detect null correctly: 

let value = 0;
console.log(!value);
console.log(value === null); 
