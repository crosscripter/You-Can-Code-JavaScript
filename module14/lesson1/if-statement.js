// ❓ if Statement


// Every Day Example:
let isRaining = true;

// If statement makes a different message
// log out depending on the value of isRaining:
if (isRaining) {
  console.log('Take an umbrella.');
} else {
  console.log('Wear sunglasses.');
}


// Syntax of the if Statement:
let temperature = 95;

// NOTE: Farenheit (sorry literally rest of the world!)
if (temperature > 80) {
  console.log("It's a hot day.");
}


// Optional else Branch:
let loggedIn = false;

if (loggedIn) {
  console.log('Welcome back!');
} else {
  console.log('Please log in.');
}


// Chaining with else if:
let score = 85;

if (score >= 90) {
  console.log('Excellent!');
} else if (score >= 75) {
  console.log('Good job!');
} else {
  console.log('Keep trying.');
}


// 🚣 Controlling Flow Based on User Input
// Demo time! flow-control.html


// Nested if Statements:
//#region 
let orderTotal, shippingAddress;
//#endregion

orderTotal = 75;
// orderTotal = 40;
// orderTotal = 75;

shippingAddress = 'USA';
// shippingAddress = 'CA';

// Main if to check order total
if (orderTotal >= 50) {
  // Nested if statement to check for country
  if (shippingAddress === 'USA') {
    console.log('You qualify for free shipping!');
  } else {
    console.log('Free shipping for U.S. only.');
  }
} else {
  console.log('Order must be >= $50 for free shipping.');
}


