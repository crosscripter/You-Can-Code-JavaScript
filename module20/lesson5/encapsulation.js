// 🥚 Encapsulation 


// 👓 Member Visibility Levels in OOP in☕JavaScript
// In JS Object-Oriented Programming (OOP), 
// member visibility levels control access to class properties 
// and methods. The main visibility levels are:

// Public Members: 
// Accessible from anywhere, allowing interaction with class 
// instances directly. Default visibility for class members is public.

//#region 
let myDog;
//#endregion

class Cat {
  // public member (default level of visibility)
  meow() { console.log('Meow!'); }
}

let cat = new Cat();
cat.meow(); // Output: Meow!


// Private Members: 
// Accessible ONLY within the class itself, 
// promoting encapsulation. Defined using the # syntax.

class Person {
  // Private field age (starts with #)
  #age;

  constructor(age) { this.#age = age; }

  // public method returns value of private field
  getAge() { return this.#age; }
}

let bob = new Person(55);
console.log(bob.getAge()); // Output: 55

//! console.log(bob.#age);
// ❌ Error: Private field '#age' must be in an enclosing class


// Protected Members: 
// Not natively supported in JS but often simulated by naming 
// conventions (e.g., prefixing with an underscore _). 
// Intended for use within the class and its subclasses.

class Animal {
  // Define a "protected" (by convention only) method
  _sound() { return 'Some sound'; }
}

class Dog extends Animal {
  bark() {
    // Access our Animal._sound() "protected" method
    console.log(this._sound());
  }
}

myDog = new Dog();
myDog.bark(); // Output: Some sound

// Shouldn't call protected _sound() directly, but you can in JS
console.log(myDog._sound());


// All Visibility Levels Example:

class BankAccount {
  // Private member using the # character
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance; // Initialize the private balance
  }

  // Public method to deposit money (default is public)
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log('Deposit amount must be positive');
    }
  }

  // Public method to check the balance
  getBalance() {
    return this.#balance; // Accessing private member
  }

  // Protected method
  // (not officially supported, but implied by convention)
  _logTransaction(transaction) {
    console.log(`Transaction: ${transaction}`);
  }
}

// usage
const account = new BankAccount(100);

// Call public method deposit
account.deposit(50);

// Call public method getBalance() to access private property value
console.log(`Current Balance: $${account.getBalance()}`);
// Output: Current Balance: $150


//! console.log(account.#balance);
//❌ Error: Private field '#balance' must be in an enclosing class
