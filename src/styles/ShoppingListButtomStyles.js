import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		margin: 'auto',
		padding: '2rem 0'
	},
	makingRoot: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: '0.5rem',
		backgroundColor: 'white',
		width: '40%',
		margin: '0 auto',
		marginBottom: '2rem',
		borderRadius: '0px 0px 10px 10px',
		[theme.breakpoints.down('sm')]: {
			width: '80%',
			marginTop: '-1.75rem'
		}
	},

	margin: {
		margin: theme.spacing(1)
	}
}));
