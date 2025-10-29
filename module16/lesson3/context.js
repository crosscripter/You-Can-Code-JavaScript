// 🐚 Context


// this Keyword:

let user = {
  name: 'Alice',
  greet() {
    console.log(`Hello, ${this.name}!`);
//                        ^~~~~
  }
};

user.greet();  // user is this
// Output: Hello, Alice!


// Context vs. Scope
// Arrow functions DROP the this context:

user = {
  name: 'Alice',
  //! NOTE: greet is an arrow function!
  greet: () => {
    console.log(`Hello, ${this.name}`); //! 💣 this is undefined
  }
};

user.greet(); // Output: Hello, undefined


// 😛 Changing this with .bind(), .call(), and .apply()

// .bind(): Creates a new function with the desired context 
// bound for later calling.
user = { name: 'Alice' };

// using this for dynamic binding
// we don't know what this will be
// but whatever calls greet must have a .name
function greet() {
  console.log(`Hello, ${this.name}`);
}

// Bind the user object as this to the greet function
const boundGreet = greet.bind(user);

// When calling it's like the function replaces this
// with user and calls user.name instead of this
boundGreet(); // Output: Hello, Alice

// .call(): Calls the function immediately with a specific context.
greet.call(user); // Output: Hello, Alice

// .apply(): Works like .call() but accepts arguments as an array.
greet.apply(user);  // Output: Hello, Alice


// 🏗️ Setting Context in Constructors and Classes
class Person {
  // this is used in the constructor (more on this later!)
  constructor(name) {
    this.name = name;
  }
  greet() { console.log(`Hello, ${this.name}`); }
}

const alice = new Person('Alice');
alice.greet(); // Output: Hello, Alice


// Using globalThis and Global Context
console.log(this === globalThis);  
// Output: true (in most non-strict environments)


// Practical Example of Mismanaged Context
user = {
  name: 'Alice',
  greet() {
    console.log(this.name);
  }
};

// Breaking context by reassignment!
const greetFunction = user.greet;
greetFunction(); 
// Output: undefined 😱 (this refers to the globalThis context!)
