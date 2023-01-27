import React, { useState } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'Dovla',
		age: '36',
		message: 'trla baba lan',
	});

  const handleChangeMsg = () => {
    setPerson(prevState => ({...person, message: 'nesto novo nesto divlje'}))
  }
	return (
		<>
			<h2>{person.name}</h2>
			<h2>{person.age}</h2>
			<h2>{person.message}</h2>
      <button className="btn" onClick={handleChangeMsg}>change message</button>
		</>
	);
};

export default UseStateObject;
