// Zero Indexing


// Zero Indexing

// Indices:   0      1        2
let colors = ['red', 'green', 'blue'];
// Elements:  1      2        3

console.log(colors[0]);   // Outputs: 'red' (index 0, element #1)
console.log(colors[1]);   // Outputs: 'green' (index 1, element #2)
console.log(colors[2]);   // Outputs: 'blue' (index 2, element #3)
console.log(colors[999]); // Outputs: undefined (index 999, 1000th element)


//! 🕳️ Common Pitfalls of Zero-Indexing
// When working with loops or array manipulations, 
// it’s easy to forget that counting starts at zero, 
// even for some pros from time to time! 

let animals = ['cat', 'dog', 'bird'];

//! 🐞 Bug: Out-of-bound access on the last iteration
for (let i = 1; i <= animals.length; i++) {
  console.log(animals[i]); 
}

// Outputs:
// dog
// bird
// undefined


// ✅ Corrected Code:
//  Fix: Adjust index and condition to properly 
// iterate thru the array starting at 0:

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]); 
}

// Outputs:
// cat
// dog
// bird
