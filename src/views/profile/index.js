import React from 'react';
import useStyles from '../styles';
import {Box,
        Typography,
        Grid,
        Avatar,Button} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chips from "../../components/chips";
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const Profile = () => {
    const classes = useStyles();
      const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} id="back-to-top-anchor" />
            <Box textAlign="center" m={1}> Lo que las personas ven acerca de ti</Box>
            <Grid container>
                <Grid container md={3}>
                    <Box fontWeight="fontWeightLight" m={2} >
                    <Typography id="titlePerfil" variant="h6" color="primary" component="p" >
                            PERFIL DE USUARIO
                    </Typography>
                    </Box> 

                <Grid >
                    <Box   fontWeight="fontWeightLight" m={2} >
                         <Card className={classes.card}>
                            <CardContent>
                            <Avatar alt="Remy Sharp" src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/media/2019/11/08/perfil_personas_cuesta_perdonar.jpg" className={classes.large} />
                            <Typography className={classes.pos} color="textSecondary">
                                         Jose Morales Mendoza
                            </Typography>

                            <Typography className={classes.pos} color="textSecondary">
                                         ESPOL
                            </Typography>

                            <Typography className={classes.pos} color="textSecondary">
                                         Desarrollo de Aplicaciones Web y Moviles
                            </Typography>

                            <Typography className={classes.pos} color="textSecondary">
                                        Aprendiendo esta wea. xd 
                            </Typography>

                            </CardContent>
                        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                                Editar Perfil
                              </Button>
                              <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                              >
                                <DialogTitle id="alert-dialog-title">{"Editar Perfil"}</DialogTitle>
                                <DialogContent>
                                
                                        <fromGroup>
                                            <br/>
                                            <Input type="text"id="nom" value="Nombre"/>
                                        </fromGroup>
                                        <fromGroup>
                                            <br/>
                                            <Input type="text"id="ape" value="Apellido"/>
                                        </fromGroup>
                                        <fromGroup>
                                            <br/>
                                            <Input type="text"id="em" value="E-mail"/>
                                            
                                        </fromGroup>
                                        <fromGroup>
                                            <br/>
                                            <Input type="text"id="ci" value="Ciudad"/>
                                        </fromGroup>
                                        <fromGroup>
                                            <br/>
                                            <textarea id="des" row="5" cols="30">Descripción</textarea>
                                        </fromGroup>
                                </DialogContent>
                                <DialogActions>
                                  <Button onClick={handleClose} color="primary">
                                    Cancelar
                                  </Button>
                                  <Button onClick={handleClose} color="primary" autoFocus>
                                    Editar
                                  </Button>
                                </DialogActions>
                              </Dialog>
    
                         </Card>
                        </Box> 
                </Grid>


            </Grid>

            <Grid container>
                    <Grid container md={3}>
                    <Box fontWeight="fontWeightLight" m={2} >
                    <Typography variant="h5" color="primary" component="p" >
                    HABILIDADES
                    </Typography>
                    <Chips/>
                    </Box> 
            </Grid>

                </Grid>

            </Grid>
            
            
        </main>
    );
}

export default Profile;