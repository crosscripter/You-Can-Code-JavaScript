// 🕹️ Function Calls


// 🕺 Breaking Down a Function Call

// Function Name:
console.log("Hello, World!");
//      ^~~ 

// Argument List:
console.log('Hello, World!');
//          ^~~~~~~~~~~~~~~


// Method Calls
const person = {
  name: "Alice",

  // Method
  greet: function() {
    console.log("Hello, " + this.name);
    //                      ^~~~~
  }
};

person.greet(); // Calls the greet method
//    ^~~~~~
// output: "Hello, Alice"

