// Relational Expressions


// Using <, >, <= and >=

const age = 18;

// Relational comparisons
console.log(age > 18); // false, 18 is not greater than 18
console.log(age >= 18); // true, 18 is equal to 18
console.log(age < 21); // true, 18 is less than 21
console.log(age <= 17); // false, 18 is not less than or equal to 17

// Use in conditional statements
if (age >= 18) {
  console.log('You are eligible to vote.'); // This will execute
} else {
  console.log('You are not eligible to vote.');
}


// Comparing Values with == vs ===

const num = 5;
const strNum = '5';

// Loose equality (==) checks value but ignores type
console.log(num == strNum); // true (type coercion occurs)

// Strict equality (===) checks both value and type
console.log(num === strNum); // false (number !== string)

// Using strict equality in a conditional
if (num === strNum) {
  console.log('Values and types match.');
} else {
  console.log('Values or types do not match.'); // This will execute
}


// Using != and !== for Inequality Checks

const score = 50;
const passingScore = '50';

// Loose inequality (!=) ignores type
console.log(score != passingScore); // false (values are equal after coercion)

// Strict inequality (!==) checks value and type
console.log(score !== passingScore); // true (number !== string)

// Using in a conditional
if (score !== passingScore) {
  console.log('Score and passingScore are not the same type.'); // This will execute
} else {
  console.log('Values match.');
}
