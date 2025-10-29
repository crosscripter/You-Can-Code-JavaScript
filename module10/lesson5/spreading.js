// Spreading


// Spreading Values into Arrays
let fruits = ['apple', 'banana'];
let veggies = ['carrot', 'spinach'];

// Same as us writing: [].concat(fruits).concat(veggies)
// OR [ 'apple', 'banana', 'carrot', 'spinach']
let groceries = [ ...fruits, ...veggies ]; // Spread arrays into a new array
console.log(groceries); 
// ['apple', 'banana', 'carrot', 'spinach']


// Copying Arrays with Spread
let original = [1, 2, 3];

// We effectively copy all the items from the original array
// into a brand new COPY of the array, so we can modify without
// affecting the original
let copy = [ ...original ];

copy.push(4);	          // Modify copy
console.log(original); // [1, 2, 3] (Unmodified)
console.log(copy);     // [1, 2, 3, 4] (Modified with 4)


// 🍞 Modifying Arrays Without Spread
let array1 = [5, 6, 7];
 
//            ___MEMORY_______________
// array1 --> | 0xDeadBeef : 5 | 6 | 7 |
//            —-----------------------
//            ^
//            |
// array2 —---+
let array2 = array1; // Both reference the same array in memory!

// Modify array 2 BUT...
array2.push(8);

// ...BOTH arrays are modified! 😱
console.log(array1); // [5, 6, 7, 8]
console.log(array2); // [5, 6, 7, 8]


// Passing Array Elements as Arguments
let numbers = [1, 2, 3];

// Math.max is another built-in function
// it works by taking multiple arguments
// and returns the one that is the maximum value!

// By spreading the arguments we can pass our array
// as individual parameters! Both these lines are
// the same!
console.log(Math.max(1, 2, 3)); // 3

// We can pass all the elements of the array as args using ...
console.log(Math.max(...numbers)); // Math.max(1, 2, 3) -> 3
