import React, { useState, useContext, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';

import { ProfileContext } from '../../contexts/ProfileContext';
import { nowDate, getRandomInt } from '../../AppHelpers';
import { GreenButton } from '../../styles/styledComponents';

import MySnackbar from '../common/MySnackbar';
import { useStyles } from '../../styles/ShoppingListButtomStyles';

export default function ShoppingListButtoms(props) {
	const classes = useStyles();
	const { selection } = props;
	const [
		open,
		setOpen
	] = useState(false);
	const [
		makingList,
		setMakingList,
		personalList,
		setPersonalList
	] = useContext(ProfileContext);
	const { shoppingList, savedList } = personalList;
	const handleSave = () => {
		let listTime = nowDate();
		let id = uuidv4();
		if (!savedList) {
			setPersonalList({
				savedList: [
					[
						id,
						listTime,
						shoppingList,
						selection,
						getRandomInt(1, 11),
						[]
					]
				],
				shoppingList: []
			});
			window.localStorage.setItem(
				'savedList',
				JSON.stringify([
					[
						id,
						listTime,
						shoppingList,
						selection,
						getRandomInt(1, 11),
						[]
					]
				])
			);
			setOpen(true);
		}
		else {
			savedList.push([
				id,
				listTime,
				shoppingList,
				selection,
				getRandomInt(1, 11),
				[]
			]);
			setPersonalList({
				savedList: savedList,
				shoppingList: []
			});
			window.localStorage.clear();
			window.localStorage.setItem('savedList', JSON.stringify(savedList));
			setOpen(true);
		}
		setMakingList(false);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const toggleButtons = () => {
		setMakingList(!makingList);
	};
	return (
		<Fragment>
			<div
				className={
					makingList && selection.dieta !== '' ? (
						classes.makingRoot
					) : (
						classes.root
					)
				}
			>
				{makingList ? (
					<span>
						{selection.dieta !== '' && (
							<Fragment>
								<Button
									variant="contained"
									size="medium"
									color="primary"
									className={classes.margin}
									onClick={handleSave}
								>
									Guardar
								</Button>
								<Button
									variant="contained"
									size="medium"
									color="secondary"
									className={classes.margin}
									onClick={toggleButtons}
								>
									Cancelar
								</Button>
							</Fragment>
						)}
					</span>
				) : (
					<GreenButton variant="outlined" size="large" onClick={toggleButtons}>
						Haz tu lista de la compra
					</GreenButton>
				)}
			</div>
			<MySnackbar
				open={open}
				link
				handleClose={handleClose}
				msg="Has guardado tu lista de la compra"
			/>
		</Fragment>
	);
}
