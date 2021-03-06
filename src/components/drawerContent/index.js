import React from 'react';
import {
    Divider,
    Hidden,
} from '@material-ui/core';

// Component imports
import SelectedListItem from '../selectedListItem';
// Style imports
import useStyles from './style';
const DrawerContent = ({ handleDrawerToggle }) => {
    const classes = useStyles();
    return (
        <div>

            <div className={classes.toolbar} />

            <Divider />
            {/* WITH LIST */}
            <Hidden mdUp>
                <SelectedListItem
                    handleDrawerToggle={handleDrawerToggle}
                />
            </Hidden>

        </div>
    );
}


export default DrawerContent;