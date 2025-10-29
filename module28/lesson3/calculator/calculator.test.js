const { calculate } = require('./calculator');

test('calculates addition correctly', () => {
  expect(calculate(4, 2, 'add')).toBe(6);
});

test('calculates division by zero', () => {
  expect(calculate(4, 0, 'divide')).toBe(Infinity);
});
