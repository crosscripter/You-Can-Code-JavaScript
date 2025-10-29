// 📍 Array.map()


// ⏹️ Squares Map Example
const numbers = [1, 2, 3];

// Here we are returning an expression for each item
// this is why we are using .map() because we want all
// new items as an array as a result to use later:

const doubled = numbers.map(num => num * 2);
console.log(doubled);
// Outputs: [2, 4, 6] (ie. 1 * 2, 2 * 2, 3 * 2)

// Including the Index
const names = ['Alice', 'Bob', 'Charlie'];

// Create a new array of greetings from names!
// NOTE: index can be added with a second parameter:

const greetings = names.map((name, index) => `Hello ${name}, you're #${index + 1}!`);

console.log(greetings);

// Outputs:
// [
//  "Hello Alice, you're #1!",
//  "Hello Bob, you're #2!",
//  "Hello Charlie, you're #3!"
// ]
