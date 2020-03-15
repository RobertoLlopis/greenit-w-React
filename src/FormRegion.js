import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';

import useFormDisplay from './hooks/useFormDisplay';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		maxWidth: 300
	}
}));

export default function FormSelect(props) {
	const classes = useStyles();
	const [
		regiones,
		setRegion
	] = useFormDisplay('regionesArr');

	const handleChangeR = (event) => {
		let chosen = event.target.value;
		setRegion({ ...regiones, chosen });
		props.handleSelection(chosen, 'region');
	};

	return (
		<FormGroup>
			<FormControl className={classes.formControl}>
				<InputLabel id="selectRegion">Ubicación</InputLabel>
				<Select
					labelId="selectRegion"
					id="selectRegion"
					value={regiones.chosen ? regiones.chosen : ''}
					onChange={handleChangeR}
				>
					{regiones.regionesArr.map((r) => (
						<MenuItem key={r} value={r}>
							{r}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</FormGroup>
	);
}
