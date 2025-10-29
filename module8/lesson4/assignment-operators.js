/* Assignment Operators
======================================================
Operator    Description         Example     Result    
=           Assignment          x = 5       x = 5    
+=          Add assignment      x += 2      x = 7    
*️⃣=         self assignment     x *️⃣= 2     x = x *️⃣ 4
=======================================================
*/

// Assignment (=)
let n = 10; // Assigns the value 10 to the variable n
console.log(n);


/* Self Assignment Operators:
The combination of an operator and the equal sign 
forms what we call a self-assignment operator. 
Self-assignment operators in JS are shorthand methods 
that allow you to perform an operation on a variable 
and assign the result back to that same variable in one 
concise statement. These operators help streamline your 
code by reducing redundancy and improving readability.
=============================================================
Operator    Equivalent Operation        Example
+=          x = x + value               x += 5 (adds 5 to x)
-=          x = x - value               x -= 3 (subtracts 3)
*=          x = x * value               x *= 2 (multiplies x)
/=          x = x / value               x /= 4 (divides x)
%=          x = x % value               x %= 2 (modulus x) 
**=         x = x ** value              x **= 3 (x cubed)
..etc
=========================================================
*/

let x;

// Self Addition (+=)
x = 5;
console.log(x += 5); // x = x + 5

// Self Subtraction (-=)
x = 5;
console.log(x -= 5); // x = x - 5

// Self Multiplication (*=)
x = 5;
console.log(x *= 5); // x = x * 5

// Self Division (/=)
x = 5;
console.log(x /= 5); // x = x / 5

// Self Modulation (%=)
x = 4;
console.log(x %= 2); // x = x % 2

// Self Exponentiation (**=)
x = 2;
console.log(x **= 2); // x = x ** 2 
