import React from 'react';
import useStyles from '../styles';
import {Box,
        Typography,
        Grid,
        Avatar} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chips from "../../components/chips";

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
                        <Button variant="outlined" color="primary" textAlign="center" spacing={2}>
                                   Editar Perfil
                         </Button>
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