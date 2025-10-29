
console.log(x); // 🤯 Works fine (even though we defined x AFTER!)
var x = "I'm defined here";


/* Hoisting makes it like it's written:

var x;
console.log(x);
x = "I'm defined here";

*/


// let and const respect block scope:
if (true) {
    let y = "I'm defined only in the block";
}

console.log(y);
