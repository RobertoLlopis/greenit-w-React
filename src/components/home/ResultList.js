import React, { useContext } from 'react';

import '../../styles/ResultList.css';

import { ProfileContext } from '../../contexts/ProfileContext';

import DietaList from './DietaList';
import RegionList from './RegionList';
import TempList from './TempList';

export default function ResultList(props) {
	const { selection } = props;
	const [
		makingList
	] = useContext(ProfileContext);
	return (
		<div className="result-form-root">
			{makingList && (
				<span>
					{selection.dieta === '' && (
						<h3>
							Debes seleccionar un tipo de dieta para poder mostrar tus
							alimentos personalizados
						</h3>
					)}
				</span>
			)}
			{selection.dieta !== '' && (
				<div className="list-container">
					{!makingList &&
					selection.dieta === '' && (
						<h3>Selecciona los alimentos que quieres incluir en la lista</h3>
					)}
					<span className="list-header">
						<h3>En base a tu dieta y alérgenos</h3>{' '}
					</span>
					<DietaList selection={selection} />
				</div>
			)}
			{selection.region !== '' &&
			!makingList && (
				<div className="list-container">
					<span>
						<h3>Alimentos en tu comunidad</h3>
					</span>
					<RegionList selection={selection} />
				</div>
			)}
			{!makingList && (
				<div className="list-container">
					<span className="list-header">
						<h3>Alimentos de temporada</h3>
					</span>
					<TempList selection={selection} />
				</div>
			)}
		</div>
	);
}
