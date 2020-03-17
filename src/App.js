import React, { useState } from 'react';
import {autoRegion} from './AppHelpers';

import Navbar from './Navbar';
import Form from './Form';
import ResultList from './ResultList';



import useSelectionSet from './hooks/useSelectionSet';

import './App.css';


function App() {
	const [
		selection,
		setSelection
	] = useState({ region: '', dieta: '', alergenos: [] });

	console.log(selection);
	
	function handleSelection(chosen, formPart) {
		setSelection({ ...selection, [formPart]: chosen });
	}
	autoRegion(handleSelection);

	let selectionDieta = useSelectionSet(selection, 'dieta');
	let selectionRegion = useSelectionSet(selection, 'region');

	return (
		<>
		<div className="App">
			<Navbar />
			<span className="mainForm">
				<Form selection={selection} handleSelection={handleSelection}/>
			</span>
			<div style={{width: '100%'}}>
				<ResultList />
			</div>
		</div>
		</>
	);
}

export default App;
