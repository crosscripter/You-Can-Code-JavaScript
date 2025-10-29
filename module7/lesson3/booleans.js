// 👻 Booleans
//#region 
let isLoggedIn;
//#endregion

isLoggedIn = true;

if (isLoggedIn) {
  console.log('Welcome back!');
} else {
  console.log('Please log in.');
}


//❗Logical Negation (! Operator)
let isTrue = true;
let isFalse = !isTrue; // Negation
console.log(isFalse); 


// Checking if something is NOT true
isLoggedIn = false;

if (!isLoggedIn) 
  console.log('Please log in.');


// Combining Booleans with && and ||

// && (both conditions are true)
let isAdult = true;
let hasID = false;

if (isAdult && hasID) {
  console.log("You can enter.");
} else {
  console.log("Access denied.");
}

// || (one or the other condition is true)
let hasTicket = true;
let isVIP = false;

if (hasTicket || isVIP) {
  console.log('You can enter.');
} else {
  console.log('Access denied.');
}
