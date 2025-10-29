//  🍸 Class Methods


// Defining Methods in a Class
// To define a method in a class, you simply declare it like a regular function but without the function keyword. Instead we use the class keyword, here’s how you can do it:

class Rectangle {

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate the area
  area() {
    return this.width * this.height; // Instance props using 'this'
  }

  // Method to calculate the perimeter
  perimeter() {
    return 2 * (this.width + this.height);
  }
}

// Example usage
const rect = new Rectangle(10, 5);
console.log(rect.area()); // Output: 50
console.log(rect.perimeter()); // Output: 30
