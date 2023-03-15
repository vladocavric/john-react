import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
const Stars = ({ stars, reviews }) => {
	return (
		<Wrapper>
			<div className='stars'>
				<span>
					{stars < 0.5 && <BsStar />}
					{stars >= 0.5 && stars < 1 && <BsStarHalf />}
					{stars >= 1 && <BsStarFill />}
				</span>
				<span>
					{stars < 1.5 && <BsStar />}
					{stars >= 1.5 && stars < 2 && <BsStarHalf />}
					{stars >= 2 && <BsStarFill />}
				</span>
				<span>
					{stars < 2.5 && <BsStar />}
					{stars >= 2.5 && stars < 3 && <BsStarHalf />}
					{stars >= 3 && <BsStarFill />}
				</span>
				<span>
					{stars < 3.5 && <BsStar />}
					{stars >= 3.5 && stars < 4 && <BsStarHalf />}
					{stars >= 4 && <BsStarFill />}
				</span>
				<span>
					{stars < 4.5 && <BsStar />}
					{stars >= 4.5 && stars < 5 && <BsStarHalf />}
					{stars === 5 && <BsStarFill />}
				</span>
			</div>
			<p className='reviews'>
				({reviews}{' '}
				{reviews > 1 ? ' customer reviews' : 'customer review'})
			</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	span {
		color: #ffb900;
		font-size: 1rem;
		margin-right: 0.25rem;
	}
	p {
		margin-left: 0.5rem;
		margin-bottom: 0;
	}
	margin-bottom: 0.5rem;
`;
export default Stars;
