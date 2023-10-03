import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      // Show error message or handle as needed
      alert("Count cannot exceed 10");
    }
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      // Show error message or handle as needed
      alert("Count cannot go below 0");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
      </header>
    </div>
  );
}

export default Counter;
