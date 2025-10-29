// Call Expressions


// Function Call Expressions

// Define a simple function
function add(a, b) {
  return a + b;
}

// Function call expression
const result = add(5, 3); // Call the 'add' function with arguments (5, 3)
console.log(result);      // Output: 8


// Method Call Expression

// Define an object with a method
const calculator = {
  multiply(a, b) {
    return a * b;
  },
};

// Method call expression
const product = calculator.multiply(4, 2); // Call the 'multiply' method
console.log(product);                      // Output: 8


// Constructor Call Expression

// Define a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Constructor call expression using 'new'
const person1 = new Person("John", 25); // Create a new instance of 'Person'
console.log(person1.name);              // Output: "John"
console.log(person1.age);               // Output: 25


// toString() Method (Function Call Expression)
let number = 123; // A number variable as Number
let stringValue = number.toString(); // Function call expression
console.log(stringValue); 
// Outputs: "123" as a String
