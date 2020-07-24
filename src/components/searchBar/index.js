import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Button,Box, Typography } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input'
import useStyles from './style';

const filterChips= () => {
    var array = document.getElementsByClassName("WAMuiChipInput-chip-55 MuiChip-clickable MuiChip-deletable")
    var cards = document.getElementsByClassName("MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-2")

    var arrayTags=[]
    for(var element of array){
        arrayTags.push(element.innerText)
    }

    if(arrayTags.length != 0){
        for(var card of cards){
            var tags = card.getElementsByClassName("MuiChip-root")
            var tagCards=[]
            for(var tag of tags){
                tagCards.push(tag.textContent)
            }
            
            for(var e of arrayTags){
                if(!tagCards.includes(e)){
                    card.style.display="none"
                }
            }
            
        }
    }
    else{
        for(var card of cards){
            card.style.display=""
        }
    }
    


}

const SearchBar= () => {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.root} mx="auto"  >
                <h2 align="center">Buscar por criterio</h2>
                <div className={classes.search}>
                    <ChipInput
                        //defaultValue={['clown fish', 'whale', 'shark']}
                        fullWidth
                        placeholder='Ingrese los criterios de busqueda'
                        />
                    
                    <Button
                        defaultValue={['foo']}
                        variant="contained"
                        size="large"
                        className={classes.button}
                        startIcon={<SearchIcon/>}

                        onClick={filterChips}>
                        Buscar
                    </Button>

                </div>
                

            </Box>

        </div>
        

    );

    

}

// onClick={() =>
                             //{/ 
                              //   var array = document.getElementsByClassName("WAMuiChipInput-chip-55 MuiChip-clickable MuiChip-deletable")
                              //  for(var element of array){
                              //      console.log(element.innerText)
                              // }
                               //  }}

export default SearchBar;

