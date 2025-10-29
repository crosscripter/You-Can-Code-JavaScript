// Decorator 

// Adds behavior to objects dynamically (e.g., enhancing functions).


// Base component
class Coffee {
  cost() {
    return 5; // Base price of plain coffee
  }

  description() {
    return 'Plain coffee';
  }
}

// Decorator
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2; // Adding milk costs $2
  }

  description() {
    return `${this.coffee.description()} with milk`;
  }
}

// Usage
const plainCoffee = new Coffee();
console.log(plainCoffee.description(), '$' + plainCoffee.cost()); // Plain coffee $5

const milkCoffee = new MilkDecorator(plainCoffee);
console.log(milkCoffee.description(), '$' + milkCoffee.cost()); // Plain coffee with milk $7
