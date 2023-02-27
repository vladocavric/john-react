import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import { Navbar, Sidebar, Footer } from './components';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import ErrorPage from './pages/ErrorPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {
	return (
		<Router>
			<Navbar />
			<Sidebar />
			<Routes>
				<Route path='/'>
					<Route index element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/products'>
						<Route index element={<ProductsPage />} />
						<Route path=':id' element={<SingleProductPage />} />
					</Route>
					<Route path='/cart' element={<CartPage />} />
					<Route path='*' element={<ErrorPage />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
