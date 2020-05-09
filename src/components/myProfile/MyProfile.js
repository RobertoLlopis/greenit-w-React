import React, { useContext, useState, Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { ProfileContext } from '../../contexts/ProfileContext';
import Navbar from '../common/Navbar';
import ProfileCard from './ProfileCard';
import EditProfileList from './EditProfileList';
import MySnackbar from '../common/MySnackbar';
import useToggleState from '../../hooks/useToggleState';
import { styles } from '../../styles/MyProfileStyles';

function MyProfile(props) {
	const { classes } = props;
	const [
		// eslint-disable-next-line no-unused-vars
		makingList,
		// eslint-disable-next-line no-unused-vars
		setMakingList,
		personalList,
		setPersonalList
	] = useContext(ProfileContext);
	const [
		deleted,
		setDeleted
	] = useToggleState();
	const [
		edited,
		setEdited
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
	const handleEdit = (id, editedList) => {
		console.log(editedList, id);
		let updatedSavedList = savedList.map(
			(list, i) => (list[0] === id ? (savedList[i] = editedList) : list)
		);
		console.log('edited', updatedSavedList);
		setPersonalList({ ...personalList, savedList: updatedSavedList });
		window.localStorage.clear();
		window.localStorage.setItem('savedList', JSON.stringify(updatedSavedList));
		setIsEditing();
		setEdited();
	};
	const handleDelete = (id) => {
		let remainSavedList = savedList.filter((list) => list[0] !== id);
		setPersonalList({
			savedList: remainSavedList,
			shoppingList: []
		});
		window.localStorage.clear();
		window.localStorage.setItem('savedList', JSON.stringify(remainSavedList));
		setDeleted();
	};
	const changeToEdit = (list) => {
		setEditingList({ list: list });
		setIsEditing();
	};
	console.log(savedList);
	return (
		<Fragment>
			<Navbar />
			<div className={classes.root}>
				{isEditing && (
					<Fragment>
						<Typography
							component="h2"
							variant="h2"
							gutterBottom
							style={{
								textAlign: 'center',
								color: 'white',
								marginBottom: '3rem',
								marginTop: '3rem'
							}}
						>
							Mi perfil
						</Typography>
						<EditProfileList
							list={editingList.list}
							setIsEditing={setIsEditing}
							handleSaveEdit={handleEdit}
							className={classes.editionPaper}
						/>
					</Fragment>
				)}
				{!isEditing &&
					(savedList !== null && savedList !== false ? (
						<Fragment>
							<Typography
								component="h2"
								variant="h2"
								style={{
									textAlign: 'center',
									color: 'white',
									marginTop: '3rem'
								}}
							>
								Mi perfil
							</Typography>
							<Typography
								component="h4"
								variant="h5"
								gutterBottom
								style={{
									textAlign: 'center',
									color: 'white',
									marginBottom: '3rem'
								}}
							>
								Mis listas guardadas:
							</Typography>
							<Grid
								key="grid-container"
								container
								spacing={3}
								justify="center"
								alignContent="center"
								direction="row"
								className={classes.grid}
							>
								{savedList.map((list) => {
									return (
										<ProfileCard
											key={list[0]}
											list={list}
											handleDelete={handleDelete}
											changeToEdit={changeToEdit}
										/>
									);
								})}
							</Grid>
						</Fragment>
					) : (
						<div className={classes.emptyMsgContainer}>
							<Typography
								component="h1"
								variant="h4"
								gutterBottom
								style={{ paddingTop: '1em' }}
							>
								Tu perfil está vacío
							</Typography>
							<Typography component="p" variant="body1">
								Haz una selección de dieta y guarda tu primera lista de la
								compra
							</Typography>
							<Button
								variant="contained"
								size="medium"
								color="primary"
								className={classes.btn}
							>
								<Link to="/" className={classes.link}>
									CONTINUAR
								</Link>
							</Button>
						</div>
					))}
			</div>
			<Fragment>
				<MySnackbar
					open={deleted}
					handleClose={setDeleted}
					msg="Has eliminado tu lista de la compra"
				/>
				<MySnackbar
					open={edited}
					handleClose={setEdited}
					msg="Has modificado tu lista de la compra"
				/>
			</Fragment>
		</Fragment>
	);
}

export default withStyles(styles)(MyProfile);
