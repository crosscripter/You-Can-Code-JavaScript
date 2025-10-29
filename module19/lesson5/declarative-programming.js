// 📢 Declarative Programming 


// Example: Declarative Programming with JSX in React
// Here's an example of how React uses declarative programming to build components.

function TodoApp() {
  const todos = ['Learn React', 'Build a Project', 'Deploy App'];

  return (
    `<div>
      <h1>My Todos</h1>
      <ul>
        ${todos.map((todo, index) => `<li key={index}>{todo}</li>`).join('\n        ')}
      </ul>
    </div>`
  );
}

console.log(TodoApp());
