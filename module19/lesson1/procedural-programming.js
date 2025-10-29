// 🧑‍⚕️ Procedural Programming


// Procedural Todos App 

let todos = [];

// Add a new task
function addTask(task) {
  todos.push(task);
}

// Display all tasks
function showTasks() {
  console.log('Your Tasks:');
  todos.forEach((task, index) => console.log(`${index + 1}. ${task}`));
}

// Main program flow
addTask('Learn☕JavaScript');
addTask('Read a book');
showTasks();

// Output:
// Your Tasks:
// 1. Learn☕JavaScript
// 2. Read a book
