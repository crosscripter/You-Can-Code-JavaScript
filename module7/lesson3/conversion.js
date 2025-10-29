//#region 
let value, isTrue;
//#endregion

// Converting TO Boolean

// Using the Boolean() function:
value = 1;
isTrue = Boolean(value); // true
console.log(isTrue);

// Using !! (double negation):
value = "Hello";
isTrue = !!value; 
console.log(isTrue);


// Converting FROM Boolean

// Convert to a String:
isTrue = true;
let str = String(isTrue); // 'true' as a String
console.log(str); 

// Convert to a Number:
isTrue = true;
let num = Number(isTrue); // 1 as a Number
console.log(num);
