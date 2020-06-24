import React from 'react';
import useStyles from '../styles';
const About = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} id="back-to-top-anchor" />
            <h1>Acreca De</h1>
            {[...new Array(12)]
                .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                )
                .join('\n')}
        </main>
    );
}
export default About;
