// Logical Expressions


// Combining Conditions with AND and OR

// Example: Checking if a user is eligible for a discount
const isMember = true;
const hasCoupon = false;

// Logical expression
const isEligible = isMember || hasCoupon;
console.log(`Discount eligibility: ${isEligible}`);
// Output: Discount eligibility: true


// Using NOT to Invert a Condition
//#region 
let isAdmin;
//#endregion

// Example: Determining if a user is restricted
isAdmin = false;

// Logical expression
const isRestricted = !isAdmin;
console.log(`User restricted: ${isRestricted}`);
// Output: User restricted: true


// Complex Conditions

// Example: Verifying access to a secure page
const isLoggedIn = true;
const isVerified = false;
isAdmin = false;

// Logical expression with AND and OR
const hasAccess = isLoggedIn && (isVerified || isAdmin);
console.log(`Access granted: ${hasAccess}`);
// Output: Access granted: false
