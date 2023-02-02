import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);
	useEffect(() => {
    const checkSize = () => {
      setSize(window.innerWidth)
    }

    const delayCheckSize = setTimeout(() => {     
      window.addEventListener('resize', checkSize)
    }, 500);
		return () => {
      clearTimeout(delayCheckSize)
    };
	}, []);
	return (
		<>
			<h2>Window</h2>
			<h4>{size}px</h4>
		</>
	);
};

export default UseEffectCleanup;
