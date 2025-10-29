/* Arithmetic Operators
==============================================
Operator    Description     Example     Result
+           Addition        5 + 3       8
-           Subtraction     10 - 6      4
*           Multiplication  7 * 2       14
/           Division        12 / 4      3
%           Modulus         10 % 3      1
**          Exponentiation  2 ** 3      8
===============================================
*/

// Addition (+)
let total = 10 + 5;        
console.log(total);

// Subtraction (-)
console.log(10 - 5);

// Multiplication (*)
let product = 10 * 3;
console.log(product);

// Division (/)
console.log(10 / 3);

// Modulus (%)
let remainder = 10 % 3;
console.log(remainder);

// Exponentiation/Power (**)
let cubed = 2 ** 3;
console.log(cubed);


// Self-Increment and Self-Decrement Operators
//#region 
let counter;
//#endregion

// Self-Increment Operator (++):
counter = 5;
counter++;  // Equivalent to counter += 1;
console.log(counter);

// Self-Decrement Operator (--):
counter = 5;
counter--; // Equivalent to counter -= 1;
console.log(counter);

//! 🕳️ Common Pitfalls
// Using these operators can sometimes lead to bugs, 
// especially in expressions where their placement matters due to 
// pre-increment and post-increment behavior.
// - Post-Increment (x++): Returns the original value and then increments.
// - Pre-Increment (++x): Increments first, then returns the new value.

// Post-Increment (x++):
let x = 5;
let y = x++; // y will be 5, x will be 6
console.log(y);
console.log(x);

// Pre-Increment (++x):
let a = 5;
let b = ++a; // a will be 6, b will also be 6 👀
console.log(b);
console.log(a);

// Tips for Safe Use
// - Clarity: Use the self-increment and self-decrement operators 
//   when the intention is clear and the context is simple.
// - Avoid Complex Expressions: Avoid using them in complex expressions 
//   to prevent unintended behavior or confusion.
// - Stick to Readability: If in doubt, use:
//      counter += 1 
//   or 
//      counter -= 1 
//   to maintain readability.
