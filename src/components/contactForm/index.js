import React, { useState } from 'react';
import useStyles from './style';
import TextField from '@material-ui/core/TextField';
import { Typography, Box, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SendIcon from '@material-ui/icons/Send';


const ContactForm = () => {
    const classes = useStyles();

    const [origen, setOrigen] = React.useState('');
    const [form, setForm] = useState({});
    const handleChange = (event) => {
        setOrigen(event.target.value);
    };

    //setOrigen(value);

    const handleChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSendEmail = async (e) => {
        console.log("Sending email")
        const url = "http://localhost:4000/send-email";
        const response = await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(form), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }

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
                <br />
                <div className={classes.div}>
                    <TextField
                        className={classes.textField}
                        required
                        name="nombre"
                        id="nombre"
                        label="Nombre"
                        placeholder="Escriba aqui su nombre"
                        variant="outlined"
                        onChange={handleChangeForm}

                    />
                    <TextField
                        className={classes.textField}
                        required
                        id="apellido"
                        name="apellido"
                        label="Apellido"
                        placeholder="Escriba aqui su apellido"
                        variant="outlined"
                        onChange={handleChangeForm}
                    />
                </div>
                <TextField
                    required
                    id="email"
                    name="email"
                    className={classes.textField}
                    label="Correo electrónico de contacto"
                    placeholder="Escriba aqui su correo electrónico"
                    variant="outlined"
                    onChange={handleChangeForm}
                />

                <TextField
                    required
                    id="telefono"
                    name="telefono"
                    className={classes.textField}
                    label="Telefono"
                    placeholder="Escriba aqui su telefono"
                    variant="outlined"
                    onChange={handleChangeForm}
                />

                <TextField
                    required
                    type="date"
                    name="fechaNacimiento"
                    id="fechaNacimiento"
                    label="Fecha de nacimiento"
                    placeholder="Escriba aqui su fecha de nacimiento"
                    variant="outlined"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChangeForm}
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
                    name="detalle"
                    multiline
                    rows={4}
                    placeholder="Escriba su mensaje aqui"
                    variant="outlined"
                    onChange={handleChangeForm}
                />
                <Button
                    variant="contained"
                    //color="primary"
                    size="large"
                    className={classes.button}
                    endIcon={<SendIcon />}
                    onClick={handleSendEmail}
                >
                    Enviar
                    </Button>

            </form>
        </Box>

    );
}
export default ContactForm;