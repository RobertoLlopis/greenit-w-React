import React, { Fragment, useState } from 'react';
import List from '@material-ui/core/List';
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
	const { list, setIsEditing, classes } = props;
	const [
		listState,
		setListState
	] = useState({
		time: list[0],
		foodArr: list[1],
		selection: list[2],
		imgNumber: list[3]
	});

	const { time, foodArr, selection, imgNumber } = listState;
	const deleteItem = (item) => {
		let remainFoodArr = foodArr.filter((f) => f !== item);
		setListState({ ...listState, foodArr: remainFoodArr });
	};
	const replaceItem = (prevItem, newItem) => {
		let idxOfItem = foodArr.indexOf(prevItem);
		foodArr[idxOfItem] = newItem;
		setListState({ ...listState, foodArr: foodArr });
	};
	return (
		<Paper>
			<ListHeader listState={listState} />
			<List key="dieta" className="list-shopping">
				{foodArr.map((n, i) => {
					let sortedTemp = sort(selection, 'temp');
					let sortedRegion = sort(selection, 'region');
					return (
						<Fragment key={`${n}-Edit-listItem`}>
							<EditItem
								item={n}
								sortedTemp={sortedTemp}
								sortedRegion={sortedRegion}
								replaceItem={replaceItem}
								deleteItem={deleteItem}
							/>
							{i + 1 <= foodArr.length - 1 && <Divider />}
						</Fragment>
					);
				})}
			</List>
		</Paper>
	);
}
export default withStyles(styles)(EditProfileList);
