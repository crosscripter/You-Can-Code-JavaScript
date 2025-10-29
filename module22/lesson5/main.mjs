import { TaskList } from './TaskList.mjs';

const taskList = new TaskList();

taskList.addTask('Learn modules in JavaScript');
taskList.addTask('Practice coding challenges');
taskList.displayTasks();

// Mark first task complete
taskList.tasks[0].markCompleted();

console.log('After marking the first task completed:');
taskList.displayTasks();

/* Output:
Learn modules in JavaScript - Pending
Practice coding challenges - Pending

After marking the first task completed:

Learn modules in JavaScript - Completed
Practice coding challenges - Pending
*/
