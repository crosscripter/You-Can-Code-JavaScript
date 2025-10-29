// ♠️♦️♥️♣️ Sets 


// 🏋️Creating and Using Sets 
const mySet = new Set();

// Add values into a set
mySet.add(1); // { 1 }
mySet.add(2); // { 1, 2 }
mySet.add(1); // { 1, 2 } (Duplicate value not inserted)

console.log(mySet); 
// Output: Set { 0: 1, 1: 2 }


//#region 
let uniqueNumbers;
//#endregion

// Initialize a Set with Values
// set with duplicate items (ie. 2)
uniqueNumbers = new Set([1, 2, 3, 2, 4]);

// Set only contains one 2, even though our array contained two!
// Sets will filter out initial input only to the unique items.
console.log(uniqueNumbers); 
// Output: Set { 0: 1, 1: 2, 2: 3, 3: 4 }


// Checking Size of a Set 📏
const set = new Set([1, 2, 3]);
console.log(set.size); // 3 (not .length but .size)

// Checking for a Value
console.log(set.has(2)); // Output: true
console.log(set.has(5)); // Output: false

// Deleting a Value ❌
set.delete(2);
console.log(set); 
// Output: Set { 0: 1, 1: 3 }

// Clearing the Set
set.clear();
console.log(set); // Output: Set {}


// Removing Duplicates from an Array
const numbers = [1, 2, 3, 2, 4, 1, 5];

// This is a bit advanced, but you got this!
// we are essentially doing the equivalent of this:
//
//   const tempSet = new Set(numbers);
//   const uniqueNumbers = [...tempSet]
//
uniqueNumbers = [ ...new Set(numbers) ];
console.log(uniqueNumbers); 
// Output: [1, 2, 3, 4, 5]
