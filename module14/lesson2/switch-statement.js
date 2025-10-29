// 🛤️ switch Statement


// Basic Switch Syntax

let day;
day = 'Monday';
// day = 'Friday';
// day = 'Wednesday';

switch (day) {
  case 'Monday':
    console.log("It's the start of the week!");
    break;

  case 'Friday':
    console.log('Weekend is near!');
    break;

  case 'Saturday':
  case 'Sunday':
    console.log("It's the weekend!");
    break;

  default:
    console.log("It's a regular weekday.");
}


// Fall-Through Behavior:
let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("It's an apple.");			      
    //! 🙈 missing break; so case continues below 👇	

  case "banana": console.log("It's a banana.");	      
  default: console.log("Unknown fruit.");	      
}

// Output:
// It's a banana.
// Unknown fruit.


// Braces for Cases
fruit = 'apple';

switch (fruit) {
  case 'apple': {
    console.log("It's an apple.");
    break; // <-- Braces help remind you to break!
  }
  case 'banana': {
    console.log("It's a banana.");
  }
  // ...
}


// Advanced Uses of switch
let score = 85;

// Switch on true and use cases to evaluate value instead
switch (true) {
  // expressions 👇 as cases too not just values!
  case score >= 80:
    console.log("Grade: B");
    break;

  default:
    console.log("Keep trying!");
}

