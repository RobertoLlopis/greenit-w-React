import React, { Fragment } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemSecondaryAction, Checkbox, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import NearMeIcon from '@material-ui/icons/NearMe';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import useToggleState from '../../hooks/useToggleState';
import { YellowIcon } from '../../styles/styledComponents';

import EditItemForm from './EditItemForm';
import { styles } from '../../styles/EditItemStyles';

function EditItem(props) {
	const {
		item,
		prevItemsDone,
		sortedTemp,
		sortedRegion,
		replaceItem,
		deleteItem,
		handleItemDone,
		classes
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
						className={classes.checkBox}
					/>
					<ListItemText
						primary={`${item}`}
						className={classes.itemText}
						style={{
							textDecoration: done ? 'line-through' : 'none'
						}}
					/>
					<ListItemSecondaryAction className={classes.iconContainer}>
						{sortedRegion.includes(item) && (
							<YellowIcon className={classes.icon}>
								<NearMeIcon />
							</YellowIcon>
						)}
						{sortedTemp.includes(item) && (
							<Icon color="primary" className={classes.icon}>
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
					submitFunction={replaceItem}
					setDisplayBool={setIsEditingItem}
				/>
			)}
		</ListItem>
	);
}
export default withStyles(styles)(EditItem);
