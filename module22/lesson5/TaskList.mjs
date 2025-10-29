import Task from './Task.mjs';

export class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(title) {
    const task = new Task(title);
    this.tasks.push(task);
  }

  getCompletedTasks() {
    return this.tasks.filter(task => task.completed);
  }

  displayTasks() {
    this.tasks.forEach(task => {
      console.log(`${task.title} - ${task.completed ? 'Completed' : 'Pending'}`);
    });
  }
}
