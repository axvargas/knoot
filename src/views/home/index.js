import React from 'react';
import useStyles from '../styles';

import SearchBar from '../../components/searchBar';
import Footer from "../../components/footer";
import VerticalTabs from '../../components/verticalTab';
import { Steps} from 'intro.js-react';

const Home = () => {
    const classes = useStyles();

    const inSession = true;

    const stepsEnabled = true;
    const initialStep= 0;
    const steps = [
        {
            element: '.search',
            intro: 'Aqui se puede realizar las busquedas por atributos',
        },
        {
            element: '.verticaltab',
            intro: 'Aqui se mostraran los anuncios disponibles',
        },
        
      ];
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
                    enabled={stepsEnabled}
                    //enabled={false}
                    steps={steps}
                    initialStep={initialStep}
                    // onexit = {
                    //     menuCtrl.close();
                    //     this.hideStep();
                    // }
                />
                
                
                    
                
                
            
            </main>

            

        </>
    );
}

export default Home;
