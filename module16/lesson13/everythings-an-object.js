// 😲 Everything's an Object!


//#region 
let obj;
//#endregion

// Inherited Object Methods

// toString()
// Converts an object to a string representation.
obj = { a: 1 };
console.log(obj.toString()); 
// Output: "[object Object]"


// valueOf()
// Returns the primitive value of an object.

const obj2 = new Number(42);
console.log(obj2.valueOf()); // Output: 42


// 🏠 hasOwnProperty(prop)
// Returns true if the object has the specified 
// property as its own (not inherited).

const obj3 = { a: 1 };
console.log(obj3.hasOwnProperty('a')); // Output: true


// isPrototypeOf()
// Checks if an object exists in another object's prototype chain.
// Don't worry we'll learn more about prototypes later on!

const parent = {};
const child = Object.create(parent);
console.log(parent.isPrototypeOf(child)); // Output: true


// propertyIsEnumerable(prop)
// Returns true if the specified property is enumerable. (ie. shows up in loops)

const obj4 = { a: 1 }
console.log(obj4.propertyIsEnumerable('a')); // Output: true



// Static Object Methods

// Object.keys() – Get an array of keys from an object.

obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); 
// Output: ['a', 'b']


// Object.values() – Get an array of values from an object.

console.log(Object.values(obj)); // Output: [1, 2]


// Object.entries() – Get an array of key-value pairs.

console.log(Object.entries(obj)); 
// Output: [['a', 1], ['b', 2]]


// Object.assign() – Copy properties from one object to another.

const target = { a: 1 };
const source = { b: 2 };

console.log(Object.assign(target, source));
// Output: { a: 1, b: 2 }

// 🧊 Object.freeze() 
// Makes an object immutable. Once frozen, no new properties can be added
// existing properties can’t be modified, and properties can't be removed.

obj = { name: "Alice", age: 25 };
Object.freeze(obj);

obj.age = 30;       // 👀 No effect, age remains 25
console.log(obj);

obj.city = "NY";    // 👀 Ignored, cannot add new properties
console.log(obj);


// 🦭 Object.seal()
// Object.seal() prevents adding or removing properties, 
// but allows modifying existing properties.

const user = { username: "coder123", active: true };
Object.seal(user);

user.active = false;  // Allowed
console.log(user);

// 👀 Ignored, cannot add new properties
user.email = "test@example.com";  
console.log(user);
// Output: { username: 'coder123', active: false }

// Key Difference:
// freeze(): No modifications allowed at all.
// seal(): Modifications allowed only to existing properties but no additions or deletions.
