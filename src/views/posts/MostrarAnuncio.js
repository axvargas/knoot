import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Disponible from '../../components/AvailableChip/Disponible'
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import NoDisponible from '../../components/AvailableChip/NoDisponible'


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

}));
const MostrarAnuncio= ({ open, handleClose,title, description,banner, vacantes,likes, tags,fecha_inicio,fecha_termino}) => {
    const classe = useStyle();

    const tagsSplit = tags.split(" ")

     const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
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
                <DialogTitle id="alert-dialog-title"  className={classe.textcenter}>{<h2>{title}</h2>}</DialogTitle>
                <DialogContent >
                  <Grid container alignItems="center" style={{paddingLeft: '40px',paddingRight: '40px'}}>
                    <img src={banner} alt="banner" className={classe.imageStyl}/>
                  </Grid>
                  <div style={{paddingLeft: '40px',paddingRight: '40px'}}>
                  <Grid >
                          <Typography gutterBottom variant="h7" >
                          A {likes} les gusta esta publicación
                          </Typography>
                    </Grid>
                    <Grid >
                          <Typography gutterBottom variant="h7" className={classe.pies}>
                          Fecha Inicio: {fecha_inicio}
                          </Typography>
                    </Grid>
                    <Grid >
                          <Typography gutterBottom variant="h7" className={classe.pies}>
                            Fecha termino: {fecha_termino}
                            {/* <Avatar className={classe.small}>H</Avatar> */}
                          </Typography>
                    </Grid>
                    <Grid >
                          <Typography gutterBottom variant="h7" className={classe.pies}>
                            Se solicitan: {vacantes}
                          </Typography>
                    </Grid>
                  </div>
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
                     {/* <GitHubIcon className={classe.cont3}/>
                      < WhatsAppIcon className={classe.cont3}/ >
                    <TelegramIcon className={classe.cont3}/ >*/}
                      <Button variant="contained" color="primary" disableElevation>
                      Interesado
                    </Button>
                    </Grid>
                </DialogActions>
            
            </div>
        </Dialog>
    )
}
export default MostrarAnuncio;