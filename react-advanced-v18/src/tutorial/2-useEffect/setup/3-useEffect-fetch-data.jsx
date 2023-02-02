import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getUsers = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('something went wrong');
			}
			const data = await response.json();
			setUsers(data);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getUsers();
		return () => {};
	}, []);
	return (
		<>
			<h3>Github users</h3>
			{isLoading && <h2>Loading...</h2>}{' '}
			<ul className='users'>
				{!isLoading &&
					users.map((user) => (
						<li key={user.id}>
							<img src={user.avatar_url} alt={user.login} />
							<div>
								<h4>{user.login}</h4>
								<a href={user.profile}></a>
							</div>
						</li>
					))}
			</ul>
		</>
	);
};

export default UseEffectFetchData;
