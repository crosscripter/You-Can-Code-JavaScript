// Object Expressions


// Creating Objects with Object Literals 

// Object expression to define a car object
const car = {
  make: "Toyota",      // Property: key-value pair
  model: "Corolla",
  year: 2021,
  start: function () { // Method: function inside an object
    console.log("The car is starting...");
  }
};

// Accessing properties and methods
console.log(car.make);   // "Toyota"
console.log(car.year);   // 2021
car.start();             // "The car is starting..."


// Dynamic Property Keys in Objects

// Creating dynamic keys using variables
const key = "price";

const product = {
  name: "Laptop",
  [key]: 1200, // Dynamic property key
  details() {
    console.log(`The ${this.name} costs $${this.price}.`);
  }
};

// Accessing dynamic properties
console.log(product["price"]); // 1200
product.details();             // "The Laptop costs $1200."


// Nested Objects and Object Shortcuts
const firstName = "Jane";
const lastName = "Doe";

// Object with shorthand property names and nested objects
const user = {
  firstName,       // Shorthand for firstName: firstName
  lastName,
  address: {       // Nested object
    city: "New York",
    zip: "10001"
  },
  greet() {        // Shorthand method syntax
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
  }
};

// Accessing nested properties and methods
console.log(user.address.city); // "New York"
user.greet();                  // "Hello, Jane Doe!"
