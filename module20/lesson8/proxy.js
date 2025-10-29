// Proxy 

// Controls access to an object 
// (e.g., virtual proxies for lazy initialization).


// Real Object
class RealCar {
  start() {
    console.log("Car is starting...");
  }

  stop() {
    console.log("Car is stopping...");
  }
}

// Proxy Class
class CarProxy {
  constructor() {
    this.car = new RealCar();
  }

  start() {
    console.log("Proxy: Checking if car can start...");
    this.car.start();
  }

  stop() {
    console.log("Proxy: Checking if car can stop...");
    this.car.stop();
  }
}

// Usage
const carProxy = new CarProxy();
carProxy.start(); // Proxy adds extra functionality before calling the real object
carProxy.stop();
