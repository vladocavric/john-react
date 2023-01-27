import React, { useState } from 'react';

const UseStateCounter = () => {
	const [count, setCount] = useState(0);
  const handleDecrease = () => {
    setCount(prevState => --prevState)
  }
  const handleReset = () => {
    setCount(0)
  }
  const handleIncrease = () => {
    setCount(prevState => ++prevState)
  }
	return (
		<>
			<h2>useState counter example</h2>
			<h3>Count: {count}</h3>
			<div>
				<button className='btn' onClick={handleDecrease}>-</button>
				<button className='btn' onClick={handleReset}>reset</button>
				<button className='btn' onClick={handleIncrease}>+</button>
			</div>
		</>
	);
};

export default UseStateCounter;
