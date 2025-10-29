// 📞 Calling functions


// Example of a Function Call:

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Alice'); // Output: Hello, Alice!


// The Arguments Keyword:

function sumAll() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) 
    total += arguments[i];

  return total;
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10


// Currying vs Composition:

// Currying with Bind
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // Output: 10


//  Currying with Function Returns
function add(a) {
  return function (b) {
    return a + b;
  };
}

const addFive = add(5); // addFive == (b) => 5 + b
console.log(addFive(3)); // Output: 8


// Using Arguments, Currying, and Function Calls Together

function greet(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = greet('Hello');

sayHello('Alice'); // Output: Hello, Alice!
sayHello('Bob'); // Output: Hello, Bob!


// 🔂 Recursion (see. Recursion)

// Example of Recursive vs. Non-Recursive Function

/* Factorial 

    Equation:
        n! = n × (n−1) × (n−2) × ⋯ ×1

    Example:
        5! = 5 × 4 × 3 × 2 × 1 = 120
*/

// Recursive Approach

function factorial(n) {
  if (n <= 1) return 1; // Base case (ie. 0! = 1)
  return n * factorial(n - 1); // Recursive call (ie. n! = n * (n - 1)!)
}

console.log(factorial(5)); 
// Output: 120 (ie. 5! = 5 * 4 * 3 * 2 * 1)


// Non-Recursive (Iterative) Approach

function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i; // Imperatively multiply result by i 
    // ie. result *= 1, *= 2, *= 3, *= 4, *= 5 etc.
  }

  return result;
}

console.log(factorial(5)); // Output: 120


// 🐿️ Tail Calls and Tail Call Optimization
function factorialTail(n, acc = 1) {
  if (n <= 1) return acc;
  return factorialTail(n - 1, acc * n); // Tail-recursive call, last call for TCO
}

console.log(factorialTail(5)); // Output: 120


// 