import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

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
					<img src={logo} alt="logo" className={classes.media} />
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
