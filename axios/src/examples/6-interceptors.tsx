import { useEffect } from 'react';
import authFetch from '../axios/interceptors';

const url = '/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    const response = await authFetch(url)
    console.log('axios interceptors');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
