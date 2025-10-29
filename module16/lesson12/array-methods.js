// 🎲 Array Methods


//#region 
let arr, index;
//#endregion

// push()
// Adds one or more elements to the end of an array.
arr = [1, 2, 3];
arr.push(4);  // [1, 2, 3, 4]
console.log(arr);


// pop()
// Removes and returns the last element from the array.

arr = [1, 2, 3];
let last = arr.pop();  // last = 3, arr = [1, 2]
console.log(last);
console.log(arr);

// 3. shift()
// Removes and returns the first element from the array.

arr = [1, 2, 3];
let first = arr.shift();  // first = 1, arr = [2, 3]
console.log(first);
console.log(arr);

// unshift()
// Adds elements to the beginning of the array.

arr = [2, 3];
arr.unshift(1);  // [1, 2, 3]
console.log(arr);

// 😸 concat()
// Merges two or more arrays and returns a new array.

let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);  // [1, 2, 3, 4]
console.log(combined);


// slice()
// Returns a shallow copy of a portion of an array.

arr = [1, 2, 3, 4];
let sliced = arr.slice(1, 3);  // [2, 3]
console.log(sliced);
console.log(arr);
// [ 1, 2, 3, 4, ]
//   0 |1  2 |3 


// splice()
// Removes, replaces, or inserts elements in the array.

arr = [1, 2, 3, 4];
arr.splice(1, 2, "a", "b");  // arr = [1, 'a', 'b', 4]
console.log(arr);
// [ 1, 2, 3, 4, ]
//   0 |1  2 |3
//      1  2 items


// indexOf()
// Finds the first occurrence of an element.

arr = [1, 2, 3, 2];
index = arr.indexOf(2);  // 1
console.log(index);
// [ 1, 2, 3, 4, ]
//   0  1  2  3


// includes()
// Checks if an element is present in the array.

arr = [1, 2, 3];
let hasTwo = arr.includes(2);  // true
console.log(hasTwo);

// forEach()
// Executes a function on each element of the array.

[1, 2, 3].forEach(num => {
    console.log(num)
});
// Output: 1 2 3


// 📍 map()
// Creates a new array by transforming each element.

let doubled = [1, 2, 3].map(num => num * 2);  
console.log(doubled);
// [2, 4, 6]
// 1 * 2 <- [2, 3], [2] 2 * 2 <- [3], [2, 4] 3 * 2 <- [] => [2, 4, 6]


// filter()
// Creates a new array with elements that pass a test.

let evens = [1, 2, 3, 4].filter(num => num % 2 === 0);  
console.log(evens);
// [2, 4]
// 1 % 2 == 0 <- [, 2, 3, 4], [] 2 % 2 == 0 <- [3, 4], [2] 3 <- [4,] etc.


// reduce()
// Reduces the array to a single value.

let sum = [1, 2, 3].reduce((acc, num) => acc + num, 0);  
console.log(sum);
// 0 + 1 <- [, 2, 3], 1 + 2 <- [, 3], 3 + 3 [] => 6


// find()
// Returns the first element that matches a condition.

let found = [1, 2, 3].find(num => num > 1);  
console.log(found); // 2
// 1 > 1 <- [2, 3], 2 > 1 <- [3] => 2


// findIndex()
// Returns the index of the first matching element.

index = [1, 2, 3].findIndex(num => num > 1);  
console.log(index); // 1
// 1 > 1 [0] <- [2, 3], 2 > 1 [1] <- [3] => 1


// sort()
// Sorts the elements of an array in place.

arr = [3, 1, 2];
const x = arr.sort();  // [1, 2, 3]
console.log(x);
console.log(arr); 
// NOTE: arr is modified too!


// ◀ reverse()
// Reverses the order of elements in the array in place.

arr = [1, 2, 3];
const rev = arr.reverse();  // [3, 2, 1]
console.log(rev);
console.log(arr); 
// NOTE: arr is modified too!

// join()
// Joins all elements into a string.

arr = ["Hello", "World"];
let str = arr.join(" ");  // "Hello World"
console.log(str);

// every()
// Tests if all elements meet a condition.

let allEven = [2, 4, 6].every(num => num % 2 === 0);  // true
console.log(allEven);

// some()
// Tests if at least one element meets a condition.

let hasOdd = [1, 2, 3].some(num => num % 2 !== 0);  // true
console.log(hasOdd);
