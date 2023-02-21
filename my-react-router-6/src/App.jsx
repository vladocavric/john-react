import {
	BrowserRouter,
	Route,
	Routes,
	useNavigate,
	Navigate,
} from 'react-router-dom';
import { useState } from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Error from './pages/Error';
import SingleProduct from './pages/SingleProduct';
import SharedLayout from './pages/SharedLayout';
import Dashboard from './pages/Dashboard';

const App = () => {
	// const navigate = useNavigate()
	const [user, setUser] = useState(null);
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SharedLayout user={user}/>}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route
						path='login'
						element={
							user ? <Navigate to='/dashboard' /> : <Login setUser={setUser}/>
						}
					/>
					<Route
						path='dashboard'
						element={
							user ? (
								<Dashboard user={user} />
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route path='products'>
						<Route index element={<Products />} />
						<Route path=':id' element={<SingleProduct />} />
					</Route>
				</Route>
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
