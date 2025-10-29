// 🗼 Data Structures 


// Arrays

// Create our favorite array of fruits (again) 🍎🍌🍒
const fruits = ['apple', 'banana', 'cherry'];

// Access elements (starting at 0 like weirdos)
console.log(fruits[0]); // 'apple'

// Add an element 
fruits.push('date'); // Seriously, who eats dates? 🍈
console.log(fruits); 
// Outputs: ['apple', 'banana', 'cherry', 'date']

// Remove the last element (ie. popping off)
fruits.pop();
console.log(fruits); 
// Outputs: ['apple', 'banana', 'cherry'] — no more dates!

// Loop through the array
fruits.forEach((fruit) => console.log(fruit));


// Objects

// Create an object
const car = { brand: 'Toyota', model: 'Corolla', year: 2020, };

// Access properties
console.log(car.brand); // 'Toyota'

// Add a property
car.color = 'red';
console.log(car.color); // 'red'

// Remove a property
delete car.year;	// bye bye now
console.log(car); // { brand: 'Toyota', model: 'Corolla', color: 'red' }


// 📚 Stacks
const stack = [];

// Push elements
stack.push(1, 2);

// Pop elements
console.log(stack.pop()); // 2
console.log(stack); // [1]

// Check the last element
console.log(stack[stack.length - 1]); // 1


// 🧍 Queues
const queue = [];

// Enqueue elements
queue.push(1, 2);

// Dequeue elements
console.log(queue.shift()); // 1
console.log(queue); // [2]


// 🔗 Linked Lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() { this.head = null; }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
    }
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
console.log(list.head); 
// Node { value: 1, next: Node { value: 2, next: null } }


// 🎾 Sets
const set = new Set([1, 2, 2, 3]);

// Add a value
set.add(4);

// Check size (not length like array!)
console.log(set.size); // 4

// Iterate
set.forEach(val => console.log(val));


// 🗺️ Maps
const map = new Map();

// Add key-value pairs
map.set('key1', 'value1');
map.set('key2', 'value2');

// Retrieve value
console.log(map.get('key1')); // 'value1'

// Check existence
console.log(map.has('key2')); // true


// Graphs 📊
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'D'],
  D: ['B', 'C']
};

console.log(graph['A']); // ['B', 'C']


// 🌳 Trees
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

const root = new TreeNode(1);
root.children.push(new TreeNode(2), new TreeNode(3));
console.log(root);
/* 
TreeNode {
  value: 1,
  children: [
    TreeNode { value: 2, children: [] },
    TreeNode { value: 3, children: [] }
  ]
}
*/


// 🥢 Hash Tables
class HashTable {
  constructor(size = 50) { this.table = new Array(size); }

  // Simple hash function
  hash(key) {
    let hashValue = 0;
    for (let char of key) hashValue += char.charCodeAt(0);
    return hashValue % this.table.length;
  }

  // Add a key-value pair to the hash table
  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) this.table[index] = [];
    this.table[index].push([key, value]);
  }

  // Retrieve a value by its key
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      for (let [k, v] of bucket) {
        if (k === key) return v;
      }
    }

    return undefined;
  }
}

// Example usage
const hashTable = new HashTable();
hashTable.set('name', 'John Doe');
hashTable.set('age', 30);
hashTable.set('occupation', 'Software Developer');

console.log(hashTable.get('name')); // Output: "John Doe"
console.log(hashTable.get('age')); // Output: 30
console.log(hashTable.get('hobby')); // Output: undefined
