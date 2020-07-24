import React from 'react';
import useStyles from './style';
import TextField from '@material-ui/core/TextField';
import { Typography,Box,Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SendIcon from '@material-ui/icons/Send';


const ContactForm = () => {
    const classes = useStyles();

    const [origen, setOrigen] = React.useState('');

    const handleChange = (event) => {
        setOrigen(event.target.value);
      };

    //setOrigen(value);
    

      const provincias = [
        'Guayas',
        'Manabi',
        'Esmeraldas',
        'Los Rios',
        'Santa Elena',
        'El Oro',
        'Pichincha',
        'Azuay',
        'Otros',
      ];

    return (
        <Box className={classes.root} mx="auto">
            <form className={classes.root} noValidate autoComplete="off" >           
              <Typography>
              Nuestra unidad de atención al cliente se encuentra a su disposición para realizar reclamos, consultas y sugerencias. Por favor, llene el siguiente formulario:
              </Typography>
                  <br/>
                  <div className={classes.div}>
                      <TextField
                      className={classes.textField}
                      required
                      id="nombre"
                      label="Nombre"
                      placeholder="Escriba aqui su nombre"
                      variant="outlined"
                      />
                      <TextField
                      className={classes.textField}
                      required
                      id="apellido"
                      label="Apellido"
                      placeholder="Escriba aqui su apellido"
                      variant="outlined"
                      />
                  </div>
                  <TextField
                      required
                      id="email"
                      className={classes.textField}
                      label="Correo electrónico de contacto"
                      placeholder="Escriba aqui su correo electrónico"
                      variant="outlined"
                  />

                  <TextField
                      required
                      id="telefono"
                      className={classes.textField}
                      label="Telefono"
                      placeholder="Escriba aqui su telefono"
                      variant="outlined"
                  />

                <TextField
                    required
                    type="date"
                    id="fechaNacimiento"
                    label="Fecha de nacimiento"
                    placeholder="Escriba aqui su fecha de nacimiento"
                    variant="outlined"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                   <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Lugar de origen</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={origen}
                        onChange={handleChange}
                        label="Origen"
                    >

                        {provincias.map((origen) => (
                                    <MenuItem key={origen} value={origen}>
                                    {origen}
                                    </MenuItem>
                                ))}
                    </Select>
                </FormControl>

                  <TextField
                      id="outlined-multiline-static"
                      className={classes.textField}
                      label="Detalle"
                      multiline
                      rows={4}
                      placeholder="Escriba su mensaje aqui"
                      variant="outlined"
                      />
                    <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<SendIcon/>}
                    >
                     Enviar 
                    </Button>
                            
            </form>
        </Box>
        
    );
}
export default ContactForm;