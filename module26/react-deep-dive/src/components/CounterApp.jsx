import React, { useContext, useState, createContext } from 'react';

const CountContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function DisplayCount() {
  const { count } = useContext(CountContext);
  return <p>Count: {count}</p>;
}

function IncrementButton() {
  const { setCount } = useContext(CountContext);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Increment
    </button>
  );
}

export default function CounterApp() {
  return (
    <CounterProvider>
      <DisplayCount />
      <IncrementButton />
    </CounterProvider>
  );
}
