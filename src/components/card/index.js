import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { Container, Tooltip ,Chip} from '@material-ui/core';
import Badge from '@material-ui/core/Badge';

  
const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 140,
    },
    views: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
    }
});


const MediaCard = ({ title, description,likes,views,tags }) => {
    const classes = useStyles();

    const tagsSplit = tags.split(" ")

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <div>
                        {
                            tagsSplit.map((tag) => {
                                return(
                                    <Chip label={tag}></Chip>
                                )
                                
                            })
                        }
                        
                        
                    </div>
                    
                    


                </CardContent>
            </CardActionArea>
            <CardActions>
                    <Tooltip title="Me Gusta">
                        
                            <IconButton aria-label="favorite">
                                <Badge badgeContent={likes} color="primary" anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}>
                                    <FavoriteIcon />
                                </Badge>
                            </IconButton>
                        
                        
                    </Tooltip>
                    
                <Tooltip title="Compartir">
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </Tooltip>
                <Container className={classes.views}>
                    <Tooltip title="Visualizaciones">
                        <IconButton aria-label="share">
                            <Badge badgeContent={views} color="primary" anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}>
                                <VisibilityIcon/>
                            </Badge>
                        </IconButton>
                        
                    </Tooltip>
                </Container>
            </CardActions>
            
        </Card>
    );
}
export default MediaCard;