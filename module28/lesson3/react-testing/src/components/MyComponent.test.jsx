import { vi, describe, expect, test } from 'vitest';
import { render, renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyComponent from './MyComponent';
import { useCustomHook } from '../hooks';
import MyOtherComponent from './MyOtherComponent';

describe('MyComponent test', () => {
  test('renders MyComponent', () => render(<MyComponent />));

  test('Shows hello message', () => {
    const { getByText } = render(<MyComponent />);
    expect(getByText(/hello/i)).toBeDefined();
  });

  test("Shows increment button", () => {
    // Get elements in the UI
    const { getByRole } = render(<MyComponent />);
    const button = getByRole('button', { name: /increment/i });
    expect(button).toBeDefined();
  })

  test('clicking increment button increments the counter', async () => {
    // Get elements in the UI
    const { getByTestId, getByRole } = render(<MyComponent />);
    const button = getByRole('button', { name: /Increment/i });
    
    // Simulate a user clicking the button!
    await userEvent.click(button);

    // Expect that clicking it incremented the count display!
    expect(getByTestId('count').textContent).toBe('Count: 1');
  });

  test("Testing hooks", () => {
    const { result } = renderHook(() => useCustomHook());
    const [count] = result.current;
    expect(count).toBe(0);
  });

  test('Mocking other UI Components', () => {
    // Mock the real component to avoid rendering 
    // out unnecessary components during testing
    vi.mock('./MyOtherComponent', () => ({
      default: () => <div>1,000,000 items...</div>
    }));

    // We render just the mocked version 
    // We would NOT want to render all 1M items!
    const { getByText } = render(<MyOtherComponent />); 
  
    // We should instead see our mock description not 
    // the items themselves in the app's UI/document 
    expect(getByText('1,000,000 items...')).toBeDefined();
  });
});
