// Operator Fixity

// Types of Fixity 
// - Prefix Fixity: The operator appears BEFORE its operand(s). 
// - Postfix Fixity: The operator appears AFTER its operand. 
// - Infix Fixity: The operator is placed BETWEEN its operands. 

// Fixity Examples:
let x = 5;
let y = 10;

// Prefix Increment
// x is incremented to 6, then a is assigned value of x (6)
// The prefix increment (++x) increases x BEFORE using its value.
let a = ++x;
console.log(a, x);

// Postfix Increment
// b is assigned the value of y (10), then y is incremented to 11
// The postfix increment (y++) uses y first and THEN increases it.
let b = y++;
console.log(b, y);

// Infix Addition
// The infix addition (a + b) simply adds the two values.
let sum = a + b; // sum is 6 (from a) + 10 (from b), resulting in 16
console.log(sum, a, b);
