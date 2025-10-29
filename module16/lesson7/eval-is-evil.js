// 😈 eval is Evil


// How Does eval() Work?

// Pass Code as Strings: eval() can run any valid JS code 
// passed to it as a string.

// Access Variables in Scope: It executes within the local 
// or global scope it’s called from.

// In other words: eval() runs strings like JS runs our files!
let x = 2;
console.log(eval("x + 3")); // Output: 5


// ❗Dangers and Security Risks of eval()
let userInput;
userInput = "console.log('Hacked!');";
eval(userInput); // Executes anything the user inputs! 😱


// Now what if a malicious script was executed as user input! 😱
//! userInput = `require('./malicious')`
// eval(userInput);

// Alternatives to eval()
// JSON.parse() – If you need to convert strings into objects.
const obj = JSON.parse('{"name": "Alice"}');
console.log(obj.name); // Output: Alice

// Functions and Callbacks – Use higher-order functions instead of dynamically evaluating code.

// Template Literals – For injecting variables into strings safely:
const name = "Alice";
console.log(`Hello, ${name}!`); // Output: Hello, Alice!

// 🧫 Creating Complex Code with eval()
const expression = "2 + 3 * 5";
console.log(eval(expression)); // Output: 17

// Demo time! RPN Calculator (rpn-calculator.js)