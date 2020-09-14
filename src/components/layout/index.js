import React, { useState, useContext } from 'react';
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
import DrawerContent from '../drawerContent';

import { NavBar, NavBarSession, NavBarMenu } from '../navBar'

// Styles imports
import useStyles from './style';
import { useTheme } from '@material-ui/core/styles';

import ScrollTop from '../scrollTop';
import AuthContext from '../../context/auth/context';

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

	const { changeNav } = React.useContext(AuthContext)
	
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
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


					{changeNav()!=null ? <NavBar /> : <NavBarSession />}
						
					
					
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