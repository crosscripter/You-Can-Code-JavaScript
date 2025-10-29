// Strategy

// Selects algorithms at runtime, 
// often used in sorting or validation.


// Strategy Interface
class Strategy {
  execute(a, b) {}
}

// Concrete Strategy 1: Add
class AddStrategy extends Strategy {
  execute(a, b) {
    return a + b;
  }
}

// Concrete Strategy 2: Subtract
class SubtractStrategy extends Strategy {
  execute(a, b) {
    return a - b;
  }
}

// Context
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy(a, b) {
    return this.strategy.execute(a, b);
  }
}

// Client code
const addStrategy = new AddStrategy();
const subtractStrategy = new SubtractStrategy();

const context = new Context(addStrategy);
console.log(context.executeStrategy(10, 5)); // 15

context.setStrategy(subtractStrategy);
console.log(context.executeStrategy(10, 5)); // 5
