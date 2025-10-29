// Singleton 

// Ensures a class has only one instance 
// (e.g., single database connection).


// Singleton Class
class Database {
  // Only single instance of Database
  static instance;


  constructor() {
    // Return same instance for all other constructions
    if (Database.instance) return Database.instance;


    // Initialize database connection here...
    Database.instance = this;
  }
}


// Singleton pattern overrides the constructor to only
// return one instance for any given construction:
const db1 = new Database();

// db2 gets the same Database.instance not a new one!
const db2 = new Database();
console.log(db1 === db2); // Output: true (same instance)