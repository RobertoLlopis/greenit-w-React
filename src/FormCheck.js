import React, { useEffect } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';

import Checkbox from '@material-ui/core/Checkbox';

import useFormDisplay from './hooks/useFormDisplay';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(3)
	}
}));

export default function FormCheck(props) {
	const classes = useStyles();
	const [
		alerg,
		setAlerg
	] = useFormDisplay('alergenos');
	console.log(alerg);
	var chosen = Object.keys(alerg).filter((a) => alerg[a] === true);
	const handleChange = (name) => (event) => {
		let check = event.target.checked;
		setAlerg({ ...alerg, [name]: check });
		props.handleSelection(chosen, 'alergenos');
	};
	console.log(alerg);
	return (
		<FormControl
			component="fieldset"
			size="medium"
			className={classes.formControl}
		>
			<FormLabel component="legend">Alérgenos</FormLabel>
			<FormGroup>
				{alerg.alergenos.map((a) => {
					return (
						<FormControlLabel
							control={
								<Checkbox
									checked={alerg[a]}
									onChange={handleChange(a)}
									value={a}
								/>
							}
							key={a}
							label={a}
						/>
					);
				})}
			</FormGroup>
			<FormHelperText>Be careful</FormHelperText>
		</FormControl>
	);
}
