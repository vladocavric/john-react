import { useParams, Link, useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react'

import products from '../data';

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const [selectedProduct] = products.filter(item => item.id === params.id)
    if (!selectedProduct) {
      navigate('/404?back=products')
    }
    setProduct(selectedProduct)
  }, []);
  return (
    <section className='section product'>
      <img src={product.image} alt={product.name} />
      <h5>{product.name}</h5>
      <Link to='/products' className="btn">Back to Proudcts</Link>
    </section>
  );
};

export default SingleProduct;
