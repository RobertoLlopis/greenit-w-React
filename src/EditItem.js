import React, { Fragment, useState } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemSecondaryAction, Checkbox, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import NearMeIcon from '@material-ui/icons/NearMe';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import useToggleState from './hooks/useToggleState';
import { YellowIcon } from './styles/styledComponents';

import EditItemForm from './EditItemForm';

export default function EditItem(props) {
	const {
		item,
		prevItemsDone,
		sortedTemp,
		sortedRegion,
		replaceItem,
		deleteItem,
		handleItemDone
	} = props;
	const [
		isEditingItem,
		setIsEditingItem
	] = useToggleState();
	const [
		done,
		setDone
	] = useToggleState(prevItemsDone.includes(item));
	const handleChange = () => {
		setDone();
		handleItemDone(item);
	};
	return (
		<ListItem>
			{!isEditingItem ? (
				<Fragment>
					<Checkbox
						value="checkbox"
						checked={done}
						color="primary"
						onChange={handleChange}
					/>
					<ListItemText
						primary={`${item}`}
						style={{
							textDecoration: done ? 'line-through' : 'none'
						}}
					/>
					<ListItemSecondaryAction>
						{sortedRegion.includes(item) && (
							<YellowIcon>
								<NearMeIcon />
							</YellowIcon>
						)}
						{sortedTemp.includes(item) && (
							<Icon color="primary">
								<EventAvailableIcon />
							</Icon>
						)}
						<IconButton aria-label="edit" onClick={setIsEditingItem}>
							<EditIcon />
						</IconButton>
						<IconButton aria-label="delete" onClick={() => deleteItem(item)}>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</Fragment>
			) : (
				<EditItemForm
					prevValue={item}
					replaceItem={replaceItem}
					setIsEditingItem={setIsEditingItem}
				/>
			)}
		</ListItem>
	);
}
