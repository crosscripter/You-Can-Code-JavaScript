import React from 'react';
import MyComponent from './MyComponent';
import { render, screen } from '@testing-library/react';

function MyComponent() {
  return (
    <a href="reactjs.org">Learn React</a>
  );
}

test('renders learn react link', () => {
  render(<MyComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
