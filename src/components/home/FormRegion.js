import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';

import useFormDisplay from '../../hooks/useFormDisplay';
import { useStyles } from '../../styles/FormRegionStyles';

export default function FormSelect(props) {
	const classes = useStyles();
	const { selection } = props;
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
					value={regiones.chosen ? regiones.chosen : selection.region}
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
