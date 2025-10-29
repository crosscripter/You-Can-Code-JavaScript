// 📓 JSON: JavaScript Object Notation


// 🏛️ Structure and Usage
// JSON uses key-value pairs similar to☕JavaScript objects but with strict formatting rules:

// NOTE: Keys and strings must be enclosed in double quotes.
//
// Supports MOST but NOT ALL JS types: 
//  - String 
//  - Number 
//  - Boolean
//  - Array
//  - Object
//  - null


//#region 
let user;
//#endregion

// Example JSON object:
user = {
  "name": "Alice",
  "age": 25,
  "isStudent": false,
  "courses": ["Math", "Science"]
}

// Using the JSON data
console.log(user);

// Dot or Bracket notation: 
console.log(user.name);
console.log(user["name"]);

// Values are JS types so we can operate and call methods on the data directly!
console.log(user.courses.join(' and '));


// JSON Methods

// JSON.stringify() – Convert an object to a JSON string.
// NOTE: The process of converting data to a string is called "serialization"

user = { name: "Alice", age: 25 };
console.log(JSON.stringify(user));
// Output (JSON format): '{"name":"Alice","age":25}'


// JSON.parse() – Convert a JSON string to an object.
// NOTE: The process of converting string to in memory objects is called "deserialization"

const jsonString = '{"name":"Alice","age":25}';
user = JSON.parse(jsonString); 
console.log(user);

// Fun Fact: If you have data in a .json file you can import it directly into NodeJS
const enrollment = require("./enrollment.json");

// And use it directly like a normal object in JS!
// Here we'll pull out the students array and loop over them printing out their name, age and course list:
enrollment.students.forEach(student => {
  const courseList = student.courses.join(', ');
  console.log(`${student.name} (${student.age}) is taking ${courseList}`);
})

// Outputs:
// Alice (25) is taking Math and Science
// Allen (19) is taking Math and Biology
