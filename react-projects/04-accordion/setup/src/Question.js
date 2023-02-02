import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
	const [open, setOpen] = useState(false);
	const toggleOpen = () => {
		setOpen((prevState) => !prevState);
	};
	return (
		<div className='question'>
			<header>
				<h4>{title}</h4>
				<button onClick={toggleOpen} className="btn">
					{open ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
     {open && <p>{info}</p>}
		</div>
	);
};

export default Question;
