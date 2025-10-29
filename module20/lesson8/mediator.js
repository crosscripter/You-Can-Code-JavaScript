// Mediator

// Coordinates interaction between objects 
// (e.g., event-driven architecture).


// Mediator
class ChatRoom {
  sendMessage(user, message) {
    console.log(`${user.name} says: ${message}`);
  }
}

// Colleague
class User {
  constructor(name, chatRoom) {
    this.name = name;
    this.chatRoom = chatRoom;
  }

  sendMessage(message) {
    this.chatRoom.sendMessage(this, message);
  }
}

// Client code
const chatRoom = new ChatRoom();
const john = new User('John', chatRoom);
const jane = new User('Jane', chatRoom);

john.sendMessage('Hello, Jane!');
jane.sendMessage('Hi, John!');
