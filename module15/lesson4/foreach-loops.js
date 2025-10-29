// ⭕ Looping with .forEach()


// Basic Syntax 
const fruits = ['apple', 'banana', 'cherry'];

// Do not worry about how this is working
// (it's a lambda function) but we'll cover those later on
// just for now know that  we get the item and the index
// as parameters and everything after the => and between
// the braces are the body of the "loop":

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// 0: apple
// 1: banana
// 2: cherry


