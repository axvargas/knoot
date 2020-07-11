import React from 'react';
import useStyles from '../styles';
import ContactForm from '../../components/contactForm';

const Contact = () => {
    const classes = useStyles();

   

    const inSession = true;
    return (
        <>
            <main className={classes.content}>
                <div className={classes.toolbar} id="back-to-top-anchor" />
                <h1>Contáctanos</h1>

                <ContactForm/>
                


                


            </main>


        </>
    );
}

export default Contact;
