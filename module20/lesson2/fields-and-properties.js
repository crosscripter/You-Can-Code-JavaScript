// ⚾ Fields and Properties 


// Fields in Class Constructors
// Fields are variables that hold the data for an instance of a class. They are defined in the constructor using the this keyword:

class Rectangle {
  constructor(width, height) {
    this.width = width; // Field for width
    this.height = height; // Field for height
  }
}


// Create a rectangle with width 10, height 5
const rect = new Rectangle(10, 5);
console.log(rect.width); // Output: 10


// 🤝 Custom Getter and Setter Properties
// Getters and setters allow you to control access to properties, enabling encapsulation. 
// You can define them using the get and set keywords:

class Circle {
  constructor(radius) {
    this._radius = radius; // The underscore indicates not public
  }

  // Getter for radius
  get radius() {
    return this._radius;
  }

  // Setter for radius
  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      console.error('Radius must be positive!');
    }
  }
}

// Example usage
const circle = new Circle(3);
console.log(circle.radius); // Output: 3
circle.radius = 5; // Setting a new radius
circle.radius = -2; // Output: Radius must be positive!
