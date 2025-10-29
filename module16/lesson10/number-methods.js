// #️⃣ Number Methods


//#region
let num;
//#endregion

// toFixed()
// Formats a number to a fixed number of decimal places.
num = 3.14159; // Not quite PI 🥧
console.log(num.toFixed(2));  // Output fixed at 2 decimal places: "3.14"


// toExponential()
// Returns a string representing the number in exponential notation.
num = 1234;
console.log(num.toExponential(2));  // Output: "1.23e+3"


// toPrecision()
// Formats a number to a specified length or precision.
num = 3.14159;
console.log(num.toPrecision(3));  // Output with 3 digits precision: "3.14"


// 4. toString()
// Converts a number to a string in a specified base (radix).

num = 255;
console.log(num.toString(16));  // Output: "FF" (base 16, hexadecimal)
console.log(num.toString(2));   
// Output: "11111111" (base 2, binary)


// Static Methods in the Number Type in☕JavaScript
// Here’s a list of the most commonly used static methods 
// on the Number type, with brief explanations and code examples. 
// These methods are called directly on the Number class rather 
// than on an instance.


// Number.isFinite()
// Checks if the value is a finite number.

console.log(Number.isFinite(42));  // true
console.log(Number.isFinite(Infinity));  // false


// Number.isInteger()
// Determines if the value is an integer.

console.log(Number.isInteger(4));  // true
console.log(Number.isInteger(4.2));  // false


// Number.isNaN()
// Checks if the value is NaN (Not a Number).

console.log(Number.isNaN(NaN));  // true
console.log(Number.isNaN(123));  // false


// Number.isSafeInteger()
// Checks if the value is a safe integer within☕JavaScript’s range.

console.log(Number.isSafeInteger(9007199254740991));  // true
console.log(Number.isSafeInteger(1.5));  // false


// Number.parseFloat()
// Converts a string to a floating-point number.

console.log(Number.parseFloat("3.14"));  // 3.14 (as a Number)


// Number.parseInt()
// Converts a string to an integer.

console.log(Number.parseInt("42"));  // 42
console.log(Number.parseInt("42px"));  
// 42 (ie. Non numeric part chopped off!)

//! 🧙‍♂️Pro Tip: ALWAYS specify the optional radix parameter when using parseInt!
console.log(Number.parseInt("0o8"));  // 0 😱 (ie. 08 is Octal (base 8) for 0)
console.log(Number.parseInt("08", 10));  // 8 (base 10 or decimal)


// 😯 Number.EPSILON
// Represents the smallest difference between two numbers. Useful for comparing floating-point values.

console.log(Number.EPSILON);  // 2.220446049250313e-16


// Number.MAX_VALUE
// The largest positive number☕JavaScript can represent.

console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308

// Number.MIN_VALUE
// The smallest positive number (close to zero).

console.log(Number.MIN_VALUE);  // 5e-324


// Number.POSITIVE_INFINITY
// Represents positive infinity.

console.log(Number.POSITIVE_INFINITY);  // Infinity


// Number.NEGATIVE_INFINITY
// Represents negative infinity.

console.log(Number.NEGATIVE_INFINITY);  // -Infinity

// Number.NaN
// Represents the NaN value (Not a Number).

console.log(Number.NaN);  // NaN
console.log(Number.isNaN(NaN));  
// true (all other values false)

