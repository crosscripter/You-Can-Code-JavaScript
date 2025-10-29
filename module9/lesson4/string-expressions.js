// String Expressions


// String Concatentation

// Combining strings to form a full name
const firstName = "John";
const lastName = "Doe";

// String expression: Concatenation
const fullName = firstName + " " + lastName;
console.log(`Full Name: ${fullName}`);
// Output: Full Name: John Doe


// String Interpolation with Template Literals

// Using template literals to create a personalized message
const userName = "Alice";
const itemCount = 5;

// String expression: Template literal
const message = `${userName}, you have ${itemCount} items in your cart.`;
console.log(message);
// Output: Alice, you have 5 items in your cart.


// Manipulating Strings

// Extracting and transforming parts of a string
const sentence = "Hello, World!";

// String expression: Uppercasing and slicing
const greeting = sentence.slice(0, 5).toUpperCase();
console.log(`Greeting: ${greeting}`);
// Output: Greeting: HELLO
