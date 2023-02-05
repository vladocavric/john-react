import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
	const [submittedColor, setSubmittedColor] = useState('');
	const [colors, setColors] = useState([]);
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			const color = new Values(submittedColor);
			setColors([...color.all(10)]);
		} catch (err) {
      console.log(err)
			setError(true);
		}
	};

  const handleChange = e => {
    setSubmittedColor(e.target.value)
    setError(false)
  }
	return (
		<section className='section'>
			<div className='container'>
				<h3>Color Generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						onChange={handleChange}
            className={error ? 'error' : null}
					/>{' '}
					<button className='btn'>submit</button>
				</form>
			</div>
			<div className='colors'>
				{colors.map((color, i) => (
					<SingleColor key={i} {...color} index={i}/>
				))}
			</div>
		</section>
	);
}

export default App;
