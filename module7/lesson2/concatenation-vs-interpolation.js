//#region 
let firstName, lastName, fullName, age;
//#endregion

firstName = 'John';
lastName = 'Doe';

// 😼 Concatenation
fullName = firstName + ' ' + lastName;
console.log(fullName);


// The + Operator with Other Types
//#region 
let a, b;
//#endregion

a = 10; // Number 10
b = 20; // Number 20
console.log(a + b);


// 👀 JS concats strings and numbers as a string 😐
a = 10; // Number 10
b = " apples"; // String 
console.log(a + b);


// Concatenation
firstName = "John";
lastName = "Doe";
age = 30;
let message = firstName + " " + lastName + " is " + age + " years old.";
console.log(message); 

// Interpolation
firstName = "John";
lastName = "Doe";
age = 30;
fullName = `${firstName} ${lastName} is ${age} years old.`;
console.log(fullName);
