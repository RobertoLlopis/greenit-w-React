import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FormCheck from './FormCheck';
import FormDieta from './FormDieta';
import FormRegion from './FormRegion';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '40vh',
		width: '100vw',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '3rem'
		/* [theme.breakpoints.down('sm')]: {
			paddingTop: '2rem'
		} */
	}

	/* select: {
		display: 'flex',
		flexDirection: 'column',

		alignItems: 'center'
	} */
	/* check: {
		width: '10vw'
	} */
}));

export default function Form(props) {
	const classes = useStyles();
	const { handleSelection, selection } = props;
	return (
		<div className={classes.root}>
			<span className={classes.select}>
				<FormDieta handleSelection={handleSelection} />
				<FormRegion selection={selection} handleSelection={handleSelection} />
			</span>
			<span className={classes.check}>
				<FormCheck handleSelection={handleSelection} />
			</span>
		</div>
	);
}
