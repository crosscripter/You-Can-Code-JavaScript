// Jest Matchers
const add = require('./add');

// .toBe(value): Checks for strict equality.
test('.toBe()', () => {

  // Use toBe() to match simple values 
  expect(1).toBe(1)
  expect(true).toBe(true);
  expect('abc').toBe('abc');
});

// .toEqual(value): Checks for deep equality.
test('.toEqual()', () => {
  // NOTE: .toBe() will fail on deep equality checks!
  // expect([1, [2, 3]]).toBe([1, [2, 3]]);

  // Test arrays and objects for deep equality using .toEqual()
  expect([1, [2, 3]]).toEqual([1, [2, 3]]);
  expect({ a: { b: 2 } }).toEqual({ a: { b: 2 } });
});

// .toBeTruthy(): Checks if the value is truthy.
test('.toBeTruthy()', () => {
  expect(1).toBeTruthy();
  expect('truth').toBeTruthy();
  expect([]).toBeTruthy();
});

// .toContain(item): Checks if an array contains a specific item.
test('.toContain()', () => {

  // String and array matching using toContain()
  expect([1, 2, 3]).toContain(2);
  expect('abc').toContain('a');

  // NOTE: Cannot use on numbers!
  // expect(123).toContain(1);
});


// Using describe we can "describe" our test structure:

// Tests for the Calculator object
describe('Calculator', () => {

  // Tests related to the addition functionality
  describe('Addition', () => {

    // Specific test related to 1 + 2 = 3
    test('adds 1 + 2 to equal 3', () => {
      expect(add(1, 2)).toBe(3);
    });
  
    // Other tests...
  });

});

// Testing Hooks

describe('Array methods', () => {

  // Setup hooks 
  beforeAll(() => console.log('Running all tests...'));
  beforeEach(() => console.log('Running a test...'));

  // Some important tests
  test('Some Test', () => expect(1).toBe(1));
  test('Some Other Test', () => expect(2).not.toBe(1));

  // Teardown/Cleanup hooks 
  afterEach(() => console.log('Test ran!'));
  afterAll(() => console.log('All tests ran!'));
});


// Testing Common Data Types:

// Testing arrays
test('array contains value', () => {
  const arr = [1, 2, 3];
  expect(arr).toContain(2);
  expect(arr.length).toBe(3);
});

// Testing objects
test('object properties', () => {
  const obj = { name: 'John', age: 30 };
  expect(obj).toEqual({ name: 'John', age: 30 });
  expect(obj.age).toBe(30);
});


// Mocking Functions and Modules
const mockFunction = jest.fn();

test('Testing functions with mocks', () => {
  // Call our mock function
  mockFunction('Hello');

  // Expect things about the call to our function
  expect(mockFunction).toHaveBeenCalledWith('Hello');
  expect(mockFunction).toHaveBeenCalledTimes(1);
});


// Mocking modules

// Import a complex module we don't need to actually test 
// functionality in but it's required for our module 
// we're testing currently:
const complexModule = require('./complex-module')

// Mock the entire module after import
jest.mock('./complex-module');


test("Calls mock add function", () => {

  // Replace the complex operation with a mock implementation
  complexModule.complexFunction.mockImplementation((a, b, c) => a + b + c);

  // Call our mock version skipping all complex logic
  complexModule.complexFunction(1, 2, 3);

  // just check that we passed the correct params!
  expect(complexModule.complexFunction).toHaveBeenCalledWith(1, 2, 3);
});

