import React, { useState, useContext, Fragment } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';

import { ProfileContext } from './contexts/ProfileContext';
import { nowDate, getRandomInt } from './AppHelpers';

import MySnackbar from './MySnackbar';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: '2rem'
	},
	margin: {
		margin: theme.spacing(1)
	}
}));
const GreenButton = withStyles({
	root: {
		color: '#37a82a',
		border: '1px solid #37a82a',
		'&:hover': {
			color: 'white',
			backgroundColor: '#37a82a'
		}
	}
})((props) => <Button color="default" {...props} />);

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
			<div className={classes.root}>
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
			<Fragment>
				<MySnackbar
					open={open}
					handleClose={handleClose}
					msg="Has guardado tu lista de la compra"
				/>
			</Fragment>
		</Fragment>
	);
}
