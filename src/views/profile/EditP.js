import React from 'react';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
const useStyle = makeStyles((theme) => ({
    cont1: {
        backgroundColor: '#E5E9F2',
    },
    cont2: {
        backgroundColor: '#F8F8F8',
        margin: theme.spacing(0,10),
    },
    cont3: {
         margin: theme.spacing(0,10),
    },
    textcenter: {
        alignItems: 'center',
        justifyContent:'center',
        display: 'flex',

    },
     autocom: {
    width: '80%',
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));
const EditarPerfil = ({ open, handleClose}) => {
    const classe = useStyle();
    return (
        <Dialog 
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div className={classe.cont1} >
                <DialogTitle id="alert-dialog-title"  className={classe.textcenter}>{<h2>Editar Perfil</h2>}</DialogTitle>
                <DialogContent>
                    <div className={classe.cont2} >
                        <h3>Informacion Personal</h3> 
                        <div className={classe.cont3} >
                            <fromGroup> 
                                <TextField
                                    required
                                    variant="outlined"
                                    margin="dense"
                                    id="nombre"
                                    label="Nombre"
                                    type="text"
                                    fullWidth
                                />            

                                <TextField
                                    required
                                    variant="outlined"
                                    margin="dense"
                                    id="apellido"
                                    label="Apellido"
                                    type="text"
                                    fullWidth
                                /> 

                                <TextField
                                    required
                                    variant="outlined"
                                    margin="dense"
                                    id="email"
                                    label="E-mail"
                                    type="email"
                                    fullWidth
                                /> 

                                <TextField
                                    variant="outlined"
                                    margin="dense"
                                    id="ciudad"
                                    label="Ciudad"
                                    type="text"
                                    fullWidth
                                /> 

                                 <TextField
                                      id="standard-multiline-static"
                                      label="Descripción"
                                      multiline
                                      fullWidth
                                      rows={4}
                                />
                               
                            </fromGroup>
                        </div>
                        <h3>Habilidades</h3> 
                        <div className={classe.autocom}>
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                options={top100Films}
                                getOptionLabel={(option) => option.title}
                                defaultValue={[top100Films[13]]}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    variant="outlined"
                                    label="Selecciona tus Habilidades"
                                    placeholder="Buscar"
                                  />
                                )}
                            />
                        </div>  
                    </div>
                </DialogContent>
        
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Editar
                    </Button>
                </DialogActions>
            
            </div>
        </Dialog>
    )
}
export default EditarPerfil;
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
];