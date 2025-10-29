// Template Method

// Defines a base algorithm, allowing subclasses 
// to change specific steps.


// Abstract Class (Template Method)
class Game {
  play() {
    this.start();
    this.playTurn();
    this.end();
  }

  start() {
    console.log("Game starting...");
  }

  // Abstract methods to be implemented by subclasses
  playTurn() {}
  end() {
    console.log("Game ending...");
  }
}

// Concrete Class 1
class Soccer extends Game {
  playTurn() {
    console.log("Playing soccer turn...");
  }
}

// Concrete Class 2
class Basketball extends Game {
  playTurn() {
    console.log("Playing basketball turn...");
  }
}

// Client code
const soccerGame = new Soccer();
soccerGame.play(); // Starts, plays turn, ends soccer game

const basketballGame = new Basketball();
basketballGame.play(); // Starts, plays turn, ends basketball game
