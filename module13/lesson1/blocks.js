// 🧱 Blocks


// Defining a Block
if (true) { // <-- Block starts 

  console.log("I'm in a block"); // Outputs: Hello, World!

} // <-- Block ends


// Anonymous Blocks 🥸
// Blocks are used with statements like: if and for etc.

for (let i = 0; i < 5; i++) { // <-- Anonymous block starts

  console.log(i); // Outputs: 0, 1, 2, 3, 4

} // <-- Anonymous block ends 


// 🤔 Different Uses of Blocks

// Function Definitions: 
// When defining functions, blocks encapsulate the function's body:

function greet() {  // <-- Block starts
  
  let greeting = "Hello!";
  console.log(greeting);

}  // <-- Block ends 


// Scope Management: 
// Blocks can be created with a statement to create a scope.
// Blocks can help control the visibility of variables. 
// Variables defined inside a block are not accessible outside:
{
  let blockScopedVar = "I'm inside a block!";
  console.log(blockScopedVar); // Outputs: I'm inside a block!
}

//! console.log(blockScopedVar);	
//❗ReferenceError: blockScopedVar is not defined
