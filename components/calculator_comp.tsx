// components/Calculator.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Calculator = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState('');

  const calculate = async () => {
    const response = await fetch(`/api/hello?a=${a}&b=${b}&operation=${operation}`);
    const data = await response.json();
	if (data.result === undefined) {
		setResult('Error');
		return;
	}
    setResult(data.result);
  };

  const Title2 = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #d4af37; /* Gold color for the text */
`;

  return (
    <div>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      <button onClick={calculate}>Calculate</button>
      <div>Result: {result}</div>
    </div>
  );
};

export default Calculator;
