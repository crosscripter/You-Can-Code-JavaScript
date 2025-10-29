// ➰ while Loops


// Basic Syntax of while Loop:
let count = 1;

while (count <= 3) {
  console.log(`Count: ${count}`); // Count: 1, 2, 3
  count++; // Increment the counter
}

// Initialization: A variable is often defined before the loop begins (let count = 1).
// Condition: The loop runs while the condition count <= 3 is true.
// Increment: Inside the loop, we increase the value of count to avoid an infinite loop.


// Infinite Loops with while(true):

// 😱 Infinite loop! 
//! ❗This loop would run forever because true would never be false

while (true) {
  console.log("This is the song that never ends...");
  break; // 👈 break exits the loop immediately!
}


// The continue Keyword
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // Skip even numbers
  console.log(`Odd number: ${i}`); 
}

// Odd number: 1, 3, 5, 7, 9


// do...while Loop: Guaranteed Execution

// num is 5 which is not less than 3
let num = 5;

do {
  console.log(`Number is ${num}`);
} while (num < 3); // Output: Number is 5


// Recreating a for Loop with while

// For loop
// initialization; condition; increment
for (let i = 1; i <= 3; i++) {
  console.log(`Count: ${i}`);
}

/// Equivalent to this while loop:
let i = 1; // Initialization

while (i <= 3) { // condition
  console.log(`Count: ${i}`);
  i++; // Increment
}


