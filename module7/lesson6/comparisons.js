// Comparison Operators

// Assignment Operator (=)
// This assigns a value to a variable:

let age = 30;  // Assigns 30 to 'age'


// Equality Operator (==)
// The == operator checks if two values are equal after type coercion (converting different types if needed):
console.log(5 == "5");  // true (string coerced to number)

//! Pitfall: Can cause unexpected behavior due to implicit type conversion.


// Strict Equality Operator (===)
// The === operator compares both value and type without coercion.
// It avoids bugs caused by unintended type coercion:
console.log(5 === "5");  // (types differ)

// 🧙‍♂️Pro Tip: Always prefer to use the strict equality operator (===) 
// when doing comparisons in JS it's a very strong convention in modern dev


// Inequality Operators (!= and !==)
/* != checks inequality with coercion, while !== checks without coercion. */
console.log(5 != "5");
console.log(5 !== "5");

// 🧙‍♂️Pro Tip: ALWAYS use === and !== for comparisons unless you explicitly 
// want coercion. This helps avoid hard-to-find bugs, especially when working 
// with mixed data types.
