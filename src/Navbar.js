import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import logo from './mediaContent/logo.jpeg';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: 'black',
		height: '5rem',
		minHeight: '70px',
		[theme.breakpoints.up('lg')]: {
			height: '6rem'
		}
	},
	link: {
		textDecoration: 'none',
		color: 'white'
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

export default function Navbar() {
	const classes = useStyles();

	return (
		<div>
			<AppBar position="static">
				<Toolbar className={classes.root}>
					<Link to="/">
						<img src={logo} alt="logo" className={classes.media} />
					</Link>
					<Link to="/myprofile" className={classes.link}>
						Mi perfil
					</Link>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
