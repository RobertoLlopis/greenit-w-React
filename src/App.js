import React, { useState } from 'react';
import {autoRegion} from './AppHelpers';

import Navbar from './Navbar';
import Form from './Form';
import ResultList from './ResultList';


import './App.css';

function App() {
	const [
		selection,
		setSelection
	] = useState({ region: '', dieta: '', alergenos: [], temp: new Date().getMonth() + 1 });

	console.log(selection);
	console.log(new Date().getMonth() + 1)

	function handleSelection(chosen, formPart) {
		setSelection({ ...selection, [formPart]: chosen });
	}
	autoRegion(handleSelection);

	

	return (
		<>
		<div className="App">
			<Navbar />

			<span className="mainForm">
				<Form selection={selection} handleSelection={handleSelection}/>
			</span>
			<div style={{width: '30%'}}>
				<ResultList selection={selection} />
			</div>
		</div>
		</>
	);
}

export default App;
