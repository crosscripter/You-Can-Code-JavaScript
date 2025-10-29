// *️⃣ Parameters


// Function Parameters:

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Alice'); // Output: Hello, Alice


// Optional Parameters and Default Values:

function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet();      // Output: Hello, Guest!
greet('Bob'); // Output: Hello, Bob!


// 🧈 The Spread Parameter (...)

function sum(...numbers) {
  // numbers is equal to all args as an array
  // in the call below that is [1, 2, 3, 4]
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Here we can pass any number of args to the sum function!
console.log(sum(1, 2, 3, 4)); // Output: 10


// Destructuring Parameters

// Destructuring Object Parameters
function printUser({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}

printUser({ name: 'Alice', age: 30 });
// Output: Alice is 30 years old.


// Destructuring Array Parameters 
function printCoordinates([x, y]) {
  // Like having the following line at the top of the function:
  // let [x, y] = [1, 2]
  console.log(`(${x}, ${y})`);
}

printCoordinates([1, 2]);
// Output: (1, 2)


// Passing Arguments:
function printArgs() {
  console.log([...arguments]); 
}

printArgs(1, 2, 3); // Output: [1, 2, 3]


// By Value vs. By Reference

// Function will modify arr and the original array passed in
// because it is passed by reference and is the same array
// in memory!
function modifyArray(arr) {
  arr.push(4);
}

const myArray = [1, 2, 3];
modifyArray(myArray);
console.log(myArray); 
// Output: [1, 2, 3, 4] 😱
