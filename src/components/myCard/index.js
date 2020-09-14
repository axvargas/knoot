import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Container,Chip ,Grid} from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from './style';
import MostrarMisAnuncio from '../../views/posts/MostrarMisAnuncio';
import EditCard from './EditCard';
import DeleteOpcion from './delete';





const MediaCard = ({ views,autor,title, description, banner,vacantes,likes, tags,fecha_inicio,fecha_termino}) => {
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
        <div className="card">
            <Card className={classes.root}>
            <CardActionArea
                onClick={handleClickOpen}
            >
                <CardMedia
                    className={classes.media}
                    image={banner}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <div className="titulo">
                        <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
                            {title}
                        </Typography>
                    </div>
                    
                    <div className="descripcion">
                        <Typography variant="body2" component="p" className={classes.typography}>
                            {description}
                        </Typography>
                    </div>
                    
                    <div className="etiquetas">
                        <Grid container className={classes.tagsContainer}>
                            {
                                tagsSplit.map((tag) => {
                                    return(
                                            <Grid item><Chip 
                                            label={tag}/></Grid>
                                    )
                                    
                                })
                            }
                            
                            
                        </Grid>
                    </div>
                    

                </CardContent>
            </CardActionArea>
            <CardActions>

                <EditCard title={title} description={description}
                    views={views} tags={tags} autor={autor}/>
                    
                <DeleteOpcion/>
                
                
                <Container className={classes.views}>
                    <Tooltip title="Visualizaciones" arrow placement="bottom">
                        <IconButton aria-label="share" className={classes.white}>
                            <Badge badgeContent={10} color="primary" anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}>
                                <VisibilityIcon/>
                            </Badge>
                        </IconButton>
                        
                    </Tooltip>
                </Container>
            </CardActions>
            
  
                    
             <MostrarMisAnuncio open={open} handleClose={handleClose} title={title} description={description} banner={banner}
                    vacantes={vacantes} likes={likes} tags={tags} fecha_inicio={fecha_inicio} fecha_termino={fecha_termino} />
        </Card>
        </div>
        
    );
}
export default MediaCard;