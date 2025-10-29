// Conditional Expressions


// Basic Ternary Operator

// Check if a number is even or odd
const number = 7;

// Conditional expression
const result = number % 2 === 0 ? "Even" : "Odd";
console.log(`The number is ${result}.`);
// Output: The number is Odd.


// Using Logical Operators

// User authentication example
const isLoggedIn = true;
const hasPermission = false;

// Conditional expression with logical operators
const access = isLoggedIn && hasPermission ? "Access granted" : "Access denied";
console.log(access); 
// Output: Access denied


// Nested Ternary Operator

// Assigning roles based on access level
const accessLevel = 2;

// Conditional expression for role assignment
const role = 
    accessLevel === 1 ? "Admin"
  : accessLevel === 2 ? "Editor"
  : accessLevel === 3 ? "Viewer"
  : "Guest";

console.log(`Your role is: ${role}`);
// Output: Your role is: Editor
