import React from 'react';
import MediaCard from "../../components/card";
import { Grid } from '@material-ui/core';
import useStyles from '../styles';


const Anuncios = () => {
    
    const classes = useStyles();

    const posts = [
        {
            title: "Titulo 1", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        likes: "5", views: "20", tags: "Texto1 Texto2 Texto3"},
        {
            title: "Titulo 2", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        likes: "5", views: "20", tags: "Texto1 Texto2 Texto3"},
        {
            title: "Titulo 3", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        likes: "2", views: "20", tags: "Texto1 Texto2 Texto3"},
        {
            title: "Titulo 4", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        likes: "10", views: "20", tags: "Texto1 Texto3"},
        {
            title: "Titulo 5", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        likes: "7", views: "20", tags: "Texto3 Texto4"},
    ]


    return (
        <Grid container spacing={2}>
                        {
                            posts.map((post, i) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <MediaCard key={i} title={post.title} description={post.description}
                                        likes={post.likes} views={post.views} tags={post.tags}
                                        />
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
    );
}

export default Anuncios;
