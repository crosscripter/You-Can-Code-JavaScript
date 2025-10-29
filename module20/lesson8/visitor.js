// Visitor

// Adds operations to objects 
// without modifying them 
// (e.g., handling data structures).

// Visitor interface
class Visitor {
  visit(element) {
    // Method to be overridden by each concrete visitor
  }
}

// Element classes
class Book {
  accept(visitor) {
    visitor.visit(this);
  }
}

class Movie {
  accept(visitor) {
    visitor.visit(this);
  }
}

// Concrete Visitor
class PriceVisitor extends Visitor {
  visit(element) {
    if (element instanceof Book) {
      console.log("Price of book: $10");
    } else if (element instanceof Movie) {
      console.log("Price of movie: $15");
    }
  }
}

// Client code
const book = new Book();
const movie = new Movie();
const priceVisitor = new PriceVisitor();

book.accept(priceVisitor); // Price of book: $10
movie.accept(priceVisitor); // Price of movie: $15
