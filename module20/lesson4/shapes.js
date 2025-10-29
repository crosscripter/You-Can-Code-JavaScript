// 🐥 Inheritance (continued)


// Example: Inheritance with Shapes 

// Base Shape class (parent)
class Shape { }


// Rectangle class inherits from Shape
class Rectangle extends Shape {


  constructor(width, height) {
    super(); // Call the super class constructor
    this.width = width;
    this.height = height;
  }


  // Method specific to Rectangle
  area() { return this.width * this.height; }


  // Override Object.toString() method
  // rect.toString() => "Rectangle (2x4)"
  toString() {
    return `Rectangle (${this.width}x${this.height})`;
  }
}


// Circle class inherits from Shape
class Circle extends Shape {
  constructor(radius) {
    super(); // Initialize parent class
    this.radius = radius;
  }


  // Overridden method specific to Circle
  area() { return Math.PI * Math.pow(this.radius, 2); }
}


// Square class extends Rectangle (a square is a special rectangle)
class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Both width and height are the same
    /* Inherited Props */
  }


  /* Inherited Methods: */
  // Override Rectangle.toString() method
  toString() {
    // Call super class method using super keyword
    // and replace type name Rectangle with Square instead
    return super.toString().replace('Rectangle', 'Square');
  }
}


// Create a rectangle and use the method to calculate area
const myRectangle = new Rectangle(10, 5);
console.log(`Rectangle area: ${myRectangle.area()}`);
// Output: Rectangle area: 50


// Notice that Circle has its own way to calculate area
// This is NOT related to the Rectangle.area() method
const myCircle = new Circle(3);
console.log(`Circle area: ${myCircle.area()}`);
// Output: Circle area: 28.27

// Now create a new Square (which is just a equal Rectangle)
const mySquare = new Square(4);


// Notice that area is from Rectangle.
// We reuse the width and height calculation
// because Squares are just specialized Rectangles
console.log(`Square area: ${mySquare.area()}`);
// Output: Square area: 16
