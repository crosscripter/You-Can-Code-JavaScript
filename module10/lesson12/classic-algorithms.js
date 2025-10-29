// Algorithms


// Quick Sort with Arrays
function quickSort(arr) {
  // Base case: element or empty array is sorted
  if (arr.length <= 1) return arr; 

  const pivot = arr[arr.length - 1]; // Last element as pivot
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]); // Elements less than pivot
    else right.push(arr[i]); // Elements greater than or equal to pivot
  }

  return [...quickSort(left), pivot, ...quickSort(right)]; // Recursively sort 
}

const numbers = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(numbers)); 
// Output: [1, 1, 2, 3, 6, 8, 10]


// 🥖 Breadth-First Search (BFS) on a Graph 
function bfs(graph, startNode) {
  const visited = new Set();
  const queue = [startNode];

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      console.log(node); // Process the node
      visited.add(node);

      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) queue.push(neighbor);
      }
    }
  }
}

const graph = {
  A: ['B', 'C'], B: ['D', 'E'],
  C: ['F'], D: [], E: ['F'], F: []
};

bfs(graph, 'A'); // Output: A, B, C, D, E, F


// 🔍 Binary Search on a Sorted Array
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid; // Target found

    if (arr[mid] < target) left = mid + 1; // Search in the right half
    else right = mid - 1; // Search in the left half
  }

  return -1; // Target not found
}

const sortedNumbers = [1, 2, 3, 4, 5, 6, 7];
console.log(binarySearch(sortedNumbers, 4)); // Output: 3 (index)


// 