import React from 'react';
import useStyles from '../styles';
import MediaCard from "../../components/card";
import { Grid } from '@material-ui/core';
import Footer from "../../components/footer";
import banner from '../../recursos/public.jpg';
const Favorites = () => {
    const classes = useStyles();

    const posts = [
        {
            title: "Titulo 1", 
            description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        fecha_inicio:"2020-02-01",
        fecha_termino:"2020-03-12",
        vacantes: 10,
        likes: 23, 
        tags: "Texto1 Texto2 Texto3"},
        {
            title: "Titulo 3", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        fecha_inicio:"2020-02-01",
        fecha_termino:"2020-03-12",
        vacantes: 10,
        likes: 23,
        tags: "Texto1 Texto2 Texto3"},
        {
            title: "Titulo 4", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        fecha_inicio:"2020-02-01",
        fecha_termino:"2020-03-12",
        vacantes: 10,
        likes: 23, 
        tags: "Texto1 Texto2 Texto3"},
    ]

    const inSession = true;
    return (
        <>
            <main className={classes.content}>
                <div className={classes.toolbar} id="back-to-top-anchor" />
                <h1>Favoritos</h1>
                {inSession &&
                    <Grid container spacing={2}>
                        {
                            posts.map((post, i) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <MediaCard key={i} title={post.title} description={post.description} banner={banner}
                                        vacantes={post.vacantes} likes={post.likes} tags={post.tags} fecha_inicio={post.fecha_inicio}
                                        fecha_termino={post.fecha_termino} />
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                }

                <Footer/>
            </main>


        </>
    );
}

export default Favorites;
