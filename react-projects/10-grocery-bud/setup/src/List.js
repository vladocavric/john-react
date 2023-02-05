import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items, emitEdit, emitDelete }) => {
	const handleEmitEdit = (index) => {
		emitEdit(index)
	}

	const handleEmitDelete = (index) => {
		emitDelete(index)
	}
	return (
		<div className='grocery-container'>
			{items.map((item, index) => (
				<div key={index} className='grocery-item'>
					<div className='title'>{item}</div>
					<button className="edit-btn" onClick={() => handleEmitEdit(index)}><FaEdit /></button>
					<button className="delete-btn" onClick={() => handleEmitDelete(index)}><FaTrash /></button>
				</div>
			))}
		</div>
	);
};

export default List;
