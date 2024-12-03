// src/app/components/Counter.js
"use client";

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1); 
  };

  const handleIncrementAfterDelay = () => {
    setTimeout(() => {
      setCount(count + 1);  
    }, 2000);
  };

  const handleIncrementTwice = () => {
    setCount(count + 1); 
    setCount(count + 1); 
  };

  const handleCorrectIncrementTwice = () => {
    setCount(prevCount => prevCount + 2); 
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIncrementAfterDelay}>Increment After Delay</button>
      <button onClick={handleIncrementTwice}>Increment Twice</button>
      <button onClick={handleCorrectIncrementTwice}>Correct Increment Twice</button>
    </div>
  );
}

export default Counter;
