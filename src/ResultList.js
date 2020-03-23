import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './ResultList.css';

import { sort, sortBool } from './AppHelpers';
import useSelectionSet from './hooks/useSelectionSet';

/* root: {
		width: '100%',
		backgroundColor: '#FFFF',
		marginTop: '2rem',
		position: 'absolute',
		display: 'flex',
		justifyContent: 'space-between',
		border: '2px solid grey'
	}

	main: {
		width: '30%',
		padding: '10px',
		height: 400,
		whiteSpace: 'nowrap',
		overflowY: 'scroll',
		textOverflow: 'ellipsis',
		maxHeight: 400,
		display: 'flex',
		justifyContent: 'center'
	} */

export default function ResultList(props) {
	const { selection } = props;
	let regionFood = sort(selection, 'region');
	let tempFood = sort(selection, 'temp');
	let setDieta = useSelectionSet(selection, 'dieta');
	let setAlerg = useSelectionSet(selection, 'alergenos');
	let dietaFood = sortBool(setDieta, setAlerg);
	console.log(setAlerg);

	/* let ChosenDietas = db1.alimentos.filter(a => a.dieta === selection.dieta && true) */
	return (
		<div className="root">
			{selection.dieta !== '' && (
				<div className="list-div">
					<span className="list-header">
							<h3>En base a tu dieta y alérgenos</h3>{' '}
						</span>
					<List className='list'>
						{dietaFood.map((n, i) => (
							<>
								<ListItem key={n}>
									<ListItemText primary={`${i + 1} ${n}`} />
								</ListItem>
								{i + 1 <= dietaFood.length - 1 && <Divider />}
							</>
						))}
					</List>
				</div>
			)}
			{selection.region !== '' && (
				<div className="list-div">
						<span className="list-header">
							<h3>Alimentos en tu comunidad</h3>
						</span>
					<List className='list'>
						{regionFood.map((n, i) => (
								<>
								<ListItem key={n}>
									<ListItemText primary={`${i + 1} ${n}`} />
								</ListItem>
								{i + 1 <= regionFood.length - 1 && <Divider />}
								</>
						))}
					</List>
				</div>
			)}
			<div className="list-div">
			<span className="list-header">
						<h3>Alimentos de temporada</h3>
					</span>
				<List className='list'>
					{tempFood.map((n, i) => (
						<>
							<ListItem key={n}>
								<ListItemText primary={`${i + 1} ${n}`} />
							</ListItem>
							{i + 1 <= tempFood.length - 1 && <Divider />}
						</>
					))}
					
				</List>
			</div>
		</div>
	);
}
