import React, { useEffect,useContext } from 'react';
import useStyles from '../styles';
import MediaCard from "../../components/myCard";
import { Grid } from '@material-ui/core';
import NewPost from "./NewPost";
import Footer from "../../components/footer";

import AnuncioContext from '../../context/anuncios/context'
const Posts = () => {
    const classes = useStyles();
    
    const anuncioContext = useContext(AnuncioContext);
    const { anuncios, obtenerAnunciosFn } = anuncioContext;
    
    
    useEffect(() => {
        
        const cargarAnuncios = async() => {
            await obtenerAnunciosFn()  
        }
        cargarAnuncios();
        // eslint-disable-next-line
    }, []);
   
    const inSession = true;

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} id="back-to-top-anchor" />
            <h1>Mis Anuncios</h1>

            
            {/*<NewPost onClick={handleClickOpen} open={open} onClose={handleClose} TransitionComponent={Transition}/> */}
            <NewPost/>  

            <Grid container spacing={2}>
         
         {anuncios &&
             anuncios.map((post, i) => {
                 var habilidades="";
                 post.habilidad.map(item => habilidades+=item.nombre+" " )
                 habilidades = habilidades.substring(0, habilidades.length - 1);
                 if(post.usuario=="12"){
                 return (
                     
                     <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                         <MediaCard key={i} id={post.id} title={post.nombre} description={post.descripcion} banner={post.banner}
                             vacantes={post.vacantes} likes={post.cant_interesados} tags={habilidades} habilidad={post.habilidad} fecha_inicio={post.fecha_inicio}
                             fecha_termino={post.fecha_termino} categoria={post.categoria}
                         />
                     </Grid>
                   
                 ) }
             })
             
         }

     </Grid>
                <Footer/>
            {/* <MostrarAnuncio open={open} handleClose={handleClose}/>   */}
        </main>
    );
}

export default Posts;
