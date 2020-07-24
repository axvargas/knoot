import React from 'react';
import useStyles from '../styles';
import MediaCard from "../../components/myCard";
import { Grid } from '@material-ui/core';
import NewPost from "./NewPost";
import Footer from "../../components/footer";
const Posts = () => {
    const classes = useStyles();

    const posts = [
        {
            title: "Titulo 1", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        views: "10", tags: "Texto3 Texto4", autor:"Usuario"
        },
        {
            title: "Titulo 2", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        views: "20", tags: "Texto3 Texto4", autor:"Usuario"},
        {
            title: "Titulo 3", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        views: "101", tags: "Texto3 Texto4", autor:"Usuario"},
        {
            title: "Titulo 5", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        views: "120", tags: "Texto3 Texto4", autor:"Usuario"},
    ]

    const inSession = true;

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} id="back-to-top-anchor" />
            <h1>Mis Anuncios</h1>

            
            {/*<NewPost onClick={handleClickOpen} open={open} onClose={handleClose} TransitionComponent={Transition}/> */}
            <NewPost/>  

            {inSession &&
                    <Grid container spacing={2} >
                        {
                            posts.map((post, i) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                        <MediaCard key={i} title={post.title} description={post.description}
                                        views={post.views} tags={post.tags} autor={post.autor}/>
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                }
                <Footer/>
            {/* <MostrarAnuncio open={open} handleClose={handleClose}/>   */}
        </main>
    );
}

export default Posts;
