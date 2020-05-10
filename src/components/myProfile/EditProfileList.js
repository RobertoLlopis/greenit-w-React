import React, { Fragment, useState } from 'react';
import { List, Button, Divider, Icon, Paper } from '@material-ui/core/';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { withStyles } from '@material-ui/core/styles';

import ListHeader from './ListHeader';
import EditItem from './EditItem';
import AddingItemForm from './AddingItemForm';
import useToggleState from '../../hooks/useToggleState';
import { sort } from '../../AppHelpers';
import { styles } from '../../styles/EditProfileListStyles';

function EditProfileList(props) {
	const { list, handleSaveEdit, setIsEditing, classes } = props;
	const [
		listState,
		setListState
	] = useState({
		editingList: [
			list[0],
			list[1],
			list[2],
			list[3],
			list[4],
			list[5]
		]
	});
	const [
		isAdding,
		setIsAdding
	] = useToggleState();
	const { editingList } = listState;
	let id = editingList[0];
	let time = editingList[1];
	let foodArr = editingList[2];
	let selection = editingList[3];
	let done = editingList[5];

	const setEdition = () => {
		setListState({ ...listState, editingList: editingList });
	};

	const deleteItem = (item) => {
		let remainFoodArr = foodArr.filter((f) => f !== item);
		editingList[2] = remainFoodArr;
		setEdition();
	};
	const replaceItem = (prevItem, newItem) => {
		let idxOfItem = foodArr.indexOf(prevItem);
		foodArr[idxOfItem] = newItem;
		editingList[2] = foodArr;
		setEdition();
	};
	const addItem = (item) => {
		foodArr.push(item);
		console.log(foodArr);
		editingList[2] = foodArr;
		setEdition();
	};
	const itemDone = (item) => {
		if (!done.includes(item) || done === []) {
			done.push(item);
			editingList[5] = done;
			setEdition();
		}
		else {
			let remainDone = done.filter((i) => i !== item);
			editingList[5] = remainDone;
			setEdition();
		}
	};

	return (
		<Paper className={classes.root}>
			<ListHeader listState={{ time, selection }} editing={true} />
			<List key="dieta" className={classes.editingList}>
				{foodArr.map((n, i) => {
					let sortedTemp = sort(selection, 'temp');
					let sortedRegion = sort(selection, 'region');
					return (
						<Fragment key={`${n}-Edit-listItem`}>
							<EditItem
								item={n}
								prevItemsDone={done}
								sortedTemp={sortedTemp}
								sortedRegion={sortedRegion}
								replaceItem={replaceItem}
								deleteItem={deleteItem}
								handleItemDone={itemDone}
							/>
							{i + 1 <= foodArr.length - 1 && <Divider />}
						</Fragment>
					);
				})}
			</List>
			<div style={{ position: 'relative' }}>
				{!isAdding ? (
					<div className={classes.addContainer}>
						<Icon onClick={() => setIsAdding()}>
							<AddCircleIcon fontSize="large" />
						</Icon>
					</div>
				) : (
					<AddingItemForm addItem={addItem} setIsAdding={setIsAdding} />
				)}
			</div>
			<div className={classes.btnContainer}>
				<Button
					size="small"
					variant="outlined"
					color="primary"
					className={classes.btns}
					onClick={() => handleSaveEdit(id, editingList)}
				>
					Guardar
				</Button>
				<Button
					size="small"
					variant="outlined"
					color="secondary"
					className={classes.btns}
					onClick={setIsEditing}
				>
					Cancelar
				</Button>
			</div>
		</Paper>
	);
}
export default withStyles(styles)(EditProfileList);
