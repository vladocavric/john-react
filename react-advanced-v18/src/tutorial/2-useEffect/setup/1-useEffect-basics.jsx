import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
    if(counter > 5) {
      document.title = `some title ${counter}`
    }
  }, [counter]);
	return (
		<div>
			<h1>neki naslov {counter}</h1>
      <button className="btn" onClick={() => setCounter(prevState => prevState + 1)}>+</button>
		</div>
	);
};

export default UseEffectBasics;
