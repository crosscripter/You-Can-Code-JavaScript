// 🐱 Concatenative Programming


// Concatenative Todos App

// Global stack (for program state)
const stack = [];

// A Task function that returns an object
const Task = (name, completed=false) => ({ name, completed });

// Stack operations
const push = task => stack.push(task);
const pop = () => stack.pop();

// Show our task list
const display = () => console.log(
  stack.map(({ name, completed }) => `${name} [${completed}]`)
       .join('\n')
);

// Create some new tasks
push(Task('Learn☕JavaScript'));
push(Task('Buy groceries', true)); // Completed
push(Task('Complete todos program'));

// Display them
display();

// Output:
// Learn☕JavaScript [false] 
// Buy groceries [true] 
// Complete todos program [false]

// Change task list and redisplay
pop();
display();
// Output: 
// Learn☕JavaScript [false] 
// Buy groceries [true] 
 