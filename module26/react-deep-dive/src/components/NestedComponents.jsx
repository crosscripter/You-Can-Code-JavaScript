import React, { useState } from 'react';

const Child1 = ({ message }) => <p className='child'>Message: {message}</p>;

const Child2 = ({ setMessage }) => (
  <button className='child' onClick={() => setMessage('Updated from Child2!')}>
    Update Message
  </button>
);

function ParentNestedComponent() {
  const [message, setMessage] = useState('Hello from Parent!');

  return (
    <div className='parent'>
      <Child1 message={message} />
      <Child2 setMessage={setMessage} />
    </div>
  );
}

export default ParentNestedComponent;
