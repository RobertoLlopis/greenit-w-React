import React, { useContext, useState, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { ProfileContext } from './contexts/ProfileContext';
import Navbar from './Navbar';
import ProfileCard from './ProfileCard';
import EditProfileList from './EditProfileList';
import MySnackbar from './MySnackbar';
import useToggleState from './hooks/useToggleState';
import { getSavedList } from './AppHelpers';

const styles = (theme) => ({
	root: { textAlign: 'center' }
	/* grid: { display: 'grid' }, */
	/* gridItem: {
		justifySelf: 'center'
	}, */
});

function MyProfile(props) {
	const { classes } = props;
	const [
		makingList,
		setMakingList,
		personalList,
		setPersonalList
	] = useContext(ProfileContext);
	const [
		open,
		setOpen
	] = useToggleState();
	const [
		isEditing,
		setIsEditing
	] = useToggleState();
	const [
		editingList,
		setEditingList
	] = useState({ list: [] });
	const { savedList } = personalList;
	const localStorageSavedList = getSavedList();
	const handleEdit = (list) => {};
	const handleDelete = (listTime) => {
		let remainSavedList = savedList.filter((list) => list[0] !== listTime);
		setPersonalList({
			savedList: remainSavedList,
			shoppingList: []
		});
		window.localStorage.clear();
		window.localStorage.setItem('savedList', JSON.stringify(remainSavedList));
		setOpen();
	};
	const changeToEdit = (list) => {
		setEditingList({ list: list });
		setIsEditing();
	};
	return (
		<Fragment>
			<div className={classes.root}>
				<Navbar />
				<h1 style={{ textAlign: 'center' }}>Mi perfil</h1>
				<h3 style={{ textAlign: 'left', paddingLeft: '2rem' }}>
					Mis listas guardadas:
				</h3>
				{isEditing && (
					<EditProfileList
						list={editingList.list}
						isEditing={isEditing}
						setIsEditing={setIsEditing}
						handleDelete={handleDelete}
					/>
				)}
				<Grid
					key="grid-container"
					container
					spacing={3}
					justify="center"
					alignContent="center"
					direction="row"
					className={classes.grid}
				>
					{localStorageSavedList !== null ? (
						localStorageSavedList.map((list) => {
							return (
								<ProfileCard
									key={list[0]}
									list={list}
									handleDelete={handleDelete}
									changeToEdit={changeToEdit}
								/>
							);
						})
					) : (
						<h1>Subnormal incluye algo en el storage!</h1>
					)}
				</Grid>
			</div>
			<Fragment>
				<MySnackbar
					open={open}
					handleClose={setOpen}
					msg="Has eliminado tu lista de la compra"
				/>
			</Fragment>
		</Fragment>
	);
}

export default withStyles(styles)(MyProfile);
/* lg='6' md='4' sm='2' xs='1'wrap='wrap' zeroMinWidth='true' */
