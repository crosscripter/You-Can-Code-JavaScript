// 🧑‍🔬 Functional Programming (FP)


// Functional Todos App 

// Pure function to create a new task
const createTask = task => ({ task, completed: false });

// Pure function to mark a task as complete
const completeTask = task => ({ ...task, completed: true });

// Function to display a task
const displayTask = task => `${task.task} [${task.completed ? 'Done' : 'Pending'}]`;

// Example usage:
const todos = [createTask('Learn FP'), createTask('Read a☕JavaScript book')];
const updatedTodos = todos.map(completeTask);
updatedTodos.forEach(task => console.log(displayTask(task)));

// Output:
// Learn FP [Done]
// Read a☕JavaScript book [Done]
