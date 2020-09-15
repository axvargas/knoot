import React, { useEffect, useContext } from 'react';
import ProfileCard from "../../components/cardProfile";
import { Grid } from '@material-ui/core';
import useStyles from '../styles';
import UsuarioContext from '../../context/perfiles/context'

const Perfiles = () => {
    
    const classes = useStyles();
    const usuarioContext = useContext(UsuarioContext);
    const { usuarios, obtenerUsuariosFn } = usuarioContext

    useEffect(() => {
        const cargarUsuarios = async () => {
            await obtenerUsuariosFn()
        }
        cargarUsuarios();
    }, []);



    return (
        <Grid container spacing={2}>
                { usuarios &&
                usuarios.map((post, i) => {
                    var habilidades = "";
                    post.habilidad.map(item => habilidades += item.nombre + " ")
                    habilidades = habilidades.substring(0, habilidades.length - 1);
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                            <ProfileCard key={i} nombre={post.id.persona.nombre} description={post.descripcion}
                            tags={habilidades} imagen={post.foto}
                            />
                        </Grid>
                    )
                })
            }

        </Grid>
    );
}

export default Perfiles;
