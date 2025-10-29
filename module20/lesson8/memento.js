// Memento

// Captures and restores an object’s state 
// (e.g., managing state history in Redux).


// Memento
class Memento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

// Originator
class Editor {
  constructor() {
    this.state = '';
  }

  setState(state) {
    this.state = state;
  }

  saveState() {
    return new Memento(this.state);
  }

  restoreState(memento) {
    this.state = memento.getState();
  }
}

// Client code
const editor = new Editor();
editor.setState('Hello, World!');
const savedState = editor.saveState();

editor.setState('New Text');
console.log(editor.state); // New Text

editor.restoreState(savedState);
console.log(editor.state); // Hello, World!
