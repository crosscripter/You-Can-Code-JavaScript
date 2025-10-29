// 🐥 Inheritance


// Inheritance Example using Cars:

// Our base Car class from lesson 1:
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.make} ${this.model} is starting`);
  }
}


// Let's define a new class (ie. a subclass extends a superclass)
// We use the extends keyword to say we want to extend the Car class

class ElectricCar extends Car {

  // Each class has their own constructor BUT when it's a subclass
  // we MUST call the super class constructor using super()
  constructor(make, model, year, batteryRange) {

    super(make, model, year); // Call the super class constructor

    // After calling super class constructor above
    // we have the same properties/methods in this class
    // As if we defined them here again:
    // —--------------------------------
    // this.make = make;
    // this.model = model;
    // this.year = year;

    // This is a new property based on EVs
    this.batteryRange = batteryRange;
  }

  charge() {
    console.log(
      // From Car 👇           from ElectricCar 👇
      `Charging ${this.make} (range ${this.batteryRange} miles)`
    );
  }
}

const myEV = new ElectricCar('Tesla', 'Model S', 2024, 400);

// Car 👇 method, not defined on ElectricCar but inherited from Car!
myEV.start(); // Output: Tesla Model S is starting!

// This 👇 method only defined on ElectricCar
myEV.charge(); // Output: Charging Tesla (range 400 miles)
