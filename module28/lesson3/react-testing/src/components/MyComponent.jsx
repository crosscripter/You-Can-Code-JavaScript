import React, { useState } from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);
 
  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Hello</h1>
      <p data-testid="count">Count: {count}</p>
      <button onClick={() => increment()}>
        Increment
      </button>
    </div>
  );
}
