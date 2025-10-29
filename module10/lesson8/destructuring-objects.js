// Destructuring Objects


// Basic Destructuring Objects
//#region 
let alice;
//#endregion

alice = { name: 'Alice', age: 25, job: 'Engineer' };


// Destructure name and age from alice object
const { name, age } = alice;
console.log(name); // 'Alice'
console.log(age);  // 25


// Using Default Values and Aliases
alice = { name: 'Alice', job: 'Engineer' };
const { name: firstName, age: currentAge = 30, job: occupation } = alice;

console.log(currentAge);        // 30 (default value)
console.log(occupation); // 'Engineer' (renamed from `job`)


// Destructuring with Dynamic (Expression) Keys
const key = 'age';
alice = { name: 'Alice', age: 25 };

// Use expression key and give a new name
const { [key]: alicesAge } = alice; // ie. const { ['age']: alicesAge } = alice
console.log(alicesAge); // 25


// Function Parameter Destructuring
function greet({ name, job }) {
  console.log(`Hello, I'm ${name}, and I work as a ${job}.`);
}

const person = { name: 'Alice', age: 25, job: 'Engineer' };
greet(person); // 'Hello, I'm Alice, and I work as an Engineer.'


// Nested Destructuring
const employee = {
    name: 'Bob',
    address: { 
        city: 'New York', 
        zip: 10001 
    }
};

const { address: { city, zip } } = employee;
console.log(city); // 'New York'
console.log(zip);  // 10001


// 🚻 Destructuring with the Rest Operator
alice = { name: 'Alice', age: 25, job: 'Engineer' };


// Destructuring the rest of the props into an object
const { name: herName, ...rest } = person;

console.log(herName); // 'Alice'
console.log(rest); // { age: 25, job: 'Engineer' }
