// 💱 Type Conversion
//#region
let num, str;
//#endregion

// Constructor functions (ie. Boolean(), Number() etc.):

num = Number('42'); // Converts string to number
str = String(42); // Converts number to string
let bool = Boolean(1); // Converts 1 to true

console.log(num, str, bool);

// toString() Method
let number = 100;
console.log(number.toString()); // "100" as a String

// Using parseInt() and parseFloat()
// parseInt() converts strings to whole numbers (integers).
// parseFloat() handles decimals (floating-point numbers).

let price = parseFloat('19.99'); // 19.99 as a Number
console.log(price + 5); // 24.99 as a Number

// 🃏Fun Fact: These functions just ignore non-numeric characters
// after encountering a number. For example: 🙈
console.log(parseInt('123abc'));
// the bad part "abc" was just chopped off!🪓


// Implicit vs. Explicit Type Conversion

// Explicit Conversion (Controlled by the programmer):
num = Number('42'); // Explicit conversion to number
str = String(42); // Explicit conversion to string

// Implicit Conversion (Automatically done by JS):
console.log('5' + 2); // "52" (String concatenation)
console.log('5' - 2); // 3 (Subtraction converts "5" to number)

// Examples of Coercion Craziness 😱

// 🫠 JS is weird when it tries to help...

console.log(1 + true); // 🤔 2 (true becomes 1)
console.log(null + 5); // 🙁 5 (null becomes 0)
console.log([] + []); // 😦 "" (Two empty arrays become a string)
console.log([] == 0); // 😱 true (Empty array coerced to 0)

// 🤯 You can abuse this to write any JS code 😱
console.log(+!![]); // 😱 1
/* !![] converts [] to true then + converts true to 1 */
