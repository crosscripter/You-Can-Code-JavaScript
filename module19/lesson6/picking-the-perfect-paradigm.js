// ⛏️ Picking the Perfect Paradigm


// Start out procedural, 
// organize your reusable code blocks into short, pure, generic functions 
// that can easily be reused. Pretend like if you could have a built-in 
// function that would do something super useful for you already, what would 
// it be called, how would it work? etc

// Function to print out x and y coordinates of a point
function printCoordinates(x, y) {
    console.log(`(${x}, ${y})`);
}

// Function to create a point
function createPoint(x, y) {
    const point = { x, y };
    return point;
}

// Man, I wish there was a function that I could pass
// x and y coordinates to and get back a point object!
const a = createPoint(1, 2);
console.log(a);

// Man I wish I could type something like printCoordinates
// and print out the point's coordinates in the (x, y) format:
printCoordinates(a.x, a.y);


// Next, when you find that you are passing the same object, 
// set or array of data values over and over to the same functions, 
// it may be time to group that state data with the behavior in a class 
// and move into using Object-Oriented programming to keep the related 
// code together.  
// 
// I personally avoid deeply nested class hierarchies whenever possible, 
// preferring composition over inheritance, but to each his own, 
// they each have their place.

// Man I keep making a bunch of these points and coordinates
// would be nice if I could keep them together in one object...
let b = createPoint(-1, 2);
const bCoords = printCoordinates(b.x, b.y);

let c = createPoint(2, 3);
const cCoords = printCoordinates(c.x, c.y);


// Change to OOP:

// Create a class to keep state and functionality together!
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  coordinates() {
    console.log(`(${this.x}, ${this.y})`);
  }
}

// Create two instances
b = new Point(-1, 2);
c = new Point(2, 3);

// Call their own methods on each!
b.coordinates();
c.coordinates();


// Inside of my methods or procedures of my objects and classes 
// I use the principles from the pure functional programming world, 
// all functions should be pure and should not depend on any outside 
// state, or have side effects if at all possible, organize behavior 
// into pure and impure methods so that your bugs are easier to track 
// down later. Always prefer short composable functions over long 
// monolithic ones, and keep your functions high-level and reusable, 
// generic and focused.  Never reuse a variable with the exceptions 
// of i and j loop variables and maybe e for exceptions, 
// otherwise declare everything const to begin and pretend that all 
// objects are immutable unless you need to modify them as a last 
// resort.

// The Point.coordinates() method calls console.log which
// actually effects global state it's _impure_ let's fix that
// by applying FP principals so that it's easier to test.

new Point(1, 2).coordinates() // how we test this???

Point.prototype.coordinates = function() {
    return `(${this.x}, ${this.y})`;
};

b = new Point(-1, 2);
c = new Point(2, 3);
coords = [b, c].map(point => point.coordinates())
console.log(coords);

// Using FP we don't modify state and return pure values
// which makes testing this function trivial!
assert(c.coordinates() === `(2, 3)`);
