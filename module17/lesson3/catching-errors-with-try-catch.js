// 🤾 Catching Errors with try…catch! 


// Basic Structure of try..catch

//#region 
const somethingDangerous = () => { throw "Ahhh real monsters!"; }
//#endregion

try {
  // Code that may throw an error
  let result = somethingDangerous();
  console.log('Result:', result);

} catch (error) {
  // Handle the error
  console.error('An error occurred:', error.message);

} finally {
  // Code that always runs, regardless of what happens
  console.log('This block runs no matter what!');
}


// 🫴 Rethrowing Errors
// Sometimes you want to catch an error, log it, 
// but still let it propagate so other parts of 
// your program can handle it:

try {
  let num = parseInt('abc'); // Invalid number conversion

  if (isNaN(num)) {
    // Throw a new custom error and catch it below!
    //! throw new Error('Invalid number format');
  }
  
} catch (error) {
  console.error('Caught an error:', error.message);
  throw error; // 👈 Rethrow the error

}


// Throwing Custom Errors 🤾

function divide(a, b) {

  // It's usually an error to divide by 0!
  if (b === 0) {
    //! throw new Error('Division by zero is not allowed');
  }

  return a / b;
}

try {
  // Oops we divided by 0!
  console.log(divide(10, 0));

} catch (error) {
  console.error('Error:', error.message);

}


//🧹 Using finally for Cleanup
// The finally block is useful for tasks that must always run, even if an error occurs.

try {
  console.log('Trying to connect...');
  //! throw new Error('Connection failed');

} catch (error) {
  console.error(error.message);

} finally {
  // ALWAYS runs no matter if an error happened or not!
  console.log('Closing connection.');

}
