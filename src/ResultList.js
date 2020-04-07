import React, {useContext} from 'react';

import './ResultList.css';

import {ProfileContext} from './contexts/ProfileContext';

import DietaList from './DietaList';
import RegionList from './RegionList';
import TempList from './TempList';

export default function ResultList(props) {
	const { selection } = props;
	const [
		makingList,
	] = useContext(ProfileContext);
	return (
		<>
		{makingList && <span className='list-header'>
				<h3>Selecciona los alimentos para hacer la lista de la compra</h3>
				{selection.dieta === '' && <p>Debes seleccionar un tipo de dieta para poder mostrar tus alimentos personalizados</p>}
		</span>} 
		<div className="root">
			{selection.dieta !== '' &&  <DietaList selection={selection} makingList={makingList} />}
			{selection.region !== '' && !makingList ? <RegionList selection={selection} />: ''}
			{!makingList && <TempList selection={selection} />}
		</div>
		</>
	);
}