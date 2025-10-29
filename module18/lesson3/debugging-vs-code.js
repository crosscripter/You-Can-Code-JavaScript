// 🟦 Debugging in VS Code


// Example Program with a Bug

// Return true if use is 18+ and hasConsent

function isUserEligible(age, hasConsent) {
  return age >= 18 && hasConsent;
}


// Define age and no consent
const age = 18;
const eligible = isUserEligible(age);


// Assumption: age is 18 and hasConsent is falsey
// so eligible would be false


console.log(`User eligible: ${eligible}`);
//❗Expected: false, but outputs: undefined 👈😱
