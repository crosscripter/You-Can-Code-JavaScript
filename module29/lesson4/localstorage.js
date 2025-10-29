// localStorage


// Define a todo item
const todo = { id: 1, text: 'Learn React' };

// Store it in localStorage using setItem()
// NOTE: We have to stringify our object to store it first!
localStorage.setItem('todo1', JSON.stringify(todo));

// If we need to later we can remove it by using removeItem():
localStorage.removeItem('todo1'); // Remove by key 'todo1'

// Get the item from localStorage as a string and JSON.parse into a JS object:
const storedTodo = JSON.parse(localStorage.getItem('todo1'));
console.log(storedTodo); // { id: 1, text: "Learn React" }


// You can update an item in localStorage by combining both approaches:

// First get the item from localStorage and parse into a JS object 
todo = JSON.parse(localStorage.getItem('todo1'));

// Then update a property of that object
todo.text = 'Learn React Hooks';

// Next stringify the object and set it as the item's value in localStorage again
localStorage.setItem('todo1', JSON.stringify(todo));

// You can check if an item exists by checking the return value of getItem()
// it will return null if the requested item does not exist in localStorage.

if (localStorage.getItem('todo1')) {
  console.log('Todo found!');
} else {
  console.log('Todo not found');
}
