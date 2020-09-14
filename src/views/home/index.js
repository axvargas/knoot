import React, { useState, useEffect } from 'react';
import useStyles from '../styles';

import SearchBar from '../../components/searchBar';
import VerticalTabs from '../../components/verticalTab';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Footer from "../../components/footer";
import { Button } from '@material-ui/core';
import AuthContext from '../../context/auth/context';
const Home = () => {
    const classes = useStyles();
    const [anuncioSteps, setAnuncioSteps] = useState(false);
    const [inSession, setInSession] = useState(true);
    const { signOut } = React.useContext(AuthContext);
    useEffect(() => {
        if (anuncioSteps === true) {
            console.log(anuncioSteps);
        }
    }, [anuncioSteps]);
    return (
        <>
            <main className={classes.content}>
                <div className={classes.toolbar} id="back-to-top-anchor" />
                <div>
                    <Button onClick={() => signOut()}>
                        <ExitToAppIcon/>
                        Salir
                        </Button>

                </div>
                <div className="search">
                    <SearchBar />
                </div>
                {inSession &&
                    <div className="verticaltab">
                        <VerticalTabs/>
                    </div>
                }
                <Footer/>
            </main>



        </>
    );
}

export default Home;
