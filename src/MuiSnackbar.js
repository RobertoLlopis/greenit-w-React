import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2)
		}
	}
}));

export default function MuiSnackbar(props) {
	const classes = useStyles();
	const { open, close } = props;

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		close();
	};

	return (
		<div className={classes.root}>
			<Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
				action={
					<React.Fragment>
						<IconButton
							size="small"
							aria-label="close"
							color="inherit"
							onClick={handleClose}
						>
							<CloseIcon fontSize="small" />
						</IconButton>
					</React.Fragment>
				}
			>
				Has guardado tu lista de la compra.
			</Snackbar>
		</div>
	);
}
