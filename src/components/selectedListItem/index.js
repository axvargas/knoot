import React from "react";





import {NavBarList} from '../navBar';
import useStyles from './style';



const SelectedListItem = ({ handleDrawerToggle }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBarList handleDrawerToggle={handleDrawerToggle} />
            {/* <List
                component="nav"
                aria-label="main mailbox folders"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Menu
                     </ListSubheader>
                }
            >
                {
                    categories.map((category, i) => {
                        return (
                            <ListItem key={i} button>
                                 <ListItemText primary={category} />
                            </ListItem>
                        )
                    })
                }
            </List >
            <Divider /> */}
        </div >
    );
}

export default SelectedListItem;
