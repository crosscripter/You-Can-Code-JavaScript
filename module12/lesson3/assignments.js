// 🟰 Assignments


// Types of Assignment Statements

// Basic Assignment
let age = 30;       // Assigns the value 30 to the variable age
const PI = 3.14;    // Remember const declares constants


// Multiple declarations: 
let x = 1, y = 2, z = 3; // Assigns all values at once

// This alignment and format is common for this style.
let a = 1,
    b = 2,
    c = 3;


// Self-Assignment: 
let score = 10;
score += 5; // Now score is 15


// Destructured Assignment: 
// This allows you to unpack values from arrays or properties 
// from objects into distinct variables:

const coordinates = [10, 20];
//                   ^a  ^b
let [first, last] = coordinates; 
// first is 10, last is 20
