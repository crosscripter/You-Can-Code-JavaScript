// 🫧 Bubbling Up with Error Propagation


// How Error Propagation Works Example:
function level1() { level2(); /* Call next level function (level2) */ }

function level2() { level3(); /* Call deeper function (level3) */ }

function level3() {
  // Throw error from level 3!
  throw new Error('Something went wrong!'); // Error originates here
}

try {
  level1(); // Start the chain by calling level 1
  // This calls:
  //        level1() calls
  //            level2() calls
  //                 level3() throws ERROR!
  //                        |
  //    global: catches ←—error—+
} catch (error) {
  // error is new Error from level 3!
  console.error('Caught at the top level:', error.message);
}


// 🧤 Catching Errors at Different Scope Levels
function readData() {
  try {
    // 👇This throws an error!
    JSON.parse('{"invalidJson"');

  } catch (error) {
    // error 👆 is from parseJSON above!
    console.error('Caught in readData:', error.message);
  }
}

try {
  readData();
} catch (error) {
  // error 👆 will never be caught, since readData() handled it!
  // if we removed try..catch from readData() it would catch here!
  console.error('Inner catch caught error, this will not be printed')
}