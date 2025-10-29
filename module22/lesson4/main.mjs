// Importing named exports 
import { add, subtract } from './math.mjs';

console.log(add(5, 3));      // Output: 8
console.log(subtract(5, 3)); // Output: 2


// Importing a default export
import log from './logger.mjs';
log("Hello, World!");  // Output: Hello, World!


// Importing all members (import * as)
import * as math from './math.mjs';
console.log(math.add(5, 3));  // Output: 8
console.log(math.subtract(5, 3));  // Output: 2
