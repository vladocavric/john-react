import { Link, useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';
const Error = () => {
  const [serchParams] = useSearchParams()
  const navigate = useNavigate()
  const handleBack = () => {
    if(serchParams.get('back')){
      navigate(`/${serchParams.get('back')}`)
    } else {
      navigate(-1)
    }
  }
  console.log(serchParams.get('back'))
  return (
    <section className='section'>
      <h2>Error</h2>
      <Link to='/' className="btn">Go Home</Link>
      <button onClick={handleBack} className="btn">Go Back</button>
    </section>
  );
};
export default Error;
