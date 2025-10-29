// 🙋 Ternary Expressions and Coalescing


// The Ternary Expression 
// Like a short-hand if statment in expression form:

//#region 
let prefix;
//#endregion

married = true
// married = false 

prefix = married ? 'Mrs' : 'Ms';
console.log('ternary:', prefix);

// It's equivalent to the following JS:

if (/* ? */ married) {
  prefix = 'Mrs';
} /* : */ else {
  prefix = 'Ms';
}

console.log('if:', prefix);


// Example: Basic Ternary

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes

// 🪹 Nesting Ternary Expressions
//#region 
let grade;
//#endregion

let score;
score = 85;
// score = 90;
// score = 70;

// Nested ternary expressions can be formatted cleanly:
grade = score >= 90 ? 'A'
      : score >= 80 ? 'B'
      : 'C';

console.log('ternary:', grade);

// 👆 This expression is equivalent to this:

if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else {
  grade = 'C';
}

console.log('if:', grade);


// Ternary vs. Nullish Coalescing  (??)
let name = null;

// if name is null then default to "Guest"
let displayName = name ?? "Guest";

console.log(displayName); // Output: Guest


// ⛓️ Optional Chaining with ?.
let user;
user = { profile: { name: "Alice" } };
// user = { ...user, settings: { admin: false } };
// user = { ...user, settings: { theme: 'dark' } };

// Using the safe navigation operator ?. we can access properties
// that may or may not exist without throwing an error:
console.log(user.profile?.name); // Output: Alice

// settings property does not exist but still safe!
console.log(user.settings?.theme); // Output: undefined


// Safe Function Calls
let greet;
greet = null;
// greet = () => 'Hi!';

console.log(greet?.());
// Output: undefined (BUT no error thrown)
// Output: Hi!


// 