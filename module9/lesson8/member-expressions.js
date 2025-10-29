// Member Expressions


// Accessing Object Properties with Dot and Bracket Notation

// Define an object
const person = {
  name: "Alice",
  age: 30,
  "favorite color": "blue" // A property with a space
};

// Accessing properties using dot notation
console.log(person.name);  // "Alice"
console.log(person.age);   // 30

// Accessing properties using bracket notation
console.log(person["favorite color"]); // "blue"

// Bracket notation is useful for dynamic property names
const prop = "age";
console.log(person[prop]); // 30


// Accessing Array Elements

// Define an array
const numbers = [10, 20, 30, 40, 50];

// Access elements using bracket notation (index starts from 0)
console.log(numbers[0]); // 10
console.log(numbers[2]); // 30

// Dynamically accessing elements
let index = 4;
console.log(numbers[index]); // 50

// Modifying an element
numbers[1] = 25;
console.log(numbers); // [10, 25, 30, 40, 50]


// Accessing Nested Objects and Arrays

// Define a nested object
const student = {
  name: "John",
  scores: {
    math: 90,
    science: 85
  },
  subjects: ["Math", "Science", "History"]
};

// Accessing nested object properties
console.log(student.scores.math);  // 90
console.log(student["scores"]["science"]); // 85

// Accessing array elements inside an object
console.log(student.subjects[0]);  // "Math"
console.log(student.subjects[2]);  // "History"

// Dynamically accessing nested properties
const subjectIndex = 1;
console.log(student.subjects[subjectIndex]); // "Science"
