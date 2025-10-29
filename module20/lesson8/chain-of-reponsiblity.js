// Chain of Responsibility

// Passes requests along a chain until handled, 
// such as middleware in Express.js.


// Base handler class
class Handler {
  constructor(nextHandler = null) {
    this.nextHandler = nextHandler;
  }

  handleRequest(request) {
    if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    }
  }
}

// Concrete handler 1
class HandlerA extends Handler {
  handleRequest(request) {
    if (request === 'A') {
      console.log("Handler A processing request A");
    } else {
      super.handleRequest(request);
    }
  }
}

// Concrete handler 2
class HandlerB extends Handler {
  handleRequest(request) {
    if (request === 'B') {
      console.log("Handler B processing request B");
    } else {
      super.handleRequest(request);
    }
  }
}

// Client code
const handlerA = new HandlerA();
const handlerB = new HandlerB(handlerA);

handlerB.handleRequest('B'); // Handler B processes the request
handlerB.handleRequest('A'); // Handler A processes the request
