import React, {useState} from 'react';

const Tour = ({ tour, removeTour }) => {
  const [expanded, setExpanded] = useState(false);
  const emitRemoveTour = () => {
    removeTour(tour.id)
  }
  const toggleExpanded = () => {
    setExpanded(prevState => !prevState)
  }
	return (
		<li className='single-tour'>
			<img src={tour.image} alt={tour.name} />
			<div className='tour-info'>
        <div>
          <h4>{tour.name}</h4>
          <h4 className="tour-price">${tour.price}</h4>
        </div>
				<p>
          {expanded ? tour.info : tour.info.substring(0,190)}
          {!expanded && '...'}
          <button onClick={toggleExpanded}>{expanded ? 'Show Less' : 'Read more'}</button>
        </p>
			</div>
			<footer>
				<button className='btn delete-btn' onClick={emitRemoveTour}>Not Interacted</button>
			</footer>
		</li>
	);
};

export default Tour;
