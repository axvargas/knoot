import React, { useState,useEffect } from 'react';
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
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import axios from 'axios';


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
    justifyContent: 'center',
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
  cuadro: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  fechas: {
    justifyContent: 'flex-end',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  mid: {
    width: '50%',
  },
  tagItems: {
    width: '100%',
  }

}));
const MostrarAnuncio= ({ open, handleClose,title, description,banner, vacantes,likes, tags,fecha_inicio,fecha_termino,categoria}) => {
    const classe = useStyle();

    const tagsSplit = tags.split(" ")

    const [categories, setCategories] = useState([]);
  useEffect(() => {
      const getCategories = async () => {
          const URL = 'http://knoot1.pythonanywhere.com/Categorias'
          const response = await axios.get(URL)
          setCategories(response.data)
      }
      getCategories();
  }, [])

  let nombreCategoria = undefined
  const searchCategoria = (categorias,categoria) => {
    categorias.map((c, i) => {
      if (c.id == categoria){
        nombreCategoria = c
      }
    })
  }
  searchCategoria(categories,categoria)



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
                    <Grid style={{paddingTop: '20px', paddingBottom: '20px'}}>
                          <Typography gutterBottom variant="h7" >
                            A {likes} personas les gusta esta publicación
                          </Typography>
                    </Grid>
                    
                  </div> 
                  <div className={classe.cuadro}>
                    <div>
                      <Disponible/>
                      <div className={classe.etiquetas}>
                        <Typography gutterBottom variant="h6">
                                Etiquetas:
                              </Typography>
                        <Grid container spacing={1} alignItems='stretch' direction='column' className={classe.tagsContainer}>
                          {
                            tagsSplit.map((tag) => {
                                return (
                                  <Grid item className={classe.tagItems}><Chip 
                                      color="secondary" 
                                      variant="outlined"
                                      label={tag}/></Grid>
                                )

                            })
                          }
                        </Grid>
                    </div>
                    
                    </div >
                          
                    <div className={classe.mid}>
                      <Grid>
                    <Typography gutterBottom variant="h6">
                                  Descripción:
                                </Typography>
                          <Typography color="textSecondary" variant="body2" className={classe.cont2}>
                            {description}
                          </Typography>
                      </Grid>

                      <Typography gutterBottom variant="h6">
                                  Vacantes: {vacantes}
                                </Typography>
                    </div>
                    
                    
                    <div >
                    {nombreCategoria != undefined && <Typography gutterBottom variant="h6">
                                  {nombreCategoria.nombre}
                                </Typography>}
                      <List className={classe.fechas}>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar color="secondary" >
                                <EventAvailableIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Fecha Inicio" secondary={fecha_inicio} />
                          </ListItem>
                          <Divider variant="inset" component="li" />
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar color="secondary" >
                                <EventBusyIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Fecha Termino" secondary={fecha_termino}/>
                          </ListItem>
                          <Divider variant="inset" component="li" />
                          
                        </List>
                    </div>
                  </div>
                  
                
                   
                    
                     
                </DialogContent>
        
        
                <DialogActions>
                    <Grid className={classe.pies}>
                     {/* <GitHubIcon className={classe.cont3}/>
                      < WhatsAppIcon className={classe.cont3}/ >
                    <TelegramIcon className={classe.cont3}/ >*/}
                      <Button variant="contained" color="primary" disableElevation>
                      Estoy Interesado
                    </Button>
                    </Grid>
                </DialogActions>
            
            </div>
        </Dialog>
    )
}
export default MostrarAnuncio;