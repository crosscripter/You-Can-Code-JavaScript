
// 🫥 null

// We explicitly say that user has no value 
// by assigning null to it.
let user = null; // User is not yet assigned a value
console.log(user);

// Why Use null?
let userProfile = null;
console.log('now:', { userProfile });

// Later in the program, it might get assigned a value:
userProfile = { /*...*/ }
console.log('later:', { userProfile });

// The "Quirks" of null
// NOTE: Forget this exists and move on
console.log(typeof null); // 😵‍💫 "object" 


/* 🫣 The "Billion Dollar Mistake"
Dealing with null has caused so many bugs and issues in software 
over the decades that Tony Hoare believed it cost the software 
industry billions of dollars in debugging and fixing errors. 
Despite this, null remains a useful concept if used carefully.
*/

