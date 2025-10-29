// State

// Alters behavior when an object’s state changes 
// (e.g., finite state machines).


// State
class State {
  handleRequest() {}
}

// Concrete State 1
class StateA extends State {
  handleRequest() {
    console.log("StateA: Handling request");
  }
}

// Concrete State 2
class StateB extends State {
  handleRequest() {
    console.log("StateB: Handling request");
  }
}

// Context
class Context {
  constructor() {
    this.state = new StateA();
  }

  setState(state) {
    this.state = state;
  }

  request() {
    this.state.handleRequest();
  }
}

// Client code
const context = new Context();

context.request(); // StateA: Handling request
context.setState(new StateB());
context.request(); // StateB: Handling request
