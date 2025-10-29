/* Operator Precedence
==============================================================================================================================================
Precedence Level    Operator Name           Usage           Explanation
20 (Highest)        Member Access           .               Accesses a property of an object. Example: object.property
                    Computed Member Access  []              Accesses a property using a variable or expression. Example: object[key]
                    Function Call           ()              Invokes a function. Example: functionName()
                    Optional Chaining       ?.              Safely accesses properties or methods. Example: object?.property
19                  New (without arguments) new             Creates an instance of an object. Example: new ClassName
18                  Postfix Increment       x++             Increases a variable’s value by 1 after evaluating the expression. Example: x++
                    Postfix Decrement       x--             Decreases a variable’s value by 1 after evaluating the expression. Example: x--
17                  Logical NOT             !               Negates a boolean value. Example: !true
                    Bitwise NOT             ~               Inverts bits of a number. Example: ~5
                    Unary Plus              +               Converts a variable to a number. Example: +x
                    Unary Negation          -               Negates a number. Example: -x
                    Prefix Increment      ++x               Increases a variable’s value by 1 before evaluating the expression. Example: ++x
                    Prefix Decrement      --x               Decreases a variable’s value by 1 before evaluating the expression. Example: --x
                    typeof                  typeof          Returns the type of a variable. Example: typeof x
                    void                    void            Evaluates an expression but returns undefined. Example: void 0
                    delete                  delete          Removes a property from an object. Example: delete object.property
16                  Exponentiation          **              Raises a base to the power of an exponent. Example: 2 ** 3
15                  Multiplication          *               Multiplies two numbers. Example: a * b
                    Division                /               Divides two numbers. Example: a / b
                    Remainder (Modulo)      %               Returns the remainder after division. Example: a % b
14                  Addition                +               Adds two numbers or concatenates strings. Example: a + b
                    Subtraction             -               Subtracts two numbers. Example: a - b
13                  Bitwise Left Shift      <<              Shifts bits to the left. Example: a << b
                    Bitwise Right Shift     >>              Shifts bits to the right. Example: a >> b
                    Unsigned Right Shift    >>>             Shifts bits to the right with zero fill. Example: a >>> b
12                  Relational Operators    <,<=,>=,>       Compares two values. Example: a < b
                    in                      in              Checks if a property exists in an object. Example: key in object
                    instanceof              instanceof      Checks if an object is an instance of a class. Example: object instanceof ClassName
11                  Equality Operators      ==,!=,===,!==   Compares two values for equality or inequality. Example: a === b
10                  Bitwise AND             &               Performs a bitwise AND operation. Example: a & b
9                   Bitwise XOR             ^               Performs a bitwise XOR operation. Example: a ^ b
8                   Bitwise OR              |               Performs a bitwise OR operation. Sets each bit to 1 if one is 1. Example a | b
7                   Logical AND             &&              Evaluates to true if both operands are true. Example: a && b
6                   Logical OR              ||              Evaluates to true if one of the operands are true. Example: a || b
5                   Nullish Coalescing      ??              Returns the right operand if the left is null/undefined. Example: a ?? b
4                   Conditional (Ternary)   a ? b : c       Returns one of two expressions based on a condition. Example: a > b ? x : y
3                   Assignment Operators    =,+=,etc.       Assigns values to variables. Example: x += 5
2                   yield                   yield           Pauses and resumes generator functions. Example: yield x
1 (Lowest)          Comma                   ,               Evaluates expressions from left to right. Example: (a = 1, b = 2)
==============================================================================================================================================
*/

//#region 
let result;
//#endregion

// Multiplication (*) has higher precedence than addition (+)
result = 2 + 3 * 4;
console.log(result); // Output: 14

// Parentheses override precedence
result = (2 + 3) * 4; 
console.log(result); // Output: 20

// Logical Operators and Short-Circuiting
const a = true;
const b = false;
const c = "Hello";

console.log(a || b && c); // Output: true
console.log((a || b) && c); // Output: "Hello"
