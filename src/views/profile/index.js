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
import imgmedi from '../../recursos/medalla.png';
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
  width:"40%",
  height:"50%",
  alignItems: 'center',
  justifyContent:'center',
  borderRadius: 64,
  position: 'relative',
  top: '-60px',
},
decorediv: {
  backgroundColor: '#3A405A',
  width: 'auto',
  height: '100px',
},

fixedHeight: {
  height: 240,
},

container: {
  paddingTop: theme.spacing(4),
  display: "flex",
},

container1: {
  display: "block",

},

cardStyle: {
  display: "block",
  transitionDuration: '0.3s',

},


paper: {
  alignContent: 'center',
  alignItems: 'center',
  background: '#E5E9F2',
},
box: {
  padding: '10px',
  margin: '30px',
  background: 'white',
  top: '-60px',
  position: 'relative',
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
},
button: {
    background: '#3A405A',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 20px',
    boxShadow: '0 3px 5px 2px #C0CCDA',
  },

  imgicom:  {
    width:"30px",
    position: 'relative',
    marginTop: '20px',
    marginLeft: '80%',
  },
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
          <Typography align="center" m={2} variant="h5"  component="p" spacing={3} style={{paddingBottom: '20px'}}> 
           <b>Lo que las personas ven acerca de ti</b></Typography> 
        </Box>
      <div style={{paddingTop: '20px'}}>
      <Button className={classe.button}  onClick={handleClickOpen}>
        <EditTwoToneIcon/> Editar Perfil
      </Button>
      </div>
      <Grid container className={classe.container} direction="row-reverse" justify="space-between"  >
        <Grid items xs={12} sm={5} md={5} lg={5} style={{textAlign:"center"}}  >
          <Card  className={classe.cardStyle}  >
            <Grid  container className={classe.container1} >
              <div className={classe.decorediv}  />
                <div  elevation={0} className={classe.paper} >
                  <img   src={imgPerfil} alt="Perfil" className={classe.imageStyl}/>
                    <div  className={classe.box} >
                      <h2>Jose Morales Mendoza</h2>
                      <h3>
                        ltvargas@espol.edu.ec <br/>
                        0934682738<br/>
                        Guayaquil
                        <p style={{textAlign:"justify", padding:'20px'}}>
                          Desarrollo de Aplicaciones Web y Moviles <br/>
                          Sed ut perspiciatis unde omnis iste natus error
                          sit voluptatem accusantium doloremque laudantium,
                          totam rem aperiam, eaque ipsa 
                        </p>
                      </h3>
                    </div>
                </div>
            </Grid>
          </Card>
        </Grid>

      <Grid items xs={12} sm={6} md={6} lg={6}   >
        <Card  className={classe.cardStyle} className={classe.paper} >
       
            <div style={{position: 'absolute', display: 'flex', marginLeft: '20px'}}  >
   
              <Typography variant="h5"   spacing={5} style={{paddingTop:'20px'}}>
                Habilidades          
              </Typography>

              <img   src={imgmedi} alt="Medalla" className={classe.imgicom}/>
            </div>
            <div  className={classe.container} style={{paddingTop:'50px'}}>
              <Chips/>
            </div>
         
        </Card>
      </Grid>

    </Grid>
    <Footer/>
    <EditarPerfil open={open} handleClose={handleClose} />
    </main>

    );
  }
  export default Profile;