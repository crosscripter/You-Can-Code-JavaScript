// Composite


// Manages hierarchies of objects,
// commonly in tree structures (e.g., UI component trees).


// Component: Common interface
class Component {
  operation() {
    throw new Error('This method should be overridden');
  }
}

// Leaf: Represents individual objects
class Leaf extends Component {
  constructor(name) {
    super();
    this.name = name;
  }

  operation() {
    return `Leaf: ${this.name}`;
  }
}

// Composite: Represents groups of objects
class Composite extends Component {
  constructor() {
    super();
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    this.children = this.children.filter(child => {
      return child !== component
    });
  }

  operation() {
    return this.children.map(child => child.operation()).join(', ');
  }
}

// Usage
const leaf1 = new Leaf('A');
const leaf2 = new Leaf('B');

const composite = new Composite();
composite.add(leaf1);
composite.add(leaf2);

console.log(composite.operation()); // Output: Leaf: A, Leaf: B
