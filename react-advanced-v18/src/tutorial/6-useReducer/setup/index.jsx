import React, { useEffect, useReducer, useState } from 'react';
import { data } from '../../../data';
import Modal from './Modal';
import reducer from './reducer';
// reducer function
//add item
//remove item
// no value
// close modal

const Index = () => {
	const [name, setName] = useState('');
	const [people, dispatchPeople] = useReducer(reducer, {
		people: [...data],
		modalOpen: false,
    modalContent: ''
	});

	const handleChangeName = (e) => {
		setName(e.target.value.trimStart());
	};

	const closeModal = () => {
		dispatchPeople({ type: 'CLOSE_MODAL' });
	};

  const handleRemoveItem = (id) => {
    dispatchPeople({type: 'REMOVE_ITEM', id})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
		name.trim();
		if (name === '' || !name.trim()) {
			dispatchPeople({type: 'EMPTY_VALUE'})
		} else {
      dispatchPeople({type: 'ADD_ITEM', person: {name, id: new Date().getTime().toString()}})
    }
  }

	return (
		<>
			{people.modalOpen && (
				<Modal
					closeModal={closeModal}
					modalContent={people.modalContent}
				/>
			)}
			<form className='form' onSubmit={handleSubmit}>
				<input type='text' value={name} onChange={handleChangeName} />
				<button type='submit'>Add</button>
			</form>
			{people.people.map((person) => (
				<div key={person.id} className='item'>
					{person.name}
          <button onClick={() => handleRemoveItem(person.id)}>remove</button>
				</div>
			))}
		</>
	);
};

export default Index;
