// 🐓 Static Classes


// Using the static Keyword 🔑
// When we declare a member as static, 
// we use the static keyword before its 
// definition. Here’s how it works:

class MathHelper {
  static PI = 3.14;

  static areaOfCircle(radius) {
    return this.PI * radius * radius;
  }
}

// No instance required, method attached statically (ie. directly) to type
console.log(MathHelper.PI);               // Output: 3.14
console.log(MathHelper.areaOfCircle(5));  // Output: 78.5

// ⛈️ Accessing Static Members
// Static properties and methods can be accessed directly 
// through the class name without creating an instance:

console.log(MathHelper.PI);              // Accessing static property
console.log(MathHelper.areaOfCircle(3)); // Accessing static method
 