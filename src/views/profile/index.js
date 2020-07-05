import React from 'react';
import useStyles from '../styles';
import {Box,
        Typography,
        Grid,
        Avatar,
        Button,
        makeStyles,
        Paper,
        Avatar} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import {Card, CardHeader, CardActions} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Chips from "../../components/chips";
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import imgPerfil from '../../recursos/desarrollador2.jpg';
import clsx from 'clsx';
import Badge from '@material-ui/core/Badge';

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
    paddingBottom: theme.spacing(4),
    display: "flex",
  },

  container1: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: "block",
  },

  cardStyle: {
    display: "block",
    width: 'auto',
    transitionDuration: '0.3s',
    height: 'auto',
    minHeight: 'auto',
    minWidth:'auto'
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


import './style.css';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter,fromGroup,Input,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import state from '@material-ui/core';
import abrirModal from '@material-ui/core';
class Favorites extends React.Component{
    state={
        abierto: false,
    }

    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto});
    }
    
    render(){

        const modalStyles={
            position: "absolute",
            top: '50%',
            left:'50%',
            transform: 'translate(-50%,-50%)'
        }    
    return (
        <>
        
            <h1>Favoritos</h1>
            <div className="principal">
                <div className="secundario">
                <Button color="success" onClick={this.abrirModal}>Editar Perfil</Button>
                </div>
            </div>
            

            <Modal isOpen={this.state.abierto} style={modalStyles}>
            <ModalHeader>
                Editar Perfil
            
            <ModalBody>
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
            </ModalBody>
            <ModalFooter>
                <Button color='primary'>Editar</Button>
                <Button color='secondary'  onClick={this.abrirModal}>Cancelar</Button>
            </ModalFooter>
            </ModalHeader>
            </Modal>

        </>
    )
}}


const Profile = () => {
    const classes = useStyles();
    const classe = useStyle();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (

            <main className={classes.content}>
            <div className={classes.toolbar} id="back-to-top-anchor"/>

            <Box borderBottom={1}>
            <Typography align="center" m={2} variant="h5"  component="p" spacing={3} > 
            Lo que las personas ven acerca de ti</Typography> 
            </Box>
            <Grid container className={classe.container} direction="row-reverse" justify="space-evenly" alignItems="center" >
                <Grid items xs={12} sm={6} md={6} lg={6} style={{textAlign:"center"}}  >
                        <Card  className={classe.cardStyle}  >
                        <CardActions className={classe.colorCard}>
                                    <Button variant="outlined" size="small" color="inherit">
                                     <EditTwoToneIcon/> Editar Perfil
                                    </Button>
                                </CardActions>
                        <CardContent>
                                    <Grid  container className={classe.container1} justify="space-evenly" alignItems="center">
                                        <Grid items style={{alignContent:"center"}}>
                                        <img display="block" align="center" src={imgPerfil} alt="Perfil" className={classe.imageStyl}/>
                                        </Grid>
                                        <Paper  variant="outlined" square>
                                        <Box  borderTop={0} style={{width: 400, height: 200}} display="flex" justifyContent="center" border={1} >
                                        <h3>
                                                Jose Morales Mendoza <br></br>
                                                         ESPOL <br></br>
                                         Desarrollo de Aplicaciones Web y Moviles <br></br>
                                               Esta es una prueba para la maquetacion
                                        </h3>
                                    </Box>
                                    </Paper>
                                    </Grid>
                            </CardContent>
                         </Card>
                </Grid>

                <Grid items xs={12} sm={6} md={6} lg={6}>
                    <Grid container  className={classe.container} direction="column" justify="space-evenly" alignItems="flex-start">               
                        <Card className={classe.cardStyle}  >
                                <CardActions>
                                    <Button variant="outlined" size="small" color="primary">
                                     <EditTwoToneIcon/> Editar
                                    </Button>
                                </CardActions>
                                <CardContent style={{ width: '100%', height: 400 }}>
                                        <Typography variant="h6" color="primary" component="p" spacing={5}>
                                                 Habilidades
                                        </Typography>
                                        <Chips/>
                                        <Chips/>
                                        <Chips/>
                                        <Chips/>
                                    </CardContent>

                            </Card>
                            </Grid>
                            </Grid>

                        </Grid>
            <footer/>
            </main>



        );
}

export default Profile;