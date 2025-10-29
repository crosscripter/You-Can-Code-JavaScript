// Iterator 

// Provides a standard way to traverse data 
// (e.g., custom iterators for collections).


// Iterator
class NumberIterator {
  constructor(numbers) {
    this.numbers = numbers;
    this.index = 0;
  }

  next() {
    if (this.index < this.numbers.length) {
      return { value: this.numbers[this.index++], done: false };
    } else {
      return { done: true };
    }
  }

  hasNext() {
    return this.index < this.numbers.length;
  }
}

// Client code
const numbers = [1, 2, 3, 4, 5];
const iterator = new NumberIterator(numbers);

while (iterator.hasNext()) {
  const result = iterator.next();
  console.log(result.value); // Logs: 1, 2, 3, 4, 5
}
