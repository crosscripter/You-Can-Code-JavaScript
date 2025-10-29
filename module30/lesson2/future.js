// Future ECMAScript


// Match statement:
function matchValue(value) {
  match(value) {
    case { type: 'circle', radius }:
      return Math.PI * radius * radius;
    case { type: 'square', side }:
      return side * side;
    default:
      throw new Error('Unknown shape');
  }
}


// Weak Refs
let obj = {};
let weakMap = new WeakMap();
weakMap.set(obj, 'some value');
// `obj` can be garbage collected if there are no other references to it


// Temporal API
const now = Temporal.now.plainDateTimeISO();
console.log(now.toString()); // "2024-11-05T10:30:00"


// Private fields
class Counter {
  #count = 0; // private field
  increment() { this.#count++; }
  getCount() { return this.#count; }
}


// JSON modules 
import data from './data.json';
console.log(data);


// Decorators
function log(target, key, descriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args) {
    console.log(`Calling ${key} with`, args);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Example {
  // Decorators go above a method/function and start with @
  @log 
  doSomething(arg) {
    console.log('Doing something', arg);
  }
}


// Records and Tuples
const record = Record({ name: 'John', age: 30 });
const newRecord = record({ age: 31 }); // returns a new record with updated age

const tuple = Tuple(1, 2);
const anotherTuple = Tuple(1, 2); // tuples are equal, and can be compared


// Async/await in loops
async function processItems(items) {
  for (const item of items) {
    const result = await fetchItem(item);
    console.log(result);
  }
}


// RegExp API Improvements:

const regex = /(?<name>\w+)(?<age>\d+)/g;
const match = regex.exec('John25');

console.log(match.groups.name); // "John"
console.log(match.groups.age); // "25"



