// ⏯️ Asynchronous Execution


// Synchronous Example:

// We import execSync from child_process module
// So we can launch a new process later on to wait on
const { execSync } = require('child_process');

function runProcessSync() {
  // ⏸️ Blocked waiting on sync process to finish...
  const command = `node -e "setTimeout(() => console.log('Hello, World!'), 3000)"`;

  console.log('Blocked: waiting on sync process...');
  const data = execSync(command, { encoding: 'utf8' });
  console.log('Unblocked: Process returned:', data);
}

console.log('Start');
// ⏸️ Blocked waiting on sync process to return
runProcessSync();
console.log('End');

// Output:
// Start
// Blocked: waiting on sync process...
//? (~3 seconds later)
// Unblocked: Process returned: 'Hello, World!\n'
// End


// Asynchronous Example:

function fetchDataAsync() {
  // ⏰ Fetch call fires and IMMEDIATELY returns back to function
  // code flow it does not wait for fetch to return
  fetch('https://jsonplaceholder.typicode.com/users/1') // Non-blocking code
    .then(res => res.json())
    .then(data => console.log('Data fetched:', data));
}


console.log('Start');
// ⏰ Code flow continues fetchDataAsync fires and continues on
fetchDataAsync();
console.log('End');

/* Output:
Start
End (Didn't block)

(some time later...)

Data fetched: {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: { … },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: { … }
} */


// Ways to Write Asynchronous Code in☕JavaScript

// Callbacks:
// The original way to handle async tasks, but can lead to messy code.

// We pass a callback for setTimeout to call later
setTimeout(() => console.log('Callback done'), 1000);


// Promises:
// Cleaner way to manage async tasks, chaining operations.

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(data => data.json())
  .then(json => console.log('Fetched using Promises:', json));


// Async/Await:
// Makes async code look synchronous for better readability.

async function getData() {
  // Looks like line by line but in reality it's not!
  const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
  console.log('Fetched via async/await:', await data.json());
}

getData();
