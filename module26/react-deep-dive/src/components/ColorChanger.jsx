import React, { useState, useEffect } from 'react';

function ColorChanger() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('white');

  // Effect to change background color when 'count' changes
  useEffect(() => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    setColor(colors[count % colors.length]); // Cycle through colors
  }, [count]); // Re-run effect only when 'count' changes

  return (
    <div
      title="Click to change the color"
      onClick={() => setCount(count + 1)}
      style={{
        userSelect: 'none',
        cursor: 'pointer',
        color: color == 'yellow' ? 'black' : 'white',
        backgroundColor: color,
        width: 100,
        height: 100,
        textAlign: 'center',
      }}
    >
      <h4 style={{padding: '30% 0'}}>{color}</h4>
    </div>
  );
}

export default ColorChanger;
