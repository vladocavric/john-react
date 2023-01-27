import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
	const [people, setPeople] = useState([...data]);

  const handleRemoveItem = (id) => {
    const oldSetOfPeople = [...people]
    const newSetOfPeople = oldSetOfPeople.filter(person => person.id !== id)
    setPeople(newSetOfPeople)
  }
	return (
		<>
			{people.map((info) => {
        const {id, name} = info
        return (
				<div key={id} className='item'>
					<h4>{name}</h4>
          <button className="" onClick={() => handleRemoveItem(id)}>remove</button>
				</div>
			)})}
		</>
	);
};

export default UseStateArray;
