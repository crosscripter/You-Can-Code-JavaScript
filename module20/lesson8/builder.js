// Builder 

// Constructs complex objects step-by-step 
// (e.g., configuration objects).


// Product class
class Car {
  constructor() {
    this.make = null;
    this.model = null;
    this.year = null;
  }
}

// Builder class
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setMake(make) {
    this.car.make = make;
    return this; // returning this enables chaining calls
  } 

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  build() {
    return this.car; // Returns the final product
  } 
}

// Usage
const car = new CarBuilder()
    .setMake('Toyota')
    .setModel('Corolla')
    .setYear(2022)
    .build();

console.log(car);
// Outputs: { make: 'Toyota', model: 'Corolla', year: 2022 }
