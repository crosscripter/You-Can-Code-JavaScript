// ⏸️ Synchronous Execution


// 👘 Example of Synchronous Code Flow in☕JavaScript

// Function declarations
function greet(name) { 
  return `Hello, ${name}!`; 
}

const isEven = (num) => num % 2 === 0; 

console.log(greet('Alice')); // Output: Hello, Alice!
let total = 0;

for (let i = 1; i <= 5; i++) {

  // Iteration
  if (isEven(i)) {
    // Branching with function call
    console.log(`${i} is even.`); // Output: 2 is even, 4 is even
    total += i; // Accumulating the total of even numbers
  }
}

console.log('Total of even numbers:', total); 
// Output: Total of even numbers: 6
