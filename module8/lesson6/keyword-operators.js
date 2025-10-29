/* Keyword Operators
============================================================================
Operator    Example Code                Result 
typeof      typeof "Hello"              "string"
instanceof  [] instanceof Array         true         
in          "length" in [1, 2, 3]       true
delete      delete myObject.property    { } (myObject without the property)
new         let myArray = new Array()   [ ] (new instance of Array)
============================================================================
*/

// typeof 
// Returns the type of the variable as a string, e.g., "string" for a text.
console.log(typeof "Hello");
console.log(typeof 42);

// instanceof 
// Checks if the object is an instance of the specified constructor 
console.log([] instanceof Array);

// in 
// Checks if a property exists in an object or array 
console.log("length" in [1, 2, 3]);

// delete
// Deletes a property from an object. If the property does not exist, it does nothing.
const myObject  = { property: '*exists*' };
console.log(delete myObject.property, myObject); // myObject = { }

// new
// Creates a new instance of an object from a Constructor 
let myArray = new Array();
console.log(myArray); // myArray = []
