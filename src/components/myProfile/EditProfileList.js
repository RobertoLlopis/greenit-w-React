import React, { Fragment, useState } from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { sort } from '../../AppHelpers';

import ListHeader from './ListHeader';
import EditItem from './EditItem';
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
	const { editingList } = listState;
	let id = editingList[0];
	let time = editingList[1];
	let foodArr = editingList[2];
	let selection = editingList[3];
	let done = editingList[5];

	const deleteItem = (item) => {
		let remainFoodArr = foodArr.filter((f) => f !== item);
		editingList[2] = remainFoodArr;
		setListState({ ...listState, editingList: editingList });
	};
	const replaceItem = (prevItem, newItem) => {
		let idxOfItem = foodArr.indexOf(prevItem);
		foodArr[idxOfItem] = newItem;
		editingList[2] = foodArr;
		setListState({ ...listState, editingList: editingList });
	};
	const itemDone = (item) => {
		if (!done.includes(item) || done === []) {
			done.push(item);
			editingList[5] = done;
			setListState({ ...listState, editingList: editingList });
		}
		else {
			let remainDone = done.filter((i) => i !== item);
			editingList[5] = remainDone;
			setListState({ ...listState, editingList: editingList });
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
