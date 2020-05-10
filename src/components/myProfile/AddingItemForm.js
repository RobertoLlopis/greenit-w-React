import React from 'react';
import useInputState from '../../hooks/useInputState';

import TextField from '@material-ui/core/TextField';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function EditItemForm(props) {
	const { addItem, setIsAdding } = props;
	const [
		value,
		handleChange,
		reset
	] = useInputState('');
	const cancelEdit = () => {
		setIsAdding();
	};
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				addItem(value);
				reset();
				setIsAdding();
			}}
			style={{ marginLeft: '1rem', width: '75%' }}
		>
			<TextField
				value={value}
				onChange={handleChange}
				margin="normal"
				fullWidth
				autoFocus
			/>
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
