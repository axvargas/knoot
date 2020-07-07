import React from 'react';
import useStyles from '../styles';

import SearchBar from '../../components/searchBar';
import Footer from "../../components/footer";
import Anuncios from './anuncios';
import Perfiles from './perfiles';

const Home = () => {
    const classes = useStyles();

    const inSession = true;
    return (
        <>
            <main className={classes.content}>
                <div className={classes.toolbar} id="back-to-top-anchor" />
                <h1>Inicio</h1>
                <SearchBar />
                

                {inSession &&
                    <Perfiles/>
                }

            <Footer/>
            </main>


        </>
    );
}

export default Home;
