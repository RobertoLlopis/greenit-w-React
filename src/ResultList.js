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
				<h3>Selecciona los alimentos para hacer tu próxima compra</h3>
		</span>}
		<div className="root">
			{selection.dieta !== '' &&  <DietaList selection={selection} makingList={makingList} />}
			{selection.region !== '' && !makingList ? <RegionList selection={selection} />: ''}
			{!makingList && <TempList selection={selection} />}
		</div>
		</>
	);
}
/* import AlarmOnIcon from '@material-ui/icons/AlarmOn'; */
/* import EventAvailableIcon from '@material-ui/icons/EventAvailable'; */
/* import GradeIcon from '@material-ui/icons/Grade'; */
/* import NearMeIcon from '@material-ui/icons/NearMe'; */
/* import WhereToVoteIcon from '@material-ui/icons/WhereToVote'; */
/* import StarIcon from '@material-ui/icons/Star'; */
