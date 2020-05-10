import React from 'react';
import useInputState from '../../hooks/useInputState';

import TextField from '@material-ui/core/TextField';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useToggleState from '../../hooks/useToggleState';

export default function EditItemForm(props) {
	const { prevValue, submitFunction, setDisplayBool, add } = props;
	const [
		valid,
		setValid
	] = useToggleState(true);
	const [
		value,
		handleChange,
		reset
	] = useInputState(prevValue);
	const cancelEdit = () => {
		setDisplayBool();
	};
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (value !== '') {
					add ? submitFunction(value) : submitFunction(prevValue, value);
					reset();
					setValid();
					setDisplayBool();
				}
				else if (value === '' && valid) {
					setValid();
				}
			}}
			style={{ marginLeft: '1rem', width: '75%' }}
		>
			{valid ? (
				<TextField
					value={value}
					onChange={handleChange}
					margin="normal"
					fullWidth
					autoFocus
				/>
			) : (
				<TextField
					error
					value={value}
					onChange={handleChange}
					label="Error"
					helperText="Debes incluir algo"
					margin="normal"
					fullWidth
					autoFocus
				/>
			)}
			<ListItemSecondaryAction>
				<IconButton type="submit" color="primary">
					<CheckCircleIcon />
				</IconButton>
				<IconButton onClick={cancelEdit} color="secondary">
					<CancelIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</form>
	);
}
