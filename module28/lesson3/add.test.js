const add = require('./add');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

// Maybe we expect this to work like this?
test('adds 2 + "3" to return "23"', () => {
  expect(add(2, '3')).toBe('23');
});
