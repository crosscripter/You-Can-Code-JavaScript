// Flyweight

// Minimizes memory usage by sharing data 
// across similar objects (e.g., caching).


// Flyweight Class
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
    return `${this.make} ${this.model}`;
  }
}

// Flyweight Factory
class CarFactory {
  constructor() {
    this.cars = {};
  }

  getCar(make, model) {
    const key = `${make}-${model}`;
    if (!this.cars[key]) {
      this.cars[key] = new Car(make, model);
    }
    return this.cars[key];
  }
}

// Usage
const factory = new CarFactory();

const car1 = factory.getCar('Toyota', 'Corolla');
const car2 = factory.getCar('Toyota', 'Corolla');
const car3 = factory.getCar('Honda', 'Civic');

console.log(car1 === car2); // true, same instance reused
console.log(car1 === car3); // false, different instance
