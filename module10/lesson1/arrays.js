// Arrays


// A World Without Arrays
let fruit1 = 'apple';
let fruit2 = 'banana';
let fruit3 = 'orange';
// let fruitN = '...';


// Using an Array
let fruits = [
  'apple', // fruit1
  'banana', // fruit2
  'orange' // fruit3
];


// Array Types and Declarations

// Using array literal (ie. square brackets [...])
// An "empty" array
let empty = [];

// A mixed array of different types
let mixed = [1, true, 'A'] // 👈 String
//   Number 👆, 👆 Boolean

let colors = ['red', 'green', 'blue'];
// Outputs: ['red', 'green', 'blue'] (A String Array)

// OR we can use the Array constructor function
let numbers = new Array(1, 2, 3);
// Outputs: [1, 2, 3] (A Number Array)


// 🤔 A Number Array with length of 3 items, but all empty!
let badArray = Array(3); 
// You might think it would be an array with one item 3!
// console.log(badArray);
