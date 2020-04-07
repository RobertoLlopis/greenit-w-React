import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
	const {selection} = props;
	const [
		makingList,
		setMakingList
	] = useContext(ProfileContext);
	const toggleButtons = () => {
		setMakingList(!makingList);
	};

	return (
		<div className={classes.root}>
			{makingList ? (
				<span>{ selection.dieta !== '' &&
					(<><Button
						variant="contained"
						size="medium"
						color="primary"
						className={classes.margin}
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
					</Button></>)}
				</span>
			) : (
				<GreenButton variant="outlined" size="large" onClick={toggleButtons}>
					Haz tu lista de la compra
				</GreenButton>
			)}
		</div>
	);
}
