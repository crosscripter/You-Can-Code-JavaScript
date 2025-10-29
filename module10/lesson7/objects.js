// Objects


// What is an Object? 

// Declare a new car object with properties
// and a new method to start the car:
const car = {
    // Properties
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
 
    // Methods: (ie. a function property)    
    start() {
      console.log('Car started');
    }
};

console.log(car.brand); // 'Toyota'
car.start();            // => Car started


// How Are Objects Stored in Memory?

// Create a new object literal
let obj1 = { a: 1 };

// Assign to new variable
let obj2 = obj1;

// Modify new object
obj2.a = 2;

// 😱 Modified the original too!
console.log(obj1.a); // 2 (Both variables point to the same object)


// Creating Objects with Object Literals
let alice = {
  // Properties
  name: 'Alice',
  age: 25,

  // Here we have contactInfo that is	
  // a nested object itself with a phone property!
  contactInfo: { phone: '123-456-7890' },	

  // Methods
  greet() {	
      // We access the properties of this object using the keyword this
      console.log(`Hello, my name is ${this.name}`);
  }
};

// Call our greet method and print out our person's name!
alice.greet(); 
// Outputs: Hello, my name is Alice

console.log('Call Alice at', alice.contactInfo.phone)
// Outputs: Call Alice at 123-456-7890


// Accessing Properties and Methods

// Dot Notation
// Using the dot notation (ie. .name) is the most common:
console.log(alice.name); // 'Alice'

//#region 
let prop;
//#endregion

// Bracket Notation
// Our property key as a string
prop = 'age';
console.log(alice[prop]); // alice['age'] -> alice.age -> 25

// Our property with spaces in the name
prop = 'Full Name';

// We can set any string as a key too
alice['Full Name'] = 'Alice Smith';
console.log(alice[prop]); // alice['Full Name'] -> 'Alice Smith'


// Using Objects Like Arrays
const scores = { 1: 10, 2: 20 };
console.log(scores[1]); // 10


// Modifying Objects: Adding, Updating, and Deleting Properties
alice.job = 'Engineer'; // Add new property

// On Alice's birthday we set her new age!
alice.age = 26; // Update existing property
console.log(alice); // {name: 'Alice', age: 26, job: 'Engineer'}

// To remove a property, we can use the delete operator:
//#region
alice = { ...alice, job: 'programmer' }
//#endregion

console.log(alice.job); // programmer
delete alice.job;       // {name: 'Alice', age: 26} (no .job property)

// Non-existant properties return undefined
console.log(alice.job); 
// undefined (property deleted so its undefined again)


// Common Object Operations

// 🔑 Getting all keys or values:

// Get all keys as an array of strings
console.log(Object.keys(alice)); 
// ['name', 'age']

// Get all values as an array of values
console.log(Object.values(alice)); 
// ['Alice', 26]

// Get all key-value pairs as an array of arrays
console.log(Object.entries(alice)); 
// [ ['name', 'Alice'], ['age', 26], ... ]

// 🏠 Checking if a property exists:
// We can use the in operator to check for properties:
console.log('name' in alice); // true

// Merging objects:
obj1 = { a: 1 };
obj2 = { b: 2 };

// We spread keys a and b from obj1 and obj2 into a new merged object!
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2 }
console.log(merged);
