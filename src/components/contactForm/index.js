import React from 'react';
import useStyles from './style';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';


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
        <form className={classes.root} noValidate autoComplete="off">
      
                <Typography>
                Nuestra unidad de atención al cliente se encuentra a su disposición para realizar reclamos, consultas y sugerencias. Por favor, llene el siguiente formulario:
                </Typography>
                <br/>
                <div className={classes.div}>
                    <TextField
                    required
                    id="nombre"
                    label="Nombre"
                    placeholder="Escriba aqui su nombre"
                    variant="outlined"
                    />
                    <TextField
                    required
                    id="apellido"
                    label="Apellido"
                    placeholder="Escriba aqui su apellido"
                    variant="outlined"
                    />
                </div>
                

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
                    required
                    id="date"
                    label="Fecha de nacimiento"
                    type="date"
                    variant="outlined"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />

                <TextField
                    required
                    id="email"
                    className={classes.textField}
                    label="Correo electrónico de contacto"
                    placeholder="Escriba aqui su correo electrónico"
                    variant="outlined"
                />

                <TextField
                    id="outlined-multiline-static"
                    className={classes.textField}
                    label="Detalle"
                    multiline
                    rows={4}
                    placeholder="Escriba su mensaje aqui"
                    variant="outlined"
                    />



                    
                </form>
    );
}
export default ContactForm;