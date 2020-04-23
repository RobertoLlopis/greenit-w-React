import React, { Fragment, useState } from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { sort } from './AppHelpers';

import ListHeader from './ListHeader';
import EditItem from './EditItem';

const styles = (theme) => ({
	/* gridItem: {
		justifySelf: 'center'
    }, */
});

function EditProfileList(props) {
	const { list, handleSaveEdit, setIsEditing, classes } = props;
	const [
		listState,
		setListState
	] = useState([
		list[0],
		list[1],
		list[2],
		list[3],
		list[4],
		list[5]
	]);

	let id = listState[0];
	let time = listState[1];
	let foodArr = listState[2];
	let selection = listState[3];
	let imgNumber = listState[4];
	let done = listState[5];
	const deleteItem = (item) => {
		let remainFoodArr = foodArr.filter((f) => f !== item);
		setListState({ ...listState, foodArr: remainFoodArr });
	};
	const replaceItem = (prevItem, newItem) => {
		let idxOfItem = foodArr.indexOf(prevItem);
		foodArr[idxOfItem] = newItem;
		setListState({ ...listState, foodArr: foodArr });
	};
	const itemDone = (item) => {
		if (!done.includes(item) || done === []) {
			done.push(item);
			setListState({ ...listState, done: done });
		}
		else {
			let remainDone = done.filter((i) => i !== item);
			setListState({ ...listState, done: remainDone });
		}
	};

	return (
		<Paper>
			<ListHeader listState={{ time, selection }} />
			<List key="dieta" className="list-shopping">
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
			<Button
				size="small"
				variant="outlined"
				color="primary"
				className={classes.btns}
				onClick={() => handleSaveEdit(id, listState)}
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
		</Paper>
	);
}
export default withStyles(styles)(EditProfileList);
