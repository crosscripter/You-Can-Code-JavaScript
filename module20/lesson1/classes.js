// 🐔 Classes


// Define our new class with the class keyword

class Car {

  // Constructors are called when we use the new operator
  // They construct a new object from the class blueprint
  
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

}


// Create a new object or instance of our Car class!
const myCar = new Car('Tesla', 'Model 3', 2023);
console.log(myCar);

// Output: Car { make: 'Tesla', model: 'Model 3', year: 2023 }
