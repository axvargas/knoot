import React from 'react';
import useStyles from '../styles';
import {Grid} from '@material-ui/core';
import ContactForm from '../../components/contactForm';
import contact from '../../recursos/contact1.png';
import Footer from "../../components/footer";

const Contact = () => {
    const classes = useStyles();
   

    const inSession = true;
    return (
        <>
            <main className={classes.content}>
                <div className={classes.toolbar} id="back-to-top-anchor" />
                <h1> Contactanos </h1>

                <Grid container className={classes.container} direction="row" justify="space-between" >
                        <Grid  item xs={false} sm={6} md={6} lg={6} style={{textAlign:"center"}}>
                            <img src={contact} alt="contact" style={{ maxWidth: '100%'}} />
                        </Grid>
                        <Grid items xs={12} sm={6} md={6} lg={6} style={{flexGrow: 0, paddingLeft: '20px'}} >
                            <ContactForm/>
                        </Grid>

                </Grid>
                <Footer/>
            </main>
        </>
    );
}

export default Contact;
