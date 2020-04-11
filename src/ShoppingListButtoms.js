import React, { useState, useContext, Fragment } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { ProfileContext } from './contexts/ProfileContext';

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
		let newList = new Date();
		if (savedList === undefined) {
			setPersonalList({
				savedList: [
					[
						newList,
						shoppingList,
						selection
					]
				],
				shoppingList: []
			});
			window.localStorage.setItem('savedList', JSON.stringify(savedList));
			setOpen(true);
		}
		else {
			savedList.push([
				newList,
				shoppingList,
				selection
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
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
					open={open}
					autoHideDuration={2500}
					onClose={handleClose}
					message="Has guardado tu lista de la compra"
					action={
						<Fragment>
							<IconButton
								size="small"
								aria-label="close"
								color="inherit"
								onClick={handleClose}
							>
								<CloseIcon fontSize="small" />
							</IconButton>
						</Fragment>
					}
				/>
			</Fragment>
		</Fragment>
	);
}
