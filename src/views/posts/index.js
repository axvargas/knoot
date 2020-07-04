import React from 'react';
import useStyles from '../styles';
import MediaCard from "../../components/myCard";
import { Grid } from '@material-ui/core';
import MostrarAnuncio from "./MostrarAnuncio";
import NewPost from "./NewPost";
import Slide from '@material-ui/core/Slide';

/*
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  */

const Posts = () => {
    const classes = useStyles();

    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    

    const posts = [
        {
            title: "Titulo 1", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`},
        {
            title: "Titulo 2", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`},
        {
            title: "Titulo 3", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`},
        {
            title: "Titulo 4", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`},
        {
            title: "Titulo 5", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`},
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
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} onClick={handleClickOpen} >
                                        <MediaCard key={i} title={post.title} description={post.description} />
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                }

<MostrarAnuncio open={open} handleClose={handleClose}/>  
        </main>
    );
}

export default Posts;
