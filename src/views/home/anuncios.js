import React, { useEffect,useContext } from 'react';
import MediaCard from "../../components/card";
import { Grid } from '@material-ui/core';
import useStyles from '../styles';
import AnuncioContext from '../../context/anuncios/context'


const Anuncios = () => {

    const classes = useStyles();
    const anuncioContext = useContext(AnuncioContext);
    const { anuncios, obtenerAnunciosFn } = anuncioContext;
    
    
    useEffect(() => {
        
        const cargarAnuncios = async() => {
            await obtenerAnunciosFn()  
        }
        cargarAnuncios();
    }, []);

    return (
        <Grid container spacing={2}>
        
            {anuncios &&
                anuncios.map((post, i) => {
                    var habilidades="";
                    post.habilidad.map(item => habilidades+=item.nombre+" " )
                    habilidades = habilidades.substring(0, habilidades.length - 1);
                    return (
                        
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                            <MediaCard key={i} title={post.nombre} description={post.descripcion} banner={post.banner}
                                vacantes={post.vacantes} likes={post.cant_interesados} tags={habilidades}  fecha_inicio={post.fecha_inicio}
                                fecha_termino={post.fecha_termino} categoria={post.categoria}
                            />
                        </Grid>
                     
                    )
                })
                
            }

        </Grid>
    );
}

export default Anuncios;
