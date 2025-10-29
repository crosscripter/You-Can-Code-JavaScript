// Working with Arrays

//#region 
let fruits;
//#endregion

// Getting the Length of an Array
// Items:     1        2         3
fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length); // Outputs: 3


// 🛒 2. Adding Items to an Array 
fruits = ['apple', 'banana', 'orange'];

// .push() Adds to the end of the Array:
fruits.push('grape'); // [..., grape]
console.log(fruits); // ['apple', 'banana', 'orange', 'grape']

// Add to the beginning
fruits.unshift('mango'); // ['mango', ...]

// shift (off):   [ <- 'mango', 'apple', 'banana', 'orange']
// un-shift (on): ['mango' -> , 'apple', 'banana', 'orange']
console.log(fruits); // ['mango', 'apple', 'banana', 'orange', 'grape']


// 🗑️ 3. Removing Items from an Array

// .pop() Removes from the end and returns the item
let lastFruit = fruits.pop(); // [..., 'grape' -> ]
console.log(lastFruit); // grape
console.log(fruits); // ['mango', 'apple', 'banana', 'orange']

// .shift() Removes from the beginning
// shift (off):   [ <- 'mango', 'apple', 'banana', 'orange']
let firstFruit = fruits.shift();
// NOTE: We can keep the shifted item's value in a variable
console.log(firstFruit); // "mango"

// And our array's items will now be "shifted" by one missing item
console.log(fruits); // ['apple', 'banana', 'orange']


// 4. Accessing Items in an Array
firstFruit = fruits[0]; // 🤔 wait 0?!
console.log(firstFruit);
