import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import './App.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<span className="mainForm">
				<Form />
			</span>
		</div>
	);
}

export default App;
