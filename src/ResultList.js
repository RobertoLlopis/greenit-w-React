import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {sort, sortBool} from './AppHelpers';
import useSelectionSet from './hooks/useSelectionSet';


const styles = {
	root: {
		width: '100%',
		height: 400,
		backgroundColor: '#FFFF',
		marginTop: '2rem',
		position: 'absolute',
		maxHeight: 300,
		whiteSpace: 'nowrap',
		overflowY: 'scroll',
		textOverflow: 'ellipsis',
		display: 'flex',
		justifyContent: 'center',
		border: '2px solid grey'
	},
};

export default withStyles(styles)(function ResultList(props) {
	const { classes, selection} = props;
	let regionFood = sort(selection, 'region');
	let tempFood = sort(selection, 'temp');
	let setDieta = useSelectionSet(selection, 'dieta');
	let setAlerg = useSelectionSet(selection, 'alergenos');
	let dietaFood = sortBool(setDieta, setAlerg);
	console.log(setAlerg);
	
	
	/* let ChosenDietas = db1.alimentos.filter(a => a.dieta === selection.dieta && true) */
	return (
		<div className={classes.root}>
			<span >
				<List>
					{dietaFood.map((n, i) => (
						<>
							<ListItem >
								<ListItemText primary={`${i + 1} ${n}`} />
							</ListItem>
							{i + 1 <= dietaFood.length - 1 && <Divider />}
						</>
					))}
				</List>
			</span>
			<List>
					{regionFood.map((n, i) => (
						<>
							<ListItem >
								<ListItemText primary={`${i + 1} ${n}`} />
							</ListItem>
							{i + 1 <= regionFood.length - 1 && <Divider />}
						</>
					))}
				</List>
				<List>
					{tempFood.map((n, i) => (
						<>
							<ListItem >
								<ListItemText primary={`${i + 1} ${n}`} />
							</ListItem>
							{i + 1 <= tempFood.length - 1 && <Divider />}
						</>
					))}
				</List>
		</div>
	);
});
