import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		margin: '2rem auto',
		backgroundColor: '#FFFFFF',
		borderRadius: '10px',
		width: '70%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: '2rem',
		[theme.breakpoints.down('sm')]: {
			width: '100%'
		}
	},
	formContainer: {
		/* height: '40vh', */
		/* width: '100vw', */
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			paddingTop: '1.5rem'
		}
	}
}));
