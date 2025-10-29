// ⏱️ setTimeout/Interval


/* setTimeout: Delayed Execution

    setTimeout(function, delay, ...args);

*/

// setTimeout Example:

console.log("Start timer...");

setTimeout(() => {
  console.log("This message appears after 3 seconds");
}, 3000); // 3000ms is 3s

console.log("Timer set, waiting...");
// Output (after 3s): This message appears after 3 seconds


/* setInterval: Repeated Execution

    setInterval(function, interval, ...args);
    
*/

// setInterval Example:
let count = 1;

const intervalId = setInterval(() => {
  console.log(`Ping ${count}`);
  count++;

  // 👇 Single line if statement using a statement instead of a block 
  if (count > 3) clearInterval(intervalId); // Stop after 3 pings

}, 1000); // 1000ms is 1.000s

// Output (every second): Ping 1
//                        Ping 2
//                        Ping 3


// Recursive Timeout:

function recursivePing(count) {
  
  if (count > 3) return; // Using return to bail early. Stop after 3 pings

  console.log(`Recursive Ping ${count}`);

  // Setup a new timeout calling this same function passing a new count!
  setTimeout(() => recursivePing(count + 1), 1000);

}

recursivePing(1);


