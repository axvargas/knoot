import React, { useState, useEffect } from 'react';
import useStyles from '../styles';

import SearchBar from '../../components/searchBar';
import VerticalTabs from '../../components/verticalTab';
import { Steps } from 'intro.js-react';
import Footer from "../../components/footer";
const Home = () => {
    const classes = useStyles();
    const [anuncioSteps, setAnuncioSteps] = useState(false);
    const [intro, setIntro] = useState({
        stepsEnabled: true,
        initialStep: 0,
        steps: [
            {
                element: '.search',
                intro: 'Aqui se puede realizar las busquedas por atributos',
            },
            {
                element: '.verticaltab',
                intro: 'Aqui se mostraran los anuncios disponibles',
            },
       
        ]
    });
    const [inSession, setInSession] = useState(true);

    useEffect(() => {
        if (anuncioSteps === true) {
            console.log(anuncioSteps);
        }
    }, [anuncioSteps]);
    return (
        <>
            <main className={classes.content}>
                <div className={classes.toolbar} id="back-to-top-anchor" />
                <div className="search">
                    <SearchBar />
                </div>



                {inSession &&
                    <div className="verticaltab">
                        <VerticalTabs/>
                    </div>

                }

                <Steps
                    enabled={intro.stepsEnabled}
                    steps={intro.steps}
                    initialStep={intro.initialStep}
                    onExit={() => {
                        setIntro({
                            ...intro,
                            stepsEnabled: false
                        })
                        //setAnuncioSteps(true);

                    }}

                />





                <Footer/>
            </main>



        </>
    );
}

export default Home;
