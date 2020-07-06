import React from 'react';
import { AppBar, Typography, Toolbar, Box } from '@material-ui/core';
import useStyles from './style';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
const Footer = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar variant="dense">
                <Box mt={2} display="flex" flexDirection="row" m={1} className={classes.typo}>
                    <Box mx={1} mb={0.5}>
                        <Typography variant="h6" > Knoot&copy; 2020 </Typography>
                    </Box>
                </Box>
                <Box mt={2} display="flex" flexDirection="row" m={1}>

                    <Box mx={1}>
                        <FacebookIcon />
                    </Box>
                    <Box mx={1}>
                        <TwitterIcon />
                    </Box>
                    <Box mx={1}>
                        <InstagramIcon />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}



export default Footer;
