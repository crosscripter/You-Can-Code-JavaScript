// 🥚 What is a Prototype?

// A prototype is an object from which other objects 
// inherit properties. When you try to access a property 
// of an object, JS first checks the object itself. If the 
// property isn’t found, it looks up the prototype chain until 
// it finds the property or reaches the end of the chain (null).

// You can view an object’s prototype using Object.getPrototypeOf():

const obj = { name: 'John' };
const proto = Object.getPrototypeOf(obj);
console.log(proto); // Output: {} (aka. Object)


// Class Inheritance

// Base class: Animal
class Speaker {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} makes a noise.`); }
}

// Derived class: Cat 
class Cat extends Speaker {
  // Overrides Speaker.speak
  speak() { console.log(`${this.name} meows.`); }
}

// Creating an instance of Cat 
let cat = new Cat('Rina');
cat.speak(); // Output: Rina meows. (ie. Calls Cat.speak() )


// Prototypal Inheritance Equivalent

// Base constructor function: Animal
// Yep a function can act like a constructor
// we call them constructor functions unsurprisingly:
function Animal(name) { 
  this.name = name; 
}

// Adding a method to Animal's prototype
// This is how we must add new methods in this style:
Animal.prototype.speak = function () { 
  console.log(`${this.name} makes a noise.`); 
};


// Derived constructor function: Dog
// NOTE: NOT class Dog but function Dog
// Here we are assigning properties to what's called a
// the function scope via a closure. This is how code
// used to be written before☕JavaScript got classes!
// Remember, class Dog extends Animal is just a much
// simpler syntactic sugar for doing something very
// similar to the following 😱:
function Dog(name) {
  // Call the Animal constructor function with 'this'
  Animal.call(this, name);
}

// Setting up inheritance from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Overriding the speak method for Dog
Dog.prototype.speak = function () { 
  console.log(`${this.name} barks.`); 
};

// Creating an instance of Dog from the Constructor function
dog = new Dog('Rex');

dog.speak(); // Output: Rex barks.
/*   👆 We have access to the speak() method of the Animal proto!
Dog doesn't actually have it but JS follows the prototype chain:

  dog.speak();
    vvv
   Dog{ } —-prototype-chain—-> Animal{ speak() }
   👆👀 speak()? No? follow proto ⛓️ 👀👆 speak()? ✅ Ok call it!

 When it see Dog does not have speak() defined it follows to
 Dog's prototype (ie. Animal) and asks if speak() is defined
 it is so we call it... this is the power of prototypes! We
 can "inherit" functionality from any object in the chain! 
*/


// 🪡 Extending the String Prototype
// You can extend the String prototype to add custom 
// methods that enhance string functionality. Here’s an 
// example of adding a method called capitalize() to 
// capitalize the first letter of a string:

// Adding a method to the String prototype
// to capitalize strings.  By adding this to
// the prototype ALL strings now can call .capitalize()!

String.prototype.capitalize = function () {
  // Inside of prototype functions this refers to the current string value!
  if (this.length === 0) return '';

  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Usage
const str = 'hello world';
console.log(str.capitalize()); // Output: "Hello world" (capital H)
