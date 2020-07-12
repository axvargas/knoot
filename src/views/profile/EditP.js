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
import ChipInput from 'material-ui-chip-input'
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
    const defaultProps = {
          options: facultades,
          getOptionLabel: (option) => option.Facultad
        };
    const classe = useStyle();
    const [value, setValue] = React.useState(null);

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
                    <div justifyContent='left' >
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

                                 <Autocomplete
                                    {...defaultProps}
                                    id="controlled-demo"
                                    value={value}
                                    onChange={(event, newValue) => {
                                      setValue(newValue);
                                    }}
                                    renderInput={(params) =>
                                     <TextField {...params} 
                                        label="Facultad" 
                                        margin="normal" />}
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

                        <div>
                          
                           
                            <ChipInput
                              fullWidth
                              defaultValue={['Angular', 'jQuery', 'Polymer', 'React', 'Vue.js']}
                              placeholder='Ingrese tus habilidades'
                                />


                        </div>  
                    </div>
                </DialogContent>
        
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Guardar
                    </Button>
                </DialogActions>
            
            </div>
        </Dialog>
    )
}
export default EditarPerfil;
const top100Films = [
  { title: 'Programacion en Java'},
  { title: 'Programacion de Servicios' },
  { title: 'Postgradel' },
  { title: 'Manejo de Idiomas' },
  { title: 'AutoCad'},
  { title: 'Windows' },
  { title: 'Diseno Grafico' },
  { title: 'E-commerce' },
  { title: 'Dashboard' },
  { title: 'Circuitos' },
  { title: 'Conocimientos Canvas' },
  { title: 'Manejo de Algoritmos' },
  { title: 'Robotica' },
  { title: 'Ajedres'},
  { title: 'MongoDB'},
  { title: 'Fisica Cuantica' },
  { title: 'Estadisticas' },
  { title: 'Scout' },
];

const facultades = [
  { Facultad: 'Facultad de Ingenieria Electrica y Computacion', acronimo: 'FIEC' },
  { Facultad: 'Facultad de Ciencias Naturales y Matematicas', acronimo: 'FCNM'},
  { Facultad: 'Facultad de Ingenieria de Ciencias de la Tierra', acronimo: 'FICT' },
  { Facultad: 'Escuela de Diseno y Comunicacion', acronimo: 'EDCOM' },
  { Facultad: 'Facultad de Ingenieria Maritima y Ciencias del Mar', acronimo: 'FICMBOR' },
  { Facultad: 'Facultad de Ciencias Sociales y Humanisticas', acronimo: 'FSCH' },
  { Facultad: 'Facultad de Ciencias de la Vida', acronimo: 'fCV' },
  ];