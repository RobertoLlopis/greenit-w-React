import React from 'react';
import useInputState from './hooks/useInputState';

import TextField from '@material-ui/core/TextField';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

export default function EditItemForm(props) {
	const { prevValue, replaceItem, setIsEditingItem } = props;
	const [
		value,
		handleChange,
		reset
	] = useInputState(prevValue);
	const cancelEdit = () => {
		setIsEditingItem();
	};
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				replaceItem(prevValue, value);
				reset();
				setIsEditingItem();
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
				<IconButton onClick={cancelEdit} color="secondary">
					<CancelIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</form>
	);
}
