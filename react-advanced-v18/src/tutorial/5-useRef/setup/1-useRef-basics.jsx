import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const input = useRef()
  const div = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input.current.value, div.current.innerText)
  }
	return (
		<>
			<form onSubmit={handleSubmit} className="form"> 
        <input type="text" ref={input}/>
        <button>submit</button>
      </form>
      <div ref={div}>some text from ref</div>
		</>
	);
};

export default UseRefBasics;
