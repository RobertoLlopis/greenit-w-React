import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FormCheck from './FormCheck';
import FormDieta from './FormDieta';
import FormRegion from './FormRegion';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '70vh',
		width: '100vw',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	select: {
		height: '30vh',
		width: '10vw',
		padding: '0',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	check: {
		width: '10vw'
	}
}));

export default function Form() {
	const classes = useStyles();
	/* const [
		alimentos,
		setAlimentos
	] = useFormDisplay(Alimentos); */
	const [
		selection,
		setSelection
	] = useState({ region: '', dieta: '', alergenos: [] });
	console.log(selection);
	function handleSelection(chosen, formPart) {
		setSelection({ ...selection, [formPart]: chosen });
	}

	return (
		<div className={classes.root}>
			<span className={classes.select}>
				<FormDieta handleSelection={handleSelection} />
				<FormRegion handleSelection={handleSelection} />
			</span>
			<span className={classes.check} />
			<FormCheck handleSelection={handleSelection} />
		</div>
	);
}
