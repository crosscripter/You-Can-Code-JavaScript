// 10% Tax
const TAX_RATE = 0.1;

// Magically we read from our prices.txt file as a string
const priceText = '19.99';

// Convert our string to a number using parseFloat
// changes a string number like "19.99" into its value 19.99
const price = parseFloat(priceText);

// Calculate the total price with tax now that price is a Number
const totalPrice = price + price * TAX_RATE;

// Print out the total price as a string again using toFixed()
// toFixed(2) means show 2 numbers behind the . of the price
console.log('Total Price with Tax $' + totalPrice.toFixed(2));
