// 🔁 for Loops


// for Loop Countdown Example

for (let i = 1; i <= 3; i++) {
  console.log(`Count: ${i}`); // Count: 1, 2, 3
}

// How It Works:

// Initialization (let i = 1):
// This runs once at the start of the loop.
// A variable i is created and initialized to 1.
// This value will change during the loop as we increment it.

// Condition Check (i <= 3):
// Before each loop iteration, this condition is evaluated.
// If i is less than or equal to 3, the loop continues. If not, the loop stops.
// On the first iteration, i = 1 (true), so the loop runs.

// Body Execution (console.log):
// If the condition is true, the loop executes the code inside the curly braces.
// On the first pass, it prints: Count: 1.

// Increment (i++):
// After each iteration, the variable i is incremented by 1 (i = i + 1).
// This prepares for the next iteration.

// Repeating the Process:
// The condition is checked again with the new value of i.
// - 2nd iteration: i = 2 (prints Count: 2).
// - 3rd iteration: i = 3 (prints Count: 3).
// When i becomes 4, the condition i <= 3 is false, and the loop stops.
