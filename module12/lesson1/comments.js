// 💬 Comments


// Types of Comments

// Single-Line Comments: These start with //
// Anything following // on that line will be treated as a comment.

// This is a single-line comment
let x = 5; // This assigns 5 to x


// Multi-Line Comments: These start with /* and end with */
// They can span multiple lines:

/* This is a multi-line comment
   that spans several lines */
let y = 10;


// Comment Placement

// Above the Code: Use this for general explanations.

// Calculate the area of a rectangle
let area = 2 * 4;

// To the Right of the Code: Use for brief notes on specific lines.
let z = 15; // z will hold the value of 15

// Below the Code: This is often used to summarize a block of code.
let total = x + y;
// This calculates the total of x and y


// Special Types of Comments
// #!/usr/bin/env node
// WARNING: This script runs using Node.js (for Linux only)


// Type Checking with @ts-check
// WARNING: This works with VS Code Only and must be the first comment!

// @ts-check
let num = '10' + 2; // TypeScript will warn you about type issues


// File Headers for Professional Projects
/**
 * @file app.js
 * @description Main application logic for the project.
 * @author John Doe
 * @date 2024-10-17
 * @version 1.0.0
 */


// Docs and Autocomplete

/**
 * Calculates the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function sum(a, b) {
    return a + b;
}

