// Factory 

// Used for object creation, especially when the exact type 
// isn’t known in advance.


// Factory class
class PersonFactory {
  createPerson(type, name) {
    switch (type) {
      case 'Student':
        return new Student(name);
      case 'Teacher':
        return new Teacher(name);
      default:
        return new Guest(name);
    }
  }
}

// Different Types of Classes
class Student {
  constructor(name) {
    this.name = name;
    this.role = 'Student';
  }
}
class Teacher {
  constructor(name) {
    this.name = name;
    this.role = 'Teacher';
  }
}
class Guest {
  constructor(name) {
    this.name = name;
    this.role = 'Guest';
  }
}

// Using the Factory
const factory = new PersonFactory();

const student = factory.createPerson('Student', 'Alice');
const teacher = factory.createPerson('Teacher', 'Bob');
const guest = factory.createPerson('Unknown', 'Charlie');

console.log(student); // Student { name: "Alice", role: "Student" }
console.log(teacher); // Teacher { name: "Bob", role: "Teacher" }
console.log(guest); // Guest { name: "Charlie", role: "Guest" }
