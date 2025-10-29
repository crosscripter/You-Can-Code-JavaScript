// 🤪 Regular Expressions


// Simple Code Example
const text = "hello world";

//#region 
let pattern;
//#endregion

// Declare a new regex which matches "hello"
pattern = /hello/;

// Use the .test method to test if our text matches the pattern:
const result = pattern.test(text);

// It matches true since our text starts with "hello"
console.log(result); // Output: true


// 😱 The Complexity of Regular Expressions
// This validates an email address using a RegExp
/*
^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*
 |  "(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]
      |  \\[\x01-\x09\x0b\x0c\x0e-\x7f])*")
@ (?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?
  |  \[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}
       (?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:
          (?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]
          |  \\[\x01-\x09\x0b\x0c\x0e-\x7f])+)
     \])$
*/

pattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]? [0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

const emails = [
  'bob@aol.com', 
  'test+dev@app.cloud', 
  'my.email23@a.co', 
  'the.most+c0mpl3x@email-mail.co.uk'
];

emails.forEach(email => 
  console.log(email, pattern.test(email))
);


// ⚒️ Using Tools to Build Regular Expressions
// Require the Verbal Expressions library
const VerEx = require('verbal-expressions');


// Create a pattern to match 'hello'
// NOTE: how we align the method call dots together
// this is a common formatting for chained calls like this!
// Remember the line of code doesn't "end" until the semi.
pattern = VerEx()
                .startOfLine()   // /
                .then('hello')   // /hello
                .whitespace()
                .then('World')
                .endOfLine();    // /hello/

console.log(
    pattern.toString(), 
    pattern.test('hello World')
); 
// Output: [ '/^(?:hello)\s(?:World)$/gm', true ] true


// 