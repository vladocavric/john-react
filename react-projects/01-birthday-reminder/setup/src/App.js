import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
	const [list, setList] = useState(data);
	const handleClearList = () => {
		setList([]);
	};
	return (
		<>
			<main>
        <section className="container">
					<h3>{list.length} birthdays today</h3>
					<List list={list}  />
          <button onClick={handleClearList}>Clear All</button>
        </section>
			</main>
		</>
	);
}

export default App;
