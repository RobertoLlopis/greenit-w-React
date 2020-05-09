import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: 'black',
		height: '5rem',
		minHeight: '70px',
		padding: '0 3rem',
		[theme.breakpoints.up('lg')]: {
			height: '6rem'
		},
		[theme.breakpoints.down('sm')]: {
			padding: '0 1rem'
		}
	},
	btnLink: {
		textDecoration: 'none',
		fontWeight: '600',
		color: 'white'
	},
	menuLink: {
		textDecoration: 'none',
		color: 'black'
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},

	media: {
		paddingBottom: '1.2rem',
		paddingTop: '1rem',
		width: '200px',
		height: '70px',
		[theme.breakpoints.up('md')]: {
			paddingBottom: '1.2rem',
			paddingTop: '1.2rem'
		}
	}
}));
