import React from 'react';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Autocomplete from '@material-ui/lab/Autocomplete';
import banner from '../../recursos/public.jpg';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
const useStyle = makeStyles((theme) => ({
    cont1: {
        margin: theme.spacing(0,5,0,5),

    },
    cont2: {
       
        margin: theme.spacing(5,0,5,0),
    },
    cont3: {
       
        margin: theme.spacing(0,2,2,0),
    },
    textcenter: {
        alignItems: 'center',
        justifyContent:'center',
        display: 'flex',

    },
imageStyl: {
    flexGrow:1,
    width:"50%",
    height:"50%",
    alignItems: 'center',
    justifyContent:'center',
display: 'block',
  },
pies: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
},
 chips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
},

}));
const MostrarAnuncio= ({ open, handleClose}) => {
    const classe = useStyle();
     const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
    return (
        <Dialog 
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div className={classe.cont1} >
                <DialogTitle id="alert-dialog-title"  className={classe.textcenter}>{<h2>Titulo</h2>}</DialogTitle>
                <DialogContent >
                  <Grid container alignItems="center">
                    <img src={banner} alt="banner" className={classe.imageStyl}/>
                  </Grid>
                  <div>
                    <Grid >
                          <Typography gutterBottom variant="h7">
                            Justo ahora
                          </Typography>
                    </Grid>
                    <Grid >
                          <Typography gutterBottom variant="h7" className={classe.pies}>
                            Creado por Usuario
                          </Typography>
                    </Grid>
                  </div>
                  <div className={classe.root} className={classe.cont2}>
                          <Chip label="Basic" variant="outlined" />
                          <Chip label="Disabled" disabled variant="outlined" />
                          <Chip
                            avatar={<Avatar>M</Avatar>}
                            label="Clickable"
                            onClick={handleClick}
                            variant="outlined"
                          />
                          <Chip
                            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                            label="Deletable"
                            onDelete={handleDelete}
                            variant="outlined"
                          />
                          <Chip
                            icon={<FaceIcon />}
                            label="Clickable deletable"
                            onClick={handleClick}
                            onDelete={handleDelete}
                            variant="outlined"
                          />
                          <Chip
                            label="Custom delete icon"
                            onClick={handleClick}
                            onDelete={handleDelete}
                            deleteIcon={<DoneIcon />}
                            variant="outlined"
                          />
                          <Chip label="Clickable link" component="a" href="#chip" clickable variant="outlined" />
                          <Chip
                            avatar={<Avatar>M</Avatar>}
                            label="Primary clickable"
                            clickable
                            color="primary"
                            onDelete={handleDelete}
                            deleteIcon={<DoneIcon />}
                            variant="outlined"
                          />
                          <Chip
                            icon={<FaceIcon />}
                            label="Primary clickable"
                            clickable
                            color="primary"
                            onDelete={handleDelete}
                            deleteIcon={<DoneIcon />}
                            variant="outlined"
                          />
                          <Chip label="Deletable primary" onDelete={handleDelete} color="primary" variant="outlined" />
                          <Chip
                            icon={<FaceIcon />}
                            label="Deletable secondary"
                            onDelete={handleDelete}
                            color="secondary"
                            variant="outlined"
                          />
                   </div>
                   <Grid>
                         <Typography color="textSecondary" variant="body2" className={classe.cont2}>
                          Lorem ipsum dolor sit amet consectetur adipiscing elit, dui nostra praesent 
                        tristique morbi eleifend proin penatibus, purus cum magna pellentesque vehicula
                         condimentum
                         </Typography>
                    </Grid>
                    
                     
                </DialogContent>
        
                <DialogActions>
                    <Grid className={classe.pies}>
                    <GitHubIcon className={classe.cont3}/>
                    < WhatsAppIcon className={classe.cont3}/ >
                     <TelegramIcon/ >
                    </Grid>
                </DialogActions>
            
            </div>
        </Dialog>
    )
}
export default MostrarAnuncio;