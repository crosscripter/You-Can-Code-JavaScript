import React from 'react';

export default function MyOtherComponent() {
  const items = [];
  for (let i = 0; i < 1_000_000; i++) items.push(i);
  console.log(items.length, 'items rendered!');

  <div className="items">
    {items.map(item => (
      <div key={item} className="item">
        {item}
      </div>
    ))}
  </div>;
}
