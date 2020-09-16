import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Chip,Grid} from '@material-ui/core';
import useStyles from './styles';
import MostrarPerfil from'../showProfile/MostrarPerfil';
import Avatar from '@material-ui/core/Avatar';


const ProfileCard = ({ nombre, description,tags,imagen}) => {
    const classes = useStyles();

    const tagsSplit = tags.split(" ")

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card className={classes.root}>
            <CardActionArea
                onClick={handleClickOpen}
            >
                <CardMedia
                        className={classes.media}
                        image={imagen}
                        title={nombre}
                    />
                <CardContent>
                    <div className={classes.nombre}>
                        <Avatar src={imagen} />
                        <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                        
                        {nombre}
                        </Typography>
                    </div>
                    
                    <Typography variant="body2" component="p" className={classes.typography}>
                        {description}
                    </Typography>
                    <Grid container className={classes.tagsContainer}>
                        {
                            tagsSplit.map((tag) => {
                                return(
                                        <Grid item><Chip 
                                        label={tag}></Chip></Grid>
                                )
                                
                            })
                        }
                        
                        
                    </Grid>

                </CardContent>
            </CardActionArea>

            <MostrarPerfil open={open} handleClose={handleClose} nombre={nombre} description={description}
                tags={tags} imagen={imagen}/>
            
        </Card>
    );
}
export default ProfileCard;