import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
	const [value, setValue] = React.useState('all');
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChangeCompany = (e) => {
		console.log(e.target.value);
		setValue(e.target.value);
	};
	const handlePriceRangeChange = (e) => {
		console.log(e.target.value);
	};

	return (
		<Wrapper>
			<div className='content'>
				<form onSubmit={handleSubmit}>
					<div className='form-control'>
						<input
							type='text'
							placeholder='search'
							className='search-input'
						/>
					</div>
					<div className='form-control'>
						<h5>category</h5>
						<div>
							<button
								type='button'
								name='category'
								className='active'>
								all
							</button>
							<button type='button' name='category' className=''>
								office
							</button>
							<button type='button' name='category' className=''>
								living room
							</button>
							<button type='button' name='category' className=''>
								kitchen
							</button>
							<button type='button' name='category' className=''>
								bedroom
							</button>
							<button type='button' name='category' className=''>
								dining
							</button>
							<button type='button' name='category' className=''>
								kids
							</button>
						</div>
					</div>
					<div className='form-control'>
						<h5>Company</h5>
						<select
							name='company'
							className='company'
							value={value}
							onChange={handleChangeCompany}>
							<option value='all'>all</option>
							<option value='marcos'>marcos</option>
							<option value='liddy'>liddy</option>
							<option value='ikea'>ikea</option>
							<option value='caressa'>caressa</option>
						</select>
					</div>
					<div className='form-control'>
						<h5>Colors</h5>
						<div className='colors'>
							<button name='color' className='all-btn active'>
								all
							</button>
							<button
								name='color'
								className='color-btn red'
								datacolor='#ff0000'
							/>
							<button name='color' className='color-btn green' />
							<button name='color' className='color-btn blue' />
							<button name='color' className='color-btn' />
							<button name='color' className='color-btn yellow' />
						</div>
					</div>
					<div className='form-control'>
						<h5>price</h5>
						{/* todo: max programmatically */}
						<p className='price'>$ 2000</p>
						<input
							type='range'
							name='price'
							min='0'
							//todo: max programmatically
							max='100'
							//todo: value programmatically
							value='50'
							id='myRange'
							onChange={handlePriceRangeChange}
						/>
					</div>
					<div className='form-control shipping'>
						<label htmlFor='shipping'>free shipping</label>
						<input type='checkbox' name='shipping' id='shipping' />
					</div>
				</form>
				<button className='clear-btn'>clear filters</button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.form-control {
		margin-bottom: 1.25rem;
		h5 {
			margin-bottom: 0.5rem;
		}
		.red {
			background-color: #ff0000;
		}
		.blue {
			background-color: #0000ff;
		}
		.green {
			background-color: #00ff00;
		}
		.yellow {
			background-color: #ffb900;
		}
	}
	.search-input {
		padding: 0.5rem;
		background: var(--clr-grey-10);
		border-radius: var(--radius);
		border-color: transparent;
		letter-spacing: var(--spacing);
	}
	.search-input::placeholder {
		text-transform: capitalize;
	}

	button {
		display: block;
		margin: 0.25em 0;
		padding: 0.25rem 0;
		text-transform: capitalize;
		background: transparent;
		border: none;
		border-bottom: 1px solid transparent;
		letter-spacing: var(--spacing);
		color: var(--clr-grey-5);
		cursor: pointer;
	}
	.active {
		border-color: var(--clr-grey-5);
	}
	.company {
		background: var(--clr-grey-10);
		border-radius: var(--radius);
		border-color: transparent;
		padding: 0.25rem;
	}
	.colors {
		display: flex;
		align-items: center;
	}
	.color-btn {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background: #222;
		margin-right: 0.5rem;
		border: none;
		cursor: pointer;
		opacity: 0.5;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			font-size: 0.5rem;
			color: var(--clr-white);
		}
	}
	.all-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0.5rem;
		opacity: 0.5;
	}
	.active {
		opacity: 1;
	}
	.all-btn .active {
		text-decoration: underline;
	}
	.price {
		margin-bottom: 0.25rem;
	}
	.shipping {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		text-transform: capitalize;
		column-gap: 0.5rem;
		font-size: 1rem;
		max-width: 200px;
	}
	.clear-btn {
		background: var(--clr-red-dark);
		color: var(--clr-white);
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius);
	}
	@media (min-width: 768px) {
		.content {
			position: sticky;
			top: 1rem;
		}
	}
`;

export default Filters;
