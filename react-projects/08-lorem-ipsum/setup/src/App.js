import React, { useState } from 'react';
import data from './data';
function App() {
	const [paragraphs, setParagraphs] = useState('');
  const [texts, setTexts] = useState([]);
  const handleChange = (e) => {
    setParagraphs(e.target.value)
  }
	const handleSubmit = (e) => {
		e.preventDefault();
    const isNotANo = isNaN(paragraphs)
    console.log(isNotANo)
    const times = +paragraphs < 1 || isNotANo ? 1 : +paragraphs > 8 ? 8 : +paragraphs
    console.log(times)
    const newTexts = []
    for (let index = 0; index < times; index++) {
      const textIndex = Math.floor(Math.random() * data.length)
      console.log(textIndex)
      newTexts.push(data[textIndex])
    }
    setTexts(newTexts)
    setParagraphs('')
	};
	return (
		<main>
			<section className='section section-center'>
				<h3>tired of boring lorem ipsum</h3>
				<form onSubmit={handleSubmit} className='lorem-form'>
					<div className='controlled-input'>
						<label>
							paragraphs{' '}
							<input
								type='text'
								onChange={handleChange}
								value={paragraphs}
							/>
						</label>
					</div>
					<button className='btn'>generate</button>
				</form>
        {!!texts && texts.map((text, index) => <p key={index} className='result'>{text}</p>)}
				{/* <p className='result'>{data[0]}</p> */}
			</section>
		</main>
	);
}

export default App;
