import React, { Fragment } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function MySnackbar(props) {
	const { open, link, handleClose, msg } = props;

	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left'
			}}
			open={open}
			autoHideDuration={2500}
			onClose={handleClose}
			message={msg}
			action={
				<Fragment>
					{link && (
						<Button variant="outlined" style={{ border: '1px solid white' }}>
							<Link
								to="/myprofile"
								style={{
									fontWeight: 700,
									color: 'white',
									textDecoration: 'none'
								}}
							>
								Mi perfil
							</Link>
						</Button>
					)}
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
	);
}
