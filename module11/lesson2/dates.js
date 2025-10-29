// 📅 Dates


// Create a new Date object

// Pass nothing to get the current date/time
const now = new Date();
console.log(now); // Current date and time

// Create a new specific date, passing date in:
const specificDate = new Date('2024-12-25');
console.log(specificDate.toString()); 
// Outputs: Tue Dec 24 2024 18:00:00 GMT-0600 (Central Standard Time)


// Getting Components of a Date
 
//#region 
let date;
//#endregion

// Create a specific date 2024-10-16
date = new Date('2024-10-16');

/// We can get the individual parts of a date using methods:
console.log(date.getFullYear()); // 2024

// Yes, zero indexed months, it's one of the reasons we
// don't like using the built in API for Date in JS!
// Always remember "Jan is month 0" in JS!
console.log(date.getMonth());    // 9 (October, 0-indexed)

// Get the date of the month:
console.log(date.getDate());     // 15

// Get the day of week
// Starting with Sunday day 0 of course!
console.log(date.getDay());      // 2 (Tues)


// 👩‍❤️‍👨 Setting Components of a Date
const myDate = new Date();

// We can set date parts using other methods:
myDate.setFullYear(2025);
myDate.setMonth(11); // December (0-indexed)
myDate.setDate(25);  // NOT zero-indexed YAY!
console.log(myDate.toString());
// Outputs: Thu Dec 25 2025 11:12:11 GMT-0600 (Central Standard Time)


// Calculating Time Differences 🧮

// Create a specific date range
const start = new Date('2024-10-01');
const end = new Date('2024-10-16');

// Get difference by subtracting (in ms)
const difference = end - start; // Difference in milliseconds

/// Calculate difference in days:
// Divide by the combination of all time units:
//
// 1000 milliseconds in a second
//   60 seconds in a minute
//   60 minutes in an hour
//   24 hours in a day

const daysDifference = difference / (1000 * 60 * 60 * 24);
console.log(daysDifference, 'days'); // 15 days


// Formatting Dates 🤵

// Create specific date
date = new Date('2024-10-16');

// Format in International Organization for Standardization format:
console.log(date.toISOString()); // "2024-10-16T00:00:00.000Z"

// Format in locale specific formatting (US English):
console.log(date.toLocaleDateString('en-US')); // "10/15/2024"


// 🥧 Using New Date APIs
date = new Date('2024-10-16');

const formatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
});

console.log(formatter.format(date)); // "15 October 2024"


// Day.js Example
// Create a specific date range using the dayjs function:
const dayjs = require('dayjs');

const startDate = dayjs('2024-10-01');
const endDate = dayjs('2024-10-16');

// Get the difference in days
const dayDifference = endDate.diff(startDate, 'day');
console.log(`Difference: ${dayDifference} days`);


// 