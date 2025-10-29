
// Positive and Negative Numbers
let age = 30;      // Positive integer
let balance = -15; // Negative integer


// Imprecison of Floats
//#region 
let result;
//#endregion

result = 0.1 + 0.2;
console.log(result);

// toFixed()
result = (0.1 + 0.2).toFixed(1);
console.log(result);


/* Special Numbers */

// Infinities
console.log(1 / 0); 
console.log(-1 / 0); 

// NaN (Not a Number)
console.log("hello" / 2); 

// NaN is toxic:
result = NaN + 5;
console.log(result);
