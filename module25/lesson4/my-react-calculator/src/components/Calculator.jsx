import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const clearDisplay = () => setInput('');

  const appendNumber = num => setInput(input + num);

  const calculate = () => {
    try {
      setInput(eval(input));
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />

      <div className="row">
        <Button label="7" onClick={() => appendNumber(7)} />
        <Button label="8" onClick={() => appendNumber(8)} />
        <Button label="9" onClick={() => appendNumber(9)} />
        <Button label="&times;" onClick={() => appendNumber('*')} />
      </div>
      <div className="row">
        <Button label="4" onClick={() => appendNumber(4)} />
        <Button label="5" onClick={() => appendNumber(5)} />
        <Button label="6" onClick={() => appendNumber(6)} />
        <Button label="&minus;" onClick={() => appendNumber('-')} />
      </div>
      <div className="row">
        <Button label="1" onClick={() => appendNumber(1)} />
        <Button label="2" onClick={() => appendNumber(2)} />
        <Button label="3" onClick={() => appendNumber(3)} />
        <Button label="+" onClick={() => appendNumber('+')} />
      </div>
      <div className="row">
        <Button label="C" onClick={clearDisplay} />
        <Button label="0" onClick={() => appendNumber(0)} />
        <Button label="." onClick={() => appendNumber('.')} />
        <Button label="=" onClick={calculate} />
      </div>
    </div>
  );
};

export default Calculator;
