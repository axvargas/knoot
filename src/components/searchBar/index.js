import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Box, Typography } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input'

const useStyles = makeStyles({
    root: {
        width: '50%',
        
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    search: {
        marginBottom: '10',
        display: 'flex',
    }


});



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
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<SearchIcon/>}>
                        Buscar
                    </Button>

                </div>
                

            </Box>

        </div>
        

    );

}

export default SearchBar;
