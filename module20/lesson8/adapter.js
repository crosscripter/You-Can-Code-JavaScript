// Adapter 

// Interfaces incompatible objects; 
// useful in integrating third-party libraries.


// Existing interface (incompatible with new system)
class OldSystem {
  getData() {
    return 'Data from the old system';
  }
}

// New interface (desired format)
class NewSystem {
  fetchData() {
    return 'Data from the new system';
  }
}

// Adapter to bridge the old system to the new interface
class Adapter {
  constructor(oldSystem) {
    this.oldSystem = oldSystem;
  }

  fetchData() {
    // Adapts old method to new interface
    return this.oldSystem.getData();
  } 
}

// Usage
const oldSystem = new OldSystem();
const adapter = new Adapter(oldSystem);
console.log(adapter.fetchData()); // Output: Data from the old system
