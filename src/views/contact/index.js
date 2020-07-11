import React from 'react';
import useStyles from '../styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Grid,  CssBaseline } from '@material-ui/core';
import ContactForm from '../../components/contactForm';
import contact from '../../recursos/contact.jpg';
import { makeStyles } from '@material-ui/core/styles';


const Contact = () => {
    const classes = useStyles();
   

    const inSession = true;
    return (
        <>
            <main className={classes.content}>
                <div className={classes.toolbar} id="back-to-top-anchor" />
                <h1> Contactanos </h1>
                <Grid container className={classes.container} direction="row" justify="space-between" >
                        <CssBaseline/>
                        <Grid item xs={false} sm={6} md={6} lg={6} style={{textAlign:"center"}} >
                            <img src={contact} alt="contact" className={classes.imagine} />
                        </Grid>
                        <Grid items xs={12} sm={6} md={6} lg={6}  >
                            <ContactForm/>
                        </Grid>


                </Grid>

            </main>
        </>
    );
}

export default Contact;
