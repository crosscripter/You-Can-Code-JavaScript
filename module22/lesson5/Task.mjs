export default class Task {
  constructor(title, completed = false) {
    this.title = title;
    this.completed = completed;
  }

  markCompleted() {
    this.completed = true;
  }
}