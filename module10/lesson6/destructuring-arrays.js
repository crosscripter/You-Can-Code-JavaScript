// Destructuring Arrays


// Basic Destructuring Example

const fruits = ['apple', 'banana', 'orange'];
// equivalent to:
//  const first = fruits[0];
//  const second = fruits[1];
//  const third = fruits[2];

// Think of the variable's position as the index of the value:
//Index: 0         1         2
//    ['apple', 'banana', 'orange']
//       ⬇️       ⬇️        ⬇️
const [ first,   second,   third  ] = fruits;
console.log(first);  // 'apple'
console.log(second); // 'banana'
console.log(third);  // 'orange'


// Skipping Items During Destructuring
const colors = ['red', 'green', 'blue'];
const [ , green] = colors; // Skipping 'red'

// Alternatively, there's a convention to use underscore names
// _, __, ___ etc for missing places:
// const [ _, green] = colors;
// const [ _, __, blue] = colors
console.log(green); // 'green'


// Using Default Values in Destructuring
const numbers = [42];

// No second item, so b will be 0
const [ a, b=0 ] = numbers;
console.log(a); // 42
console.log(b); // 0 (default value for b)


// Using the Spread Operator with Destructuring 🔪
const animals = ['cat', 'dog', 'rabbit', 'hamster'];

// Destructure the first animal and collect the others into array
const [firstAnimal, ...otherAnimals] = animals;
console.log(firstAnimal);  // 'cat'
console.log(otherAnimals); // ['dog', 'rabbit', 'hamster']


// ↕️ Swapping Values with Destructuring
let x = 1, y = 2;

// ✨ This neat trick swaps the values of a and b!
[x, y] = [y, x];
console.log(x, y); // [2, 1]

// 🧓 Old way to swap variables before destructuring
x = 1;
y = 2;

let temp = x; // Store the value of `a` in `temp`
x = y;        // Assign the value of `b` to `a`
y = temp;     // Assign the original value of `a` (stored in `temp`) to `b`
console.log(x, y);


// Destructuring in Function Parameters
function arraySum([x, y]) {
    // We destructured x and y from our array parameter
    // it's like we have this line: let [x, y] = [10, 20]
    // So we can return our sum calculation now!
    return x + y; 
}

arraySum([10, 20]); // 30


// 