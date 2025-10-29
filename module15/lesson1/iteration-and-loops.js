// 🎡 Iteration and Loops


// Manual Counting vs Loop

// Countdown!
console.log(10);
console.log(9);
console.log(8);
console.log(7);
console.log(6);
console.log(5);
console.log(4);
console.log(3);
console.log(2);
console.log(1);

// Fun experiment:
// I'm too lazy to type out all that so
// let's us JS to write the code we would
// have to write by hand! I wrote it in 
// minified format if you're curious take a look!
// Otherwise just know that the #region generates
// 100 console logs code which is what we would have to 
// write manually without loops! THE POWER OF CODE!

//#region 
let js = '';
for (let i = 100; i >= 1; i--) js += `console.log(${i});\n`; 
console.log(js);
//#endregion


// Using a Loop!
// Instead of writing the logs by hand, we can use a loop:

for (let i = 100; i > 0; i--) {
  console.log(i); 
}

// Outputs: 100, 99, 98 ... 1


// 