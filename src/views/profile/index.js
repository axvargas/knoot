import React from 'react';
import useStyles from '../styles';
import {Box,
        Typography,
        Grid,
        makeStyles,
        Paper,
        Avatar,
        Button
        } from '@material-ui/core';
import EditarPerfil from "./EditP";
import Fade from '@material-ui/core/Fade';
import {Card, CardHeader, CardActions} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Chips from "../../components/chips";
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import imgPerfil from '../../recursos/desarrollador2.jpg';
import clsx from 'clsx';
import Badge from '@material-ui/core/Badge';
import Footer from "../../components/footer";

const useStyle = makeStyles((theme) => ({
/*..*/
//Acerca de
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },

imageStyl: {
    width:"30%",
    height:"45%",
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 64,
  },


  fixedHeight: {
    height: 240,
  },

  container: {
    paddingTop: theme.spacing(4),
    display: "flex",
  },

  container1: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: "block",
  },

  cardStyle: {
    display: "block",
    transitionDuration: '0.3s',
    height: '517',
    
},
cajaBox: {
    width:"45%",
    height:"75%",
},

colorCard: {
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
},

avatars: {
    justifyContent:'center',
    display: 'flex',
    '& > *': {
      margin: theme.spacing(3),
      width: '10%',
      maxWidth: '100%',
      height:"130px",
      maxheight:"20px",
  }
    },

SmallAvatar: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }

}));





const Profile = () => {
    const classes = useStyles();
    const classe = useStyle();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (

            <main className={classes.content}>
            <div className={classes.toolbar} id="back-to-top-anchor"/>

            <Box borderBottom={1}>
            <Typography align="center" m={2} variant="h5"  component="p" spacing={3} > 
            Lo que las personas ven acerca de ti</Typography> 
            </Box>
            <Grid container className={classe.container} direction="row-reverse" justify="space-between" alignItems="center" >
                <Grid items xs={12} sm={6} md={6} lg={6} style={{textAlign:"center"}}  >
                        <Card  className={classe.cardStyle}  >
                        <CardActions className={classe.colorCard}>
                                    <Button variant="outlined" size="small" color="inherit">
                                     <EditTwoToneIcon/> Editar Perfil
                                    </Button>
                                </CardActions>
                        <CardContent style={{ height: 517 }}>
                                    <Grid  container className={classe.container1} justify="space-between" alignItems="center">
                                        <Grid items >
                                        <Paper  elevation={0} style={{alignContent:"center", alignItems:'center'}} >
                                        <img display="block" align="center" src={imgPerfil} alt="Perfil" className={classe.imageStyl}/>
                                        <Box  style={{width: 'auto', height:'auto'}} display="block" justifyContent="center"  >
                                        <h3>
                                                Jose Morales Mendoza <br></br>
                                                         ESPOL <br></br>
                                         Desarrollo de Aplicaciones Web y Moviles <br></br>
                                               Esta es una prueba para la maquetacion
                                        </h3>
                                    </Box>
                                    </Paper>
                                    </Grid>
                                    </Grid>
                            </CardContent>
                         </Card>
                </Grid>

                <Grid items xs={12} sm={6} md={6} lg={6} style={{textAlign:"center"}}  >
                        <Card  className={classe.cardStyle}  >
                        <CardActions className={classe.colorCard}>
                                    <Button variant="outlined" size="small" color="inherit">
                                     <EditTwoToneIcon/> Editar
                                    </Button>
                                </CardActions>
                        <CardContent style={{ height: 517 }}>
                                    <Grid  container className={classe.container1} justify="space-between" alignItems="center">
                                        <Typography variant="h5" color="primary" component="p" spacing={5}>
                                                         Habilidades
                                                </Typography>
                                            <div  className={classe.container} >
                                                <Chips/>
                                            </div>
                                        
                                        
                                    </Grid>
                            </CardContent>
                         </Card>
                </Grid>


                

            </Grid>
            <Footer/>
            <EditarPerfil open={open} handleClose={handleClose}/> 
            </main>



        );
    }
export default Profile;