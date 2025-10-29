// 🧵 String Methods

//#region 
let str, result;
//#endregion

// charAt()
// Returns the character at a specific index.

str = "JavaScript";
console.log(str.charAt(4)); 
// Output: "S" (5th char, because zero indexing!) 

// "J a v a S c r i p t"
//  0 1 2 3 4


// concat()
// Joins two or more strings.

let str1 = "Hello, ";
let str2 = "World!";
console.log(str1.concat(str2));  
// Output: "Hello, " + "World!" => "Hello, World!"


// includes()
// Checks if a substring exists in the string.

str = "Learning☕JavaScript is fun!";
console.log(str.includes("JavaScript"));  // Output: true


// indexOf()
// Returns the index of the first occurrence of a substring.

str = "Learn☕JavaScript";
console.log(str.indexOf("JavaScript"));  // Output: 6

// "L e a r n   J a v a S c r i p t"
//  0 1 2 3 4 5 6 7 8 9


// 🗡️ slice()
// Extracts a section of the string and returns it as a new string.

str = "JavaScript";
console.log(str.slice(0, 4));  // Output: "Java"
// "|J a v a |S c r i p t"
//  |0 1 2 3 |4 5 6 7 8 9


// substring()
// Returns a substring between two indexes.

str = "JavaScript";
console.log(str.substring(4, 10));  // Output: "Script"
// "J a v a |S c r i p t| "
//  0 1 2 3 |4 5 6 7 8 9|10


// .substring() vs. .substr() 
str = 'Hello, World!';

// .substring(start, end)
// Extracts characters from index 'start' to 'end' (not inclusive).

result = str.substring(0, 5);
console.log(result); // Output: "Hello"
// Explanation: Starts at index 0, stops before index 5.


// .substr(start, length)
// Extracts 'length' characters starting from index 'start'.

result = str.substr(0, 5);
console.log(result); // Output: "Hello"
// Explanation: Starts at index 0 and takes 5 characters from that point.

// Key Differences:
// .substring() uses a start and end index (non-inclusive of end), 
//              making it useful when extracting ranges.
//
// .substr() uses a start index and character count, often helpful 
//           when you know how many characters you want.

//! 🧙‍♂️Pro Tip: While both are widely supported, 
// .substr() is considered a deprecated function in JS
// and may not be available in some future versions! 
// I personally recommend avoiding it and just using .substring()


// toLowerCase()
// Converts the string to lowercase.

str = "JavaScript";
console.log(str.toLowerCase());  // Output: "javascript"


// toUpperCase()
// Converts the string to uppercase.

str = "JavaScript";
console.log(str.toUpperCase());  // Output: "JAVASCRIPT"


// ✂️ trim()
// Removes leading and trailing whitespace.

str = "  Hello!  ";
console.log(str.trim());  // Output: "Hello!"


// There are also alternatives to .trim() called .trimEnd() and .trimStart():
console.log(str.trimEnd()); // Output: "  Hello!"
console.log(str.trimStart()); // Output: "Hello!  "


// split()
// Splits a string into an array based on a delimiter.

str = "apple,banana,grape";
console.log(str.split(","));  
// Output: ["apple", "banana", "grape"]


// replace()
// Replaces the first match of a substring with a new value.

str = "Hello, World!";
console.log(str.replace("World", "JavaScript"));
// Output: "Hello,☕JavaScript!"

// 🧙‍♂️ Pro Tip: There is also a newer .replaceAll() 
// which does exactly what you think. It replaces all 
// matches of a term instead of just the first one, 
// I recommend ALWAYS using it.

// .replace() vs .replaceAll():

str = "Avada Kedavra!";

console.log(str.replace("a", "e"));    
// Output: "Aveda Kedavra!"

console.log(str.replaceAll("a", "u")); 
// Output: "Avudu Kuduvru!"
// Notice: we didn't replace "A" just lower case "a"s!


// 🧨 match()
// Finds matches using a regular expression.

str = "123-456-7890";
console.log(str.match(/\d+/g));  
// Output: ["123", "456", "7890"]

// 🧙‍♂️ Pro Tip: There is also a newer .matchAll() 
// which does exactly what you think. It finds all 
// matches of a term instead of just the first one.

// Sample string to search
let text = "The price is $5.00, and another price is $7.50.";

// Regular expression with global flag to match dollar amounts
let regex = /\$(\d+\.\d{2})/g;

// Using matchAll() to get all matches, including captured groups
let matches = text.matchAll(regex);

// Looping through matches (matchAll returns an iterator)
for (const match of matches) {
  console.log(`Found: ${match[0]}`);
  console.log(`Captured group: ${match[1]}`);
  console.log(`Position: ${match.index}`);
}


// startsWith()
// Checks if the string starts with a given substring.
str = "JavaScript";
console.log(str.startsWith("Java"));  // Output: true


// endsWith()
// Checks if the string ends with a given substring.

str = "JavaScript";
console.log(str.endsWith("Script"));  // Output: true


// repeat()
// Repeats the string a specified number of times.

str = "ha";
console.log(str.repeat(3));  // Output: "hahaha"


// Static String Methods
// Here are the static methods available on the String type 
// in JS with explanations and examples:

// String.fromCharCode()
// Converts Unicode values to a string.

str = String.fromCharCode(72, 101, 108, 108, 111);
console.log(str);  // Output: "Hello"


// String.fromCodePoint()
// Converts Unicode code points to a string, supporting characters outside the BMP.

let emoji = String.fromCodePoint(0x1F600); // Hex code point
console.log(emoji);  
// Output: 😀


// 🍣 3. String.raw()
// Creates a raw string, ignoring escape sequences (useful with template literals).

let rawStr = String.raw`Hello\nWorld!`; // Leaves the escapes raw
console.log(rawStr);  // Output: "Hello\nWorld!"

