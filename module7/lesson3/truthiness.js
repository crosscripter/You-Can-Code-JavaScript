// 🤞 Truthiness 

// ❎ Falsy Values:
// The following values are considered falsy in☕JavaScript:
false
0
""        // (empty string)
null
undefined
NaN       // (Not-a-Number)

// Falsy Example
let value = 0;

if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}


// ✅ Truthy Values:
// Any value that is not falsy is considered truthy. 
// This includes:

1       // Non-zero numbers 
-100
"hello" // Non-empty strings 
{ }     // Objects
[ ]     // Arrays


// Truthy Example
let name = "Alice";

if (name) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
