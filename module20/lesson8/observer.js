// Observer

// Allows objects to subscribe to events 
// (e.g., pub/sub systems or EventEmitter in Node.js).


// Subject
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify() {
    this.observers.forEach(observer => observer.update());
  }
}

// Observer
class Observer {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(`${this.name} has been notified!`);
  }
}

// Client code
const subject = new Subject();
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify(); // Both observers are notified
subject.removeObserver(observer1);
subject.notify(); // Only Observer 2 is notified
