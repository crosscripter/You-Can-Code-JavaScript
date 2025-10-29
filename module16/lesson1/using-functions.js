// 🎮 Using Functions


// Parts of a Function:

// A JS function consists of several key elements:

// Name: Identifies the function (optional for anonymous functions).
// Signature: The parameter list that defines the input(s) the function expects.
// Body: The code inside the function that executes when the function is called.
// Return Value: The result returned (optional).

// Let's define a brand new function: greet
function greet(name) {
  return `Hello, ${name}!`; // Body and Return Value
}

// Function Declaration
// This is the standard way of defining functions, 
// which makes them hoisted to the top of their scope. 
// this is using the function statement as shown below:

// Function declaration
function add(a, b) {
  return a + b;
}

// Function Expression
// Functions can also be stored in variables, making them expressions.

// Function Expression
const subtract = function (a, b) {
  return a - b;
};

// ▶️ Arrow Functions (Lambdas)
// Arrow functions (technically known as lambdas from Lambda Calculus) 
// 🐑 offer an even more concise syntax and are commonly used a lot 
// in modern☕JavaScript.

// Arrow functions are nameless parameter list
// with an arrow separating the body or expression
// Think of this as a shortcut for function expressions:
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

// 🧙‍♂️Pro Tip: If an arrow function only takes a single parameter 
const inc = n => ++n; // Look ma' no parens!
console.log(inc(42));

// Passing an arrow function into .map()
let items = [1, 2, 3];
let doubles = items.map(item => item * 2);
console.log(doubles);

// Calling a Function
const greetMe = name => console.log(`Hi ${name}`)
greetMe("Bob");  // Calls the greet function with "Bob" as the name argument


// 🏆 First-Class Functions and Callbacks

// A function that takes a function as a parameter
function doMath(a, b, operation) {
  // We can call the operation function in our function
  return operation(a, b); // Call callback and return result
}

// Now we can specify which operation to do:
const sum = doMath(3, 4,  (x, y) => x + y);
const product = doMath(3, 4,  (x, y) => x * y);
console.log(sum, product); 
// Output: 7 12


