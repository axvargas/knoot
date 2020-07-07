import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Container,Chip } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from './style';


const MediaCard = ({ title, description,views,tags }) => {
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
                <Tooltip title="Editar">
                <IconButton aria-label="edit">
                        <EditIcon />
                    </IconButton>
                </Tooltip>
                
                <Tooltip title="Eliminar">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                
                <Container className={classes.views}>
                    <Tooltip title="Visualizaciones">
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
            
        </Card>
    );
}
export default MediaCard;