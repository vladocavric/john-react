import { useEffect } from 'react';

import axios from 'axios';

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    console.log('global axios instance');
    try {
      const response = await axios(productsUrl)
    } catch (err: any) {
      throw new Error(err.message);
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
