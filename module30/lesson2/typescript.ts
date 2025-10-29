// TypeScript
// Adds static typing to JS


// Types for variables
let name: string = 'Alice';
let age: number = 30;
let isActive: boolean = true;

// Adds other OOP concepts like interfaces:

interface User {
  name: string;
  age: number;
}

// we can define a user as a User object
const user: User = { name: 'Alice', age: 30 };

// Typescript will flag any members that doesn't exist in the type!
console.log(user.location);

// You can type signatures for functions and classes too:
function greet(user: User): string {
  return `Hello, ${user.name}`;
}

// TS will catch type errors
greet('Bob');   // Bob is a string not a User
console.log(greet(user));

// Advanced types (ie. generics etc.)
function identity<T>(arg: T): T {
  return arg;
}

const output = identity<string>('Hello');
console.log(output);

// Mapped types
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

interface Todo {
  title: string;
  completed: boolean;
}

type ReadOnlyTodo = ReadOnly<Todo>; // All properties are readonly

