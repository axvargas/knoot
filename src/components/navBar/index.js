import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { routes, routesSession } from './routes';
import useStyles from './styles';
import {
    Button,
    List,
    ListSubheader,
    Divider,
    MenuItem
} from '@material-ui/core';

import ListItemLink from './ListItemLink';


export const NavBar = () => {
    const classes = useStyles();
    return (
        <nav className={classes.nav}>
            {
                routes.map((route, i) => {
                    return (
                        <Button
                            component={RouterLink}
                            className={classes.btn}
                            color="inherit"
                            key={i + route.text + route.link}
                            to={route.link}
                        >
                            {route.text}
                        </Button>
                    );
                })
            }

        </nav>
    );
}

export const NavBarSession = () => {
    const classes = useStyles();
    return (
        <nav className={classes.hideDown}>
            {
                routesSession.map((route, i) => {
                    return (
                        <Button
                            component={RouterLink}
                            className={classes.btn}
                            color="inherit"
                            key={i + route.text + route.link}
                            to={route.link}
                        >
                            {route.text}
                        </Button>
                    );
                })
            }
        </nav>
    );
}

export const NavBarList = ({ handleDrawerToggle }) => {
    return (
        <>
            <List
                component="nav"
                aria-label="main mailbox folders"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Menu
                    </ListSubheader>
                }
            >
                {
                    routes.map((route, i) => {
                        if (route.text !== "Acerca de") {
                            return (
                                <ListItemLink key={i} to={route.link} primary={route.text} handleDrawerToggle={handleDrawerToggle} />
                            )
                        }
                        return null;
                    })
                }
            </List >
            <Divider />
            <List
                component="nav"
                aria-label="main mailbox folders"
            >
                <ListItemLink to={"/about"} primary={"Acerca de"} handleDrawerToggle={handleDrawerToggle} />
            </List>

        </>
    );
}

export const NavBarMenu = ({ handleClose }) => {
    return (
        <>
            {
                routesSession.map((route, i) => {
                    return (
                        <MenuItem
                            key={i + route.text}
                            component={RouterLink}
                            to={route.link}
                            onClick={handleClose}
                        >
                            {route.text}
                        </MenuItem>
                    );
                })
            }
        </>
    );
}





