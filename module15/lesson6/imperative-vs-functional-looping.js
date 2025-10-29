// 🪖 Imperative vs. Functional Looping


// Imperative Iteration (Using Loops):

// Doubling Array Elements with a for Loop
//#region 
let numbers, double;
//#endregion

numbers = [1, 2, 3, 4];
doubled = [];

for (let i = 0; i < numbers.length; i++) 
  doubled.push( numbers[i] * 2 );

console.log(doubled); 
// Output: [2, 4, 6, 8]


// Functional Iteration (Using map):

// Example: Doubling Array Elements with map
numbers = [1, 2, 3, 4];
doubled = numbers.map(num => num * 2);
console.log(doubled); 
// Output: [2, 4, 6, 8]


// 🐠 Filtering Data with filter
numbers = [1, 2, 3, 4, 5];

// filter takes an item and returns it if true:
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]


// Accumulating Results with reduce:
numbers = [1, 2, 3, 4];

// Reduce takes each item and builds up a single value (aka sum)
// First parameter is the accumulator, second is the item:
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 10


// 