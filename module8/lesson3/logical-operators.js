/* Logical Operators
==============================================================
Operator    Description         Example                 Result
&&          Logical AND         true && false           false
||          Logical OR          true || false           true
!           Logical NOT         !true                   false
?           Ternary             true ? true : false     true
??          Null coalescing     null ?? true            true
==============================================================
*/

// How Logical Operators Work:
// AND (&&): Returns true if both operands are true.
// OR (||): Returns true if at least one operand is true.
// NOT (!): Inverts the boolean value of an operand.

let isLoggedIn = true;
let hasAccess = false;
console.log(isLoggedIn && hasAccess); // false

// Logical And (&&)
console.log(true && false);
console.log(true && true);
console.log(false && false);
console.log(false && true); 

// Logical Or (||)
console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log(false || true); 

// Logical Not (!)
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

// Combination of Logical Operations
console.log(true && (!false));
console.log(!false || false);
console.log((true || false) && (true && !false));


// Ternary Operators

// Ternary (?)
console.log(true ? true : false);
console.log(false ? true : false);

// Null Coalescing (??)
console.log(null ?? true);
console.log(true ?? null);
console.log(false ?? true);
console.log(null ?? false);

// Advanced Logical Expression:
console.log(null ?? (false && false || (!false)));
