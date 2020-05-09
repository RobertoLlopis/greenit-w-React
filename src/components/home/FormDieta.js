import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';

import useFormDisplay from '../../hooks/useFormDisplay';
import { useStyles } from '../../styles/FormDietaStyles';

export default function FormDieta(props) {
	const classes = useStyles();
	const [
		dietas,
		setDietas
	] = useFormDisplay('dietas');
	const handleChangeD = (event) => {
		let chosen = event.target.value;
		setDietas({ ...dietas, chosen });
		props.handleSelection(chosen, 'dieta');
	};
	return (
		<FormGroup>
			<FormControl className={classes.formControl}>
				<InputLabel id="selectDietas">Elige tu dieta</InputLabel>
				<Select
					labelId="selectDieta"
					id="selectDieta"
					value={dietas.chosen ? dietas.chosen : ''}
					onChange={handleChangeD}
				>
					{dietas.dietas.map((d) => (
						<MenuItem key={d} value={d}>
							{d}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</FormGroup>
	);
}
