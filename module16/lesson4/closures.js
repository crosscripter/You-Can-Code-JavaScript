// 🚧 Closures


// Closure Keeping State Hidden

function createCounter() {
  let count = 0; // This variable is hidden in the closure

  return function increment() {
    count++; // We increment our closure variable which is remembered later
    console.log(`Count: ${count}`);
  };
}

const counter = createCounter();
counter(); // Output: Count: 1
counter(); // Output: Count: 2 (value of count is remembered or closed over)


// Bad Example of Closure in a Loop
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Output: 4, 4, 4 😱 (instead of 1, 2, 3 like expected!)


// Solution with let:

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Output: 1, 2, 3


// Immediately Invoked Function Expressions (aka. IIFEs)
(function () {
  const secret = "I'm hidden!";
  console.log(secret); // Output: I'm hidden!
})();

//! console.log(secret); // ❌ Error: secret is not defined 


