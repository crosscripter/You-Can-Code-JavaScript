// 🎛️ Common Functions


// Functions vs Methods

// Function: 
// A standalone block of reusable code. Think of it like a recipe 
// you can use anywhere in the kitchen (your program)

function greet() {
  console.log('Hello!');
}

greet(); // Output: Hello!


// Method: 
// Is a owned function that belongs to an object. 
// It’s like a microwave button that performs a specific task only 
// on that appliance (the object).

let person = {
  speak: function () {
    console.log('Hi!');
  }
};

person.speak(); // Output: Hi!


// Static Methods vs Instance Methods

// Static Method:
// Method is attached directly to String

console.log(String.fromCharCode(65));  // Output: "A"

// Instance Method:
// Method is attached to a particular value

let str = "hello";
console.log(str.toUpperCase());  // Output: "HELLO"


// Global Functions

// console.log() – Prints to the console.
console.log("I bet you're tired of this example!"); 


// parseInt() / parseFloat() – Converts strings to numbers.
console.log(parseInt("42"));   // Output: 42 (as a Number)
console.log(parseFloat("3.14")); // Output: 3.14 (as a Number)


// isNaN() – Checks if a value is Not-a-Number.
console.log(isNaN("abc")); // Output: true (ie. is a String, Not a Number)


// typeof() – Returns the type of a value. (Technically speaking this is an operator and the parenthesis are not required) I almost prefer to treat it as a function personally.
console.log(typeof(42)); // Output: number
// OR without the parens:
console.log(typeof 42);  // Output: number


// setTimeout() / setInterval() – Executes a function after a delay or at intervals.
setTimeout(() => console.log("Time’s up!"), 1000); // Output (1s): Time’s up!


// 📐 Math Object Functions

// Math.round() – Rounds a number to the nearest integer.
console.log(Math.round(4.5)); // Output: 5


// Math.random() – Generates a random number between 0 and 1.
console.log(Math.random()); // 🎲 Random output every time: 0.726


// Math.max() / Math.min() – Find the largest or smallest value.
console.log(Math.max(1, 3, 2)); // Output: 3
console.log(Math.min(1, 3, 2)); // Output: 1


// Math.sqrt() / Math.pow() – Find square roots or powers.
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.pow(2, 3)); // Output: 8

// And many others!
