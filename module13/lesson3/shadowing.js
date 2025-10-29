// 👤 Shadowing


// Shadowing Example:

/// Global Scope Starts ///

// Declare a new global scoped variable
let shadowedVar = "I am global!";

/// Function Scope Starts ///
function shadowFunction() {
    // We just shadowed our global variable of the same name!	
    let shadowedVar = "I am local!";					
    console.log(shadowedVar); // Outputs: I am local!			
}
/// Function Scope Ends ///

// Call our function and use our local shadowed variable
shadowFunction();

// But outside of the function, in global scope
// we use the original global variable again!
console.log(shadowedVar); // Outputs: I am global!

/// Global Scope Ends (for this file) ///


// ⚠ Dangers of With Statement 
var obj = { x: 10, y: 20 };

with (obj) {
  // Here, x and y refer to obj.x and obj.y
  console.log(x + y); // Outputs: 30

  // This creates a new variable x, shadowing obj.x
  // and because we used var it's now hoisted outside
  // of the with block scope!

  //! var x = 5; 
  console.log(x + y); // Outputs: 25 !
}
