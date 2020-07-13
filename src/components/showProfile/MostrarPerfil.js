import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import Disponible from '../AvailableChip/Disponible'
import NoDisponible from '../AvailableChip/NoDisponible'



const useStyle = makeStyles((theme) => ({
  cont1: {
      margin: theme.spacing(0,5,0,5),

  },
  cont2: {
      alignItems: 'center',
      textAlign: 'justify',
      margin: theme.spacing(5,0,5,0),
  },
  cont3: {
      
      margin: theme.spacing(0,2,2,0),
  },
  textcenter: {
      alignItems: 'center',
      justifyContent:'center',
      display: 'flex',
      padding: 0,

  },
  imageStyl: {
      flexGrow:1,
      width:"50%",
      height:"420px",
      alignItems: 'center',
      justifyContent:'center',
  display: 'block',
    },
  pies: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  tagsContainer: {
        marginTop: 2,
    },

  etiquetas: {
    marginTop: 10,
  },
  small: {
    marginRight: 10,
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  nombres: {
    display: 'flex',
    alignItems: 'center',
  }

}));
const MostrarPerfil= ({ open, handleClose, nombre,description,tags}) => {
    const classe = useStyle();

    const tagsSplit = tags.split(" ")

    return (
        <Dialog 
          fullWidth="true"
          maxWidth="lg"
          
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div className={classe.cont1} >
                <DialogTitle id="alert-dialog-title"  className={classe.textcenter}>
                    <div className={classe.nombres} > 
                        <Avatar/>
                        {<h2>{nombre}</h2>}
                    </div>
                
                    
                    
                </DialogTitle>
                <DialogContent >
                  <Disponible/>
                  <div className={classe.etiquetas}>
                    <Typography gutterBottom variant="h6">
                            Etiquetas:
                          </Typography>
                    <Grid container spacing={1}  className={classe.tagsContainer}>
                      
                      {
                        tagsSplit.map((tag) => {
                            return (
                              <Grid item><Chip 
                                  color="secondary" 
                                  variant="outlined"
                                  label={tag}/></Grid>
                            )

                        })
                      }


                    </Grid>
                  </div>
                  
                   <Grid>
                         <Typography color="textSecondary" variant="body2" className={classe.cont2}>
                          {description}
                         </Typography>
                    </Grid>
                    
                     
                </DialogContent>
        
                <DialogActions>
                    <Grid className={classe.pies}>
                      <GitHubIcon className={classe.cont3}/>
                      < WhatsAppIcon className={classe.cont3}/ >
                      <TelegramIcon className={classe.cont3}/ >
                    </Grid>
                </DialogActions>
            
            </div>
        </Dialog>
    )
}
export default MostrarPerfil;