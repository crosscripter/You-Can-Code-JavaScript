// 🤞 Promises


//🍕 Pizza Promises

const orderPizza = new Promise((resolve, reject) => {
  let isStoreOpen = true;

  setTimeout(() => {
    if (isStoreOpen) {
      resolve('Pizza delivered!');
    } else {
      reject('Store is closed.');
    }
  }, 1000);
});

orderPizza
  .then(message => console.log(message)) // Pizza delivered!
  .catch(error => console.error(error)); // Handles any errors


// Thenables: Example of Chaining Promises:

orderPizza
  .then((message) => {
    console.log(message);
    return "Eating pizza";
  })
  .then((nextStep) => console.log(nextStep))
  .catch((error) => console.error(error));


// The Promise API


// Promise.resolve(): Creates a resolved Promise immediately.

Promise.resolve("Instant result").then(console.log);


// Promise.reject(): Creates a rejected Promise.

Promise.reject("Error!").catch(console.error);


// Promise.all(): Runs multiple Promises in parallel and waits until all are resolved or one fails.

Promise.all([ 

  Promise.resolve(1), 
  Promise.resolve(2) 

]).then(console.log); 

// Output: [1, 2]


// Promise.allSettled(): Waits for all Promises to settle (either fulfilled or rejected).

Promise.allSettled([

  Promise.resolve(1),
  Promise.reject("Error")

]).then(console.log);

// Outputs:
// [
//   {status: 'fulfilled', value: 1},
//   {status: 'rejected', reason: 'Error'}
// ]


// Promises vs. async/await

async function getPizza() {
  try {
    // Await the Promise from earlier
    let message = await orderPizza;
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}

getPizza();
