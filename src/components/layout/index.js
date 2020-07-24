import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	AppBar,
	CssBaseline,
	Drawer,
	Hidden,
	IconButton,
	Toolbar,
	Typography,
	Menu,
	Fab
} from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import DrawerContent from '../drawerContent';

import { NavBar, NavBarSession, NavBarMenu } from '../navBar'

// Styles imports
import useStyles from './style';
import { useTheme } from '@material-ui/core/styles';

import ScrollTop from '../scrollTop';

const ResponsiveDrawer = ({ children, window }) => {

	const classes = useStyles();
	const theme = useTheme();

	//Local state
	const [mobileOpen, setMobileOpen] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);


	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	// const handleSignOut = () => {
	// 	handleClose();
	// 	//signOutUser();
	// }

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar} className={classes.bgcolor}>
				<Toolbar >

					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>

					<Typography component={RouterLink} to={"/"} variant="h6" className={classes.namePage} noWrap>
						Knoot
          			</Typography>



					<NavBar />
					{/* <nav className={classes.nav}>
						{
							categories.map((cat, i) => {
								return (
									<Button className={classes.btn} color="inherit" key={i}>{cat}</Button>
								);
							})
						}

					</nav> */}
					<section className={classes.rightToolbar}>

						<NavBarSession />
						{/* <nav className={classes.hideDown}>
							<Button className={classes.btn} color="inherit" >{"Ingresar"}</Button>
							<Button className={classes.btn} color="inherit" >{"Registrarse"}</Button>
						</nav> */}

						<IconButton
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit"
							className={classes.hideUp}
						>
							<MoreVertIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={open}
							onClose={handleClose}
						>
							<NavBarMenu handleClose={handleClose} />
							{/* <MenuItem onClick={handleClose}>Iniciar</MenuItem>
							<MenuItem onClick={handleClose}>Registrarse</MenuItem> */}

						</Menu>
					</section>
				</Toolbar>
			</AppBar>
			<Hidden lgUp implementation="css">
				<nav className={classes.drawer} aria-label="mailbox folders">
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Drawer
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						<DrawerContent handleDrawerToggle={handleDrawerToggle} />
					</Drawer>


				</nav>
			</Hidden>


			<div className={classes.toolbar} />
			{children}

			
			<ScrollTop window={window}>
				<Fab color="secondary" size="small" aria-label="scroll back to top" className={classes.fab}>
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>

		</div>
	);
}

ResponsiveDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default ResponsiveDrawer;