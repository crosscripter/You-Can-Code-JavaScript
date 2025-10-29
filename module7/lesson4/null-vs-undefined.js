// null vs undefined

// undefined is used by JavaScript automatically 
// to indicate that a variable has been declared 
// but has not been assigned a value:

let x; // Value is implicitly set to undefined
console.log(x);

// null is assigned intentionally by the programmer 
// to say, "This variable has no value right now, 
// and on purpose.":

let y = null; // Here programmer sets y to null intentionally
console.log(y); 


// ✔️ Good Uses of null

// Initial state for variables that will hold objects or data later.
let data = null; // Data is not available yet

// Clearing values to release resources
let user = { /*...*/ }; // some complex value
user = null; // Clears object and makes eligible for garbage collector 🚛

// Representing empty or invalid results:
function findUser(userId) {
  if (userId !== 123) {
    return null; // User not found, return null to show that
  }
  return { /*...*/ }; // some user
}


// ✖️ Bad Uses of null

// undefined for Uninitialized Variables:
x;
console.log(x); 

// null for Intentional Empty Value:
data = null; // This is empty by choice we expect to fill it later
console.log(data);


// Difference in Functions:
// When arguments are not passed an explicit value, 
// they are by default passed as undefined

function doSomething(value) {
  if (value === null) {
    console.log(value, "means intentionally empty.");
  } else if (value === undefined) {
    console.log(value, "means not provided.");
  }
}

doSomething(null);
doSomething(); 
