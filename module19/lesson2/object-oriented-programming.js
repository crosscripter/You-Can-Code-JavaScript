//  👪 Object-Oriented Programming (OOP)


// 📋 Object-Oriented Todos App
// Here’s how the todo app can be restructured using OOP principles:

// Class to represent a single task
class Todo {
  constructor(task) {
    this.task = task;
    this.completed = false;
  }

  markComplete() {
    this.completed = true;
  }

  display() {
    return `${this.task} [${this.completed ? 'Done' : 'Pending'}]`;
  }
}

// Class to manage the todo list
class TodoList {
  constructor() {
    this.todos = [];
  }

  addTask(task) {
    const newTodo = new Todo(task);
    this.todos.push(newTodo);
  }

  showTasks() {
    console.log('Your Tasks:');

    this.todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo.display()}`)
    });
  }
}

// Create a new todo list and add tasks
const myTodos = new TodoList();
myTodos.addTask('Learn OOP');
myTodos.addTask('Read a☕JavaScript book');
myTodos.showTasks();

// Output:
// Your Tasks:
// 1. Learn OOP [Pending]
// 2. Read a☕JavaScript book [Pending]
