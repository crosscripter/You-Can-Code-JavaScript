// Array Expressions

// Defining and Accessing an Array
// Defining an array of fruits
const fruits = ["apple", "banana", "cherry"];

// Accessing elements using an array expression
const favoriteFruit = fruits[1];
console.log(`My favorite fruit is: ${favoriteFruit}`);


// Array Methods - Adding and Removing Elements

// Array of numbers
let numbers = [1, 2, 3];

// Array expression: Add an element using `push()`
numbers.push(4); // Adds 4 to the end of the array

// Array expression: Remove the first element using `shift()`
const removedNumber = numbers.shift(); // Removes the first element (1)
console.log(numbers); // Output: [2, 3, 4]
console.log(`Removed number: ${removedNumber}`);


// Iterating Over Arrays

// Array of scores
const scores = [85, 92, 78, 90];

// Array expression: Calculate the average score using `reduce()`
const total = scores.reduce((sum, score) => sum + score, 0);
const average = total / scores.length;
console.log(`The average score is: ${average}`);
