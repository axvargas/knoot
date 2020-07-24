import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Container, Tooltip, Chip, Grid } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import useStyles from './styles';
import MostrarAnuncio from '../../views/posts/MostrarAnuncio';
import imgcarta from '../../recursos/p.jpg';

const MediaCard = ({ title, description, likes, views, tags,autor}) => {
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

            <Card id="anuncio" className={classes.root}>
                <CardActionArea
                    onClick={handleClickOpen}
                >
                    <CardMedia
                        className={classes.media}
                        image={imgcarta}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                            {title}
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.typography}>
                            {description}
                        </Typography>
                        <Grid container className={classes.tagsContainer}>
                            {
                                tagsSplit.map((tag) => {
                                    return (
                                        <Grid item><Chip 
                                        //className={classes.bgWhite}
                                        //variant="outlined"
                                        label={tag}/></Grid>
                                    )

                                })
                            }


                        </Grid>




                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Tooltip title="Agregar a favorito" arrow placement="bottom">

                        <IconButton aria-label="favorite" className={classes.white}>
                            <Badge badgeContent={likes} color="primary" anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}>
                                <FavoriteIcon/>
                            </Badge>
                        </IconButton>


                    </Tooltip>

                    <Tooltip title="Compartir" arrow placement="bottom">
                        <IconButton aria-label="share">
                            <ShareIcon className={classes.white}/>
                        </IconButton>
                    </Tooltip>
                    <Container className={classes.views}>
                        <Tooltip title="Visualizaciones" arrow placement="bottom">
                            <IconButton aria-label="share">
                                <Badge badgeContent={views} color="primary" anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}>
                                    <VisibilityIcon className={classes.white}/>
                                </Badge>
                            </IconButton>

                        </Tooltip>
                    </Container>
                </CardActions>
                <MostrarAnuncio open={open} handleClose={handleClose} title={title} description={description}
                    views={views} tags={tags} autor={autor}/>
            </Card>

        

            
    );
}
export default MediaCard;