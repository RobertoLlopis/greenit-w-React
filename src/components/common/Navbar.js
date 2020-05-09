import React, { useState, Fragment } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Fade,
	Menu,
	MenuItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import logo from '../../mediaContent/logo.jpeg';
import { GreenButton } from '../../styles/styledComponents';
import { useStyles } from '../../styles/NavbarStyles';

export default function Navbar() {
	const [
		anchorEl,
		setAnchorEl
	] = useState();
	const classes = useStyles();
	const responsiveMenu = window.innerWidth >= 600 ? 'desktop' : 'mobile';
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<nav>
			<AppBar position="static">
				<Toolbar className={classes.root}>
					<Link to="/">
						<img src={logo} alt="logo" className={classes.media} />
					</Link>
					{responsiveMenu === 'desktop' && (
						<div>
							<GreenButton style={{ marginRight: '2rem' }}>
								<Link to="/" className={classes.btnLink}>
									Inicio
								</Link>
							</GreenButton>
							<GreenButton>
								<Link to="/myprofile" className={classes.btnLink}>
									Mi perfil
								</Link>
							</GreenButton>
						</div>
					)}
					{responsiveMenu === 'mobile' && (
						<Fragment>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="open drawer"
								onClick={handleClick}
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="fade-menu"
								anchorEl={anchorEl}
								keepMounted
								open={open}
								onClose={handleClose}
								TransitionComponent={Fade}
							>
								<MenuItem onClick={handleClose}>
									<Link to="/" className={classes.menuLink}>
										Inicio
									</Link>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<Link to="/myprofile" className={classes.menuLink}>
										Mi perfil
									</Link>
								</MenuItem>
							</Menu>
						</Fragment>
					)}
				</Toolbar>
			</AppBar>
		</nav>
	);
}
