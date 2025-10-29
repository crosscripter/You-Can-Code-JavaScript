// Array Operations


// Array Operations Example:
//#region 
let fruits;
//#endregion

// indices:   0        1         2
fruits = ['apple', 'banana', 'orange'];

// Set item at index 1 to new fruit!
fruits[1] = 'blueberry';
console.log(fruits); // ['apple', 'blueberry', 'orange']


// Sorting Items in an Array

// Alphabetical sort
let colors = ['red', 'green', 'blue'];

// Sort colors array (in place)
colors.sort();
console.log(colors); 
// ['blue', 'green', 'red'] (Alphabetic ordering)

// Numeric sort with compare function
// Don't worry about the details on HOW this works
// just know for now when sort() gets a - b it means 
// sort in ascending order:
let numbers = [10, 1, 25, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 3, 10, 25] (ascending order)


// Joining Items into a String
let names = ['John', 'Jane', 'Bob'];
let result = names.join(', '); // Join each element with ", "
console.log(result); // "John, Jane, Bob" as a String


// Slicing and Splicing Arrays

// Slice: Extracts elements without modifying original
fruits = ['apple', 'blueberry', 'orange'];

// From index 1 to 2 (but NOT including 3)
let sliced = fruits.slice(1, 3);
//  0        1            2         3  
// ["apple", "blueberry", "orange", ...]
// Slice:  1[   ⬇️           ⬇️    ]3
console.log(sliced); // ['blueberry', 'orange']

// Original array unmodified
console.log(fruits); // ['apple', 'blueberry', 'orange']

// Splice: Modifies the original array
fruits.splice(1, 1, 'grapefruit'); // Replaces 1 item at index 1
//  0        1             2         3  
// ["apple", "blueberry",  "orange", ...]
//             ⬆️ Item 1
// Splice: 1[ "grapefruit" ]

// Replaced "blueberry" (index 1) with 1 item "grapefruit"
console.log(fruits); // ['apple', 'grapefruit', 'orange']


// Looping Through Arrays

// Loop over each item in fruits and console.log them out!
fruits.forEach(fruit => 
  console.log(fruit)
);

// Outputs:
// apple
// grapefruit
// orange


// 🦮 5. Finding Elements in an Array

// using .indexOf to check if 'apple' exists
console.log(fruits.indexOf('apple')); // 0 (found at index 0)

// .includes() to check for 'grapefruit' in the array
console.log(fruits.includes('grapefruit')); // true

// .find() Finds first element starting with 'o'
let found = fruits.find(fruit => fruit.startsWith('o'));
console.log(found); // 'orange'


// 🦁 6. Concatenating Arrays
let vegetables = ['carrot', 'broccoli'];
let food = fruits.concat(vegetables);
console.log(food); 
// ['apple', 'grapefruit', 'orange', 'carrot', 'broccoli']


//🧹 7. Empty Arrays and Deleting Elements

// Method 1: Assigning a new empty array
fruits = [];
console.log(fruits); // []

// Method 2: Setting length to 0
fruits = ['apple', 'banana'];
fruits.length = 0; // Clear array by setting length to 0
console.log(fruits); // []

// Method 3: Use delete keyword
// Remove specific elements without affecting the structure:
let nums = [1, 2, 3];
delete nums[1]; // Delete element at index 1
console.log(nums); // [1, undefined, 3]
