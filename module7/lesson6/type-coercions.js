// Tips on How to Avoid Type Coercion Bugs

// Use Strict Equality (===)
// Unlike ==, === does not perform implicit type conversion:
console.log(5 === '5'); // false (No coercion)
console.log(5 == '5'); // true (Implicit coercion)

//#region 
let price;
//#endregion

// Explicit Type Conversion
// Always convert data explicitly when mixing types:
price = '19.99';
console.log(Number(price) + 5); // 24.99

// Use Type Checking with typeof
// Verify the type of variables to avoid coercion issues:
let x = '123';

if (typeof x === 'number') {
  console.log(x + 1);
} else {
  console.log('Not a number');
}


// Handy Shortcuts for Type Conversion 

// Convert Strings to Numbers with +
// Adding a + in front of a string attempts to coerce it into a number:
price = "42";

console.log(+price);  // 42 as a Number
console.log(typeof +price);  // "number"

//! Caution: If the String isn't a valid Number, the result will be NaN.
console.log(+"abc");  // NaN 👀

// Convert Any Value to Boolean with !!
// Double bangs (!!) convert any value into its Boolean equivalent:

console.log(!!1);
console.log(!!0);
console.log(!!"Hello");
console.log(!!null);

// How it works:
// The first ! negates the value (truthy becomes falsy and vice versa).
// The second ! reverses it back, giving the boolean representation.