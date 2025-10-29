import { test, expect } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import Calculator from './Calculator'; // Assuming this is your main component

test('Shows display correctly', () => {
  const { getByRole } = render(<Calculator />);
  expect(getByRole('textbox', { class: 'display' })).toBeDefined();
});

test("Shows number buttons correctly", () => {
  const { getByRole } = render(<Calculator />);
  const digits = [0,1,2,3,4,5,6,7,8,9];

  digits.forEach(digit => {
    const button = getByRole('button', { name: digit });
    expect(button).toBeDefined();
  });
});

test('Shows operation buttons correctly', () =>{
  const { getByRole } = render(<Calculator />);
  const operations = ['+', '−', '×', '=', 'C'];

  operations.forEach(operation => {
    const button = getByRole('button', { name: operation });
    expect(button).toBeDefined();
  });
});

// Integration Tests
test("Display shows calculation correctly", () => {
  const { getByRole } = render(<Calculator />);
  const display = getByRole('textbox', { class: 'display' });

  fireEvent.click(getByRole('button', { name: '1' }));
  expect(display.value).toBe('1');

  fireEvent.click(getByRole('button', { name: '+' }));
  expect(display.value).toBe('1+');

  fireEvent.click(getByRole('button', { name: '2' }));
  expect(display.value).toBe('1+2');

  fireEvent.click(getByRole('button', { name: '=' }));
  expect(display.value).toBe('3');
});
