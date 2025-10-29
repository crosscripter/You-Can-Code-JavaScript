// Prototype 

// Allows object cloning, 
// often using Object.create() in JS


// Base Prototype Object
const carPrototype = {
  drive() { 
    console.log(`Driving a ${this.make} ${this.model}.`); 
  },

  clone() { 
    return Object.create(this); 
  },
};

// Creating an object from the prototype
const myCar = carPrototype.clone();
myCar.make = "Tesla";
myCar.model = "Model S";

const anotherCar = carPrototype.clone();
anotherCar.make = "Ford";
anotherCar.model = "Mustang";

// Using the objects
myCar.drive(); // Driving a Tesla Model S.
anotherCar.drive(); // Driving a Ford Mustang.
