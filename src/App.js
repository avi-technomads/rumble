import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Battle from './components/Battle/Battle';
import {  Routes, Route } from 'react-router-dom';

import Results from './components/Results/Results';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/battle' element={<Battle />} />
				<Route exact path='/result' element={<Results />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
