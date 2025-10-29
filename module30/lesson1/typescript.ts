// TypeScript


// Adds static typing to JS!
let x: number = 1;
let y: number = 2;

// Can type variables, signatures etc.
const add = (a: number, b: number) => a + b;

console.log(add(x, y));

// Catches type errors
console.log(add(1, '2'));


// Allows additional OOP features like:
// - protected members
// - readonly values
// - Interfaces etc.

interface Coordinated {
  get coordinates(): number[];
}

class Point implements Coordinated {
  constructor(protected readonly x: number, protected readonly y: number) {}

  get coordinates(): number[] {
    return [this.x, this.y];
  }

  toString(): string {
    return `(${this.coordinates.join(', ')})`;
  }
}

const p = new Point(1, 2);
console.log(p.coordinates);
console.log(p.toString());
