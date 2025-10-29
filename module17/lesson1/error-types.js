// 🦹 Error Types


// Syntax Error
//! console.log("Hello World); // ❌ SyntaxError: Missing closing quote "


// Reference Errors
//! console.log(name); // ❌ ReferenceError: name is not defined


// Type Errors
let num = 42; // Number
//! num.toUpperCase(); // ❌ TypeError: num.toUpperCase is not a function
// Ooops! Can't uppercase a number!


// 🤠 4. Range Errors
//! let arr = new Array(-1); // ❌ RangeError: Invalid array length


// Logical Errors 🧠
let total = 0; // ❌ Logical Error: Forgot to initialize total to 1

for (let i = 1; i <= 10; i++) {
    total += i;
}

console.log(total); // Wrong answer, 55 not 56!


// IO Errors 🖨️
// Fetch data from a website:
// http://non-existent-url.com/ (which doesn't exist)

fetch('https://non-existent-url.com')
  .then(response => response.json())
  .catch(error => console.error("Failed to fetch:", error));

// System & Runtime Errors 🦿
let arr = [];

// ❗ while(true): This condition will NEVER be false which means 
//  our loop will NEVER terminate and will run forever or we terminate it!
while (true) {
  // Here we push a new random number into our array forever ...eventually though 
  // our computer will run out of memory to store all these numbers and will crash
  arr.push(Math.random()); // ❌ OutOfMemory Error: Crashing our program!
  console.log(arr.join(','))
  
  //! 👇 COMMENT OUT TO TRIGGER ERROR!
  break;
}

console.log('this will never print!');
