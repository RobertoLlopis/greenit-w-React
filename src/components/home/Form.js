import React from 'react';
import Typography from '@material-ui/core/Typography';

import FormCheck from './FormCheck';
import FormDieta from './FormDieta';
import FormRegion from './FormRegion';
import { useStyles } from '../../styles/FormStyles';

export default function Form(props) {
	const classes = useStyles();
	const { handleSelection, selection } = props;
	return (
		<section className={classes.root}>
			<Typography variant="h5" component="h5">
				Personaliza tu elección
			</Typography>
			<div className={classes.formContainer}>
				<span className={classes.select}>
					<FormDieta handleSelection={handleSelection} />
					<FormRegion selection={selection} handleSelection={handleSelection} />
				</span>
				<span className={classes.check}>
					<FormCheck handleSelection={handleSelection} />
				</span>
			</div>
		</section>
	);
}
