import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Box} from '@material-ui/core';
import ChipInput from 'material-ui-chip-input'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles({
    root: {
        width: '100%',
        
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    search: {
        marginBottom: '5',
        display: 'flex',
    }


});



const AddChip= () => {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.root} mx="auto"  >
                <div className={classes.search}>
                    
                    <ChipInput
                        //defaultValue={['clown fish', 'whale', 'shark']}
                        fullWidth 
                        placeholder='Cuales son tus habilidades?'
                        />
                    <Button
                        variant="contained"
                        className={classes.button}
                        startIcon={<AddCircleOutlineIcon/>}>
                        Agregar
                    </Button>

                </div>
                

            </Box>

        </div>


    );

}
export default AddChip;

