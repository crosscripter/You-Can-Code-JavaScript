// 🐣 Instances


// 🆕 Creating Instances with the new Keyword
// To create an instance, we use the new keyword followed 
// by the class name. This triggers the class constructor, 
// which initializes the new object.

class Dog { 
  constructor(name) { this.name = name; } 
}

// Create a new instance of the Dog class
const myDog = new Dog('Buddy');

// Using a property from our object instance
console.log(myDog.name); // Output: Buddy


// 📑 Instances as References
// Instances are references to objects in memory. This means 
// that multiple variables can point to the same instance.

// 🚧 WARNING: anotherDog references the same instance in memory!
const anotherDog = myDog;
anotherDog.name = 'Max'; //❗Changing anotherDog changes the myDog instance too!
console.log(myDog.name); // Output: Max 😱


// Using instanceof to Check Types
// You can check the type of an instance using the instanceof 
// operator, which determines whether an object is an instance 
// of a particular class.

console.log(myDog instanceof Dog);                  // Output: true
console.log(myDog instanceof String);               // Output: false
console.log(new String('Buddy') instanceof String); // Output: true
