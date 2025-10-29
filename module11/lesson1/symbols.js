// Symbols


// Avoiding Key Conflicts 

// Create two different symbols with the same value!
const LIBRARY_1_KEY = Symbol('key');
const LIBRARY_2_KEY = Symbol('key');

//#region 
let obj;
//#endregion

obj = {
  // Use expression key syntax to make symbols keys:
  [LIBRARY_1_KEY]: 'Library 1 Value',
  [LIBRARY_2_KEY]: 'Library 2 Value',
};

// Access the values by the symbol keys
console.log(obj[LIBRARY_1_KEY]); // 'Library 1 Value'
console.log(obj[LIBRARY_2_KEY]); // 'Library 2 Value'


// Creating Symbols

// Create a new Symbol
const userId = Symbol('user id');

const user = {
  name: 'Alice',
  [userId]: 12345,  // Symbol used as a key
};

console.log(user.name);  // 'Alice'

// Access value by symbol key using indexer!
console.log(user[userId]);  // 12345


// Customizing Object Descriptions with Symbol.toStringTag

// Without Symbol.toStringTag
obj = { }

// Logging out regular object we just get Object tag
console.log(obj); // [object Object]

const animal = {
  // We'll define a custom toString tag for logging
  [Symbol.toStringTag]: 'Animal'
};

// Log out our animal object with our symbol tag
console.log(animal.toString()); 
// [object Animal]


// 