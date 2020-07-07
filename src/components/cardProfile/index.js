import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Container, Tooltip ,Chip,Grid} from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import useStyles from './styles';
import imagenn from '../../recursos/pf_placeholder.png';



const ProfileCard = ({ title, description,tags,imagen}) => {
    const classes = useStyles();

    const tagsSplit = tags.split(" ")

    return (
        <Card className={classes.root}>
            <CardActionArea>
                
                <CardMedia
                    className={classes.media}
                    image= {imagenn}
                    title="profile icon"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Grid container spacing={1} className={classes.tagsContainer}>
                        {
                            tagsSplit.map((tag) => {
                                return(
                                        <Grid item><Chip label={tag}></Chip></Grid>
                                )
                                
                            })
                        }
                        
                        
                    </Grid>

                </CardContent>
            </CardActionArea>
            
        </Card>
    );
}
export default ProfileCard;