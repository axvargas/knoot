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
import DeleteIcon from '@material-ui/icons/Delete';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from './style';
import MostrarAnuncio from '../../views/posts/MostrarAnuncio';
import EditCard from './EditCard';
import DeleteOpcion from './delete';
import Alert from '@material-ui/lab/Alert';
import imgcarta from '../../recursos/challenge.png';




const MediaCard = ({ title, description,views,tags,autor }) => {
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
                    image={imgcarta}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <div className="titulo">
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                    </div>
                    
                    <div className="descripcion">
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </div>
                    
                    <div className="etiquetas">
                        <Grid container className={classes.tagsContainer}>
                            {
                                tagsSplit.map((tag) => {
                                    return(
                                            <Grid item><Chip 
                                            color="secondary" 
                                            variant="outlined"
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
                        <IconButton aria-label="share">
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
            
            {/* <Steps
                    enabled={stepsEnabled}
                    //enabled={false}
                    steps={steps}
                    initialStep={initialStep}
                /> */}
             
                    
             <MostrarAnuncio open={open} handleClose={handleClose} title={title} description={description}
                    views={views} tags={tags} autor={autor}/>   
        </Card>
        </div>
        
    );
}
export default MediaCard;