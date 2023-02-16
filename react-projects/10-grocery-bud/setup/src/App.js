import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
	const [alert, setAlert] = useState({});
	const [items, setItems] = useState([]);
	const [enteredItem, setEnteredItem] = useState('');
	const [editMode, setEditMode] = useState(false);
	const [editedItemIndex, setEditedItemIndex] = useState(null);

	const handleChange = (e) => {
		setEnteredItem(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		enteredItem.trim();
		if (enteredItem === '' || !enteredItem.trim()) {
			return;
		}
		if (editMode) {
			const allItems = [...items];
			allItems.splice(editedItemIndex, 1, enteredItem);
			setItems(allItems);
			setAlert({ type: 'success', text: 'grocery edited' });
			setEditMode(false);
		} else {
			setItems((prevState) => [...prevState, enteredItem]);
			setAlert({ type: 'success', text: 'grocery added to list' });
		}
		setEnteredItem('');
	};

	const handleDelete = (index) => {
		const allItems = [...items];
		allItems.splice(index, 1);
		setItems([...allItems]);
		setAlert({ type: 'delete', text: 'grocery was deleted from the list' });
	};

	const handleEdit = (index) => {
		setEditMode(true);
		setEditedItemIndex(index);
		setEnteredItem(items[index]);
	};

	const handleClearAll = () => {
		setItems([]);
		localStorage.removeItem('items');
	};

	useEffect(() => {
		let alertTimer;
		if (alert.text) {
			alertTimer = setTimeout(() => {
				setAlert({});
			}, 5000);
		}
		return () => {
			clearTimeout(alertTimer);
		};
	}, [alert]);

	useEffect(() => {
		const json = localStorage.getItem('items');
		const localItems = JSON.parse(json);
		setItems([...localItems]);
	}, []);

	useEffect(() => {
		const json = JSON.stringify(items);
		localStorage.setItem('items', json);
	}, [items]);

	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{!!alert.text && <Alert {...alert} />}
				<h3>Grocery Bud</h3>
				<div className='form-control'>
					<input
						type='text'
						className='grocery'
						placeholder='e.g. eggs'
						onChange={handleChange}
						value={enteredItem}
					/>
					<button className='submit-btn'>
						{editMode ? 'Edit' : 'Submit'}
					</button>
				</div>
			</form>

			{!!items.length && (
				<List
					items={items}
					emitEdit={handleEdit}
					emitDelete={handleDelete}
				/>
			)}
			{!!items.length && (
				<button className='clear-btn' onClick={handleClearAll}>
					clear all Items
				</button>
			)}
		</section>
	);
}

export default App;
