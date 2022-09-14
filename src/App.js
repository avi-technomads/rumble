import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Battle from './components/Battle/Battle';
import { Route, Routes } from 'react-router';
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
		{/* <Results /> */}
		<Footer />
	</>
);
};

export default App;
