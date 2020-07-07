import React from 'react';
import useStyles from '../styles';

import SearchBar from '../../components/searchBar';
import Footer from "../../components/footer";
import VerticalTabs from '../../components/verticalTab';

const Home = () => {
    const classes = useStyles();

    const inSession = true;
    return (
        <>
            <main className={classes.content}>
                <div className={classes.toolbar} id="back-to-top-anchor" />
                <SearchBar />
                

                {inSession &&
                    <div>
                        <VerticalTabs/>
                    </div>
                    
                }

            </main>


        </>
    );
}

export default Home;
