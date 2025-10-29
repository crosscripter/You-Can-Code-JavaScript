// Facade 

// Simplifies complex systems with a single interface 
// (e.g., APIs combining multiple functions).


// Subsystem: Lighting
class Lighting {
  turnOn() {
    console.log('Lights are ON');
  }

  turnOff() {
    console.log('Lights are OFF');
  }
}

// Subsystem: AirConditioning
class AirConditioning {
  turnOn() {
    console.log('Air conditioning is ON');
  }

  turnOff() {
    console.log('Air conditioning is OFF');
  }
}

// Facade: SmartHome
class SmartHome {
  constructor() {
    this.lighting = new Lighting();
    this.airConditioning = new AirConditioning();
  }

  enterHome() {
    console.log('Entering home...');
    this.lighting.turnOn();
    this.airConditioning.turnOn();
  }

  leaveHome() {
    console.log('Leaving home...');
    this.lighting.turnOff();
    this.airConditioning.turnOff();
  }
}

// Usage
const mySmartHome = new SmartHome();
mySmartHome.enterHome(); // Turns on lights and air conditioning
mySmartHome.leaveHome(); // Turns off lights and air conditioning
