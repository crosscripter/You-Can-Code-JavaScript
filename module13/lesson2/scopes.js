// 🔬 Scopes


// Types of Scope

// Global Scope: 
// Variables declared outside any function or block have global scope. 
// They can be accessed anywhere in your code.

/// -—- Start of Global Scope is at the top of any file  ///  
// Global variable                
let globalVar = "I am global!";          

// Function is defined in the global scope as well    
function showGlobal() {            
    // Using a global variable in a function scope	    
    console.log(globalVar); // Outputs: I am global! 	   
}                                         
///      —- Global Scope Ends (for this file) —-       ///


// Function Scope: Variables declared within a function are limited to that function. They cannot be accessed outside of it.

/// Global scope starts here
function localFunction() /* Function Scope Start at brace -> */ {
								
  // All statements are in function scope        	
  let localVar = "I am local!";          		
  console.log(localVar); // Outputs: I am local!     	 
								
} /* <- Function Scope Ends at Brace */        

/// Global scope again — so localVar is not in scope anymore!
//! console.log(localVar);
//❗ReferenceError: localVar is not defined

localFunction();

/// Global Scope ends (for this file) ///


// Block Scope: 
// Variables declared within a block (using {}) are limited to that block. 
// This scope is created by control structures (like if or for) or blocks 
// defined with let or const:

/// Global Scope Starts ///

/* Block Scope Starts at brace -> */ {
  let blockVar = "I am block-scoped!";				
  console.log(blockVar); // Outputs: I am block-scoped!	
} /* <- Block Scope Ends at Brace */

/// Global scope again — blockVar is not in scope anymore!
//! console.log(blockVar);
//❗ReferenceError: blockVar is not defined

/// Global Scope Ends ///


// var vs. let

// var: Variables declared with var are function-scoped, 
// meaning they can be accessed anywhere within the function. 
// If declared outside a function, they become global:

function testVar() {
  // With hoisting of var variables		                              
  // it's like we wrote the line at the top:	
  //? var myVar = "I am var!";			

  if (true) {            				
    var myVar = "I am var!";			        
  }							                
  console.log(myVar); // Outputs: I am var!	
}

testVar();


// let: Variables declared with let have block scope, 
// meaning they are only accessible within the block they are defined:

/// Function Scope Starts ///
function testLet() {                
  let letVar = "I am let!";							          
 											                   
  /// if Block Scope Starts 							          
  if (true) { 									                
      let letVarInside = "I am block-scoped with let!";			
      console.log(letVarInside); // Outputs: I am block-scoped with let!	      
  } 											                    
  /// if Block Scope Ends 								            
 											                   
  /// Back in Function Scope not if block scope    				
  /// so letVarInside is out of scope now					
      											                   
  //! console.log(letVarInside);							
  //❗ReferenceError: letVarInside is not defined				

} /// Function Scope Ends ///

testLet();
