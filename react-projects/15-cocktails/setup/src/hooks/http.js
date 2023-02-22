import { useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const useHttp = () => {
    const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);


	const sendRequest = useCallback(async (reqObj, doAfterResponse) => {
		const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
		setIsLoading(true);
		setError(null);
		try {
			const { data, status } = await axios({
				method: reqObj.method ? reqObj.method : 'GET',
				url: baseUrl + reqObj.url,
				data: reqObj.data ? JSON.stringify(reqObj.data) : null,
			});

            const type = reqObj.type ? reqObj.type : 'get'

			if ((status === 404 || data.drinks === null ) && type === 'get') {
				navigate('/404')
			}

			// const data = await response.json();
			doAfterResponse(data);
		} catch (err) {
			setError(err.message || 'Something went wrong!');
		}
		setIsLoading(false);
	}, [navigate]);

	return { isLoading, error, sendRequest };
};

export default useHttp;
