// JSON (JavaScript Object Notation) Data Format


// Import our data in JSON format using require():
const data = require("./data.json");
/*
{
  "name": "Bob Smith",
  "age": 52,
  "isStudent": false,
  "courses": ["Math", "Science"],
  "address": {
    "street": "123 Main St",
    "city": "New York"
  }
}
*/

// Now we can access the data values in the format easily in JS and other technologies!
console.log(data.address.street);
// outputs: 123 Main St

console.log(`${data.name} (${data.age})`);
// outputs: John Doe (30)


// We can even manipulate and change it when in JS!
data.courses.push('English');
console.log(data.courses.join(', '));
// Outputs: Math, Science, English 


// We can use JSON.stringify to get a string representation of it:
console.log(JSON.stringify(data));
// Outputs: '{"name":"John Doe","age":30,"isStudent":false,"courses":["Math","Science","English"],"address":{"street":"123 Main St","city":"A...'


// And we can parse strings in JSON data format into real life JS objects using JSON.parse():
const bobData = '{"name": "Bob", "age": 52}';
let bob = JSON.parse(bobData);
console.log(`${bob.name} (${bob.age})`);
// Outputs: Bob (52)

