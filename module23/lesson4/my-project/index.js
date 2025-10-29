// Import the colors from chalk
const { red, green, blue, yellow, magenta, cyan } = require('chalk');

// Import lodash package for the shuffle function
const _ = require('lodash');
//   👆 is a common name for the lodash package by convention


// Define an array of chalk colors that we imported
const colors = [red, green, blue, yellow, magenta, cyan];

// Shuffle the colors randomly using lodash
const shuffledColors = _.shuffle(colors);

// Create a multicolored message
const message = 'Hello, World!';
let coloredMessage = '';

// Loop through the message characters
for (let i = 0; i < message.length; i++) {
  // Get next color and color each character
  const color = colors[i % colors.length];
  coloredMessage += color(message[i]);
}

// Print the multicolored message
console.log(coloredMessage);
