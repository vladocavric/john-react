import React, {useState} from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions] = useState(data);
	return (
		<main>
			<section className='container'>
				<h3>Questions And Answers About Login</h3>
				<div>
					{questions.map((q) => (
						<SingleQuestion {...q} />
					))}
				</div>
			</section>
		</main>
	);
}

export default App;
