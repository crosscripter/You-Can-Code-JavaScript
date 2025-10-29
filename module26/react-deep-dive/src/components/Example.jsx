import React from 'react';
import CodeBlock from './CodeBlock';

export default function Example({ title, children, source }) {
  return (
    <div className="tag">
      <header>
        <h5>{title}</h5>
      </header>

      <div className='component'>
        {children}
      </div>

      <CodeBlock language="jsx">
        {source}
      </CodeBlock>
    </div>
  );
}
