import axios from 'axios';
import { useEffect } from 'react';
import authFetch from '../axios/custom';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    console.log('custom axios instance');
    try {
      const res1 = await authFetch('/react-store-products')
      const res2 = await axios(randomUserUrl)
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
