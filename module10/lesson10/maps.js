// 🗺️ Maps


// Creating a Map
const myMap = new Map();

// Set some new key values 
myMap.set('name', 'Alice');
myMap.set('age', 30);

console.log(myMap);
// Output: Map { 'name': 'Alice', 'age': 30 }


// Retrieving Values
console.log(myMap.get('name')); // Output: Alice


// 🔑 Checking Key Existence
console.log(myMap.has('age')); // Output: true
console.log(myMap.has('address')); // Output: false


// Deleting and Clearing Entries ❌
myMap.delete('age');
console.log(myMap); 
// Output: Map { 'name': 'Alice' }

myMap.clear();
console.log(myMap); // Output: Map {}


// WeakMap Example

// Create a new WeakMap 
const weakMap = new WeakMap();

// Create a new object
let obj = { id: 1 };

// We'll map our object to some metadata about it
weakMap.set(obj, 'Metadata');

// We can lookup the metadata by the object
console.log(weakMap.get(obj)); // Output: Metadata

// Uh-oh, we set the obj to null
// value will be cleaned up by the runtime automatically
obj = null; // The object is garbage-collected.

// This will remove the obj key from our WeakMap automatically
console.log(weakMap.get(obj)); // Output: undefined
