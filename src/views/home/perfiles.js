import React from 'react';
import ProfileCard from "../../components/cardProfile";
import { Grid } from '@material-ui/core';
import useStyles from '../styles';



const Perfiles = () => {
    
    const classes = useStyles();

    const posts = [
        {
            title: "Persona 1", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        tags: "Texto1 Texto2 Texto3", imagen:"../../recursos/pf_placeholder.png"},
        {
            title: "Persona 2", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        tags: "Texto1 Texto2 Texto3", imagen:"../../recursos/pf_placeholder.png"},
        {
            title: "Persona 3", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        tags: "Texto1 Texto2 Texto3", imagen:"../../recursos/pf_placeholder.png"},
        {
            title: "Persona 4", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        tags: "Texto1 Texto3", imagen:"../../recursos/pf_placeholder.png"},
        {
            title: "Persona 5", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        tags: "Texto3 Texto4", imagen:"../../recursos/pf_placeholder.png"},
    ]


    return (
        <Grid container spacing={2}>
                        {
                            posts.map((post, i) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <ProfileCard key={i} title={post.title} description={post.description}
                                        likes={post.likes} views={post.views} tags={post.tags} imagen={post.imagen}
                                        />
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
    );
}

export default Perfiles;
