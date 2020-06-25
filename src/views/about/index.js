import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles';
import { CardMedia } from '@material-ui/core';
import logo from '../../recursos/logo.png';
import Desarrollador1 from '../../recursos/desarrollador1.jpg';
import Desarrollador2 from '../../recursos/desarrollador2.jpg';
import Desarrollador3 from '../../recursos/desarrollador3.jpg';
import Desarrollador4 from '../../recursos/desarrollador4.jpg';



const useStyle = makeStyles((theme) => ({
  avatars: {
    justifyContent:'center',
    display: 'flex',
    '& > *': {
      margin: theme.spacing(3),
      width: '10%',
      maxWidth: '100%',
      height:"130px",
      maxheight:"20px",
    },
  },
/*..*/
//Acerca de
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },

imageStyl: {
    flexGrow:1,
    width:"50%",
    height:"50%",
    alignItems: 'center',
    justifyContent:'center',
  },



}));
/*..*/
 const posts = [
        {
            title: "Titulo 1", description: `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`},
        ]
const About = () => {


    const classes = useStyles();
    const classe = useStyle();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} id="back-to-top-anchor"/>
        
      
            <div className={classe.root}>
                <div className={classe.section1}>
                    <Grid container alignItems="center">
                       <Grid item xs={3}>
                          <Typography gutterBottom variant="h4">
                            Acerca de Knoot
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                         <Typography color="textSecondary" variant="body2">
                          Lorem ipsum dolor sit amet consectetur adipiscing elit, dui nostra praesent 
                        tristique morbi eleifend proin penatibus, purus cum magna pellentesque vehicula
                         condimentum
                         </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>    
            
            <div>
                <Grid container alignItems="center">
                       <Grid item xs={6}>
                          <img src={logo} alt="logo" className={classe.imageStyl}/>
                        </Grid>
                        <Grid item xs={6}>
                        <h2>
                          Misión
                        </h2>
                        <Typography color="textSecondary" variant="body2">
                           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                             voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
                             amet, consectetur.
                         </Typography>
                        </Grid>
                    </Grid>
            </div>
            
            <div>
                <h2>
                Nuestro Equipo
                </h2>
                <div className={classe.avatars}  xs={3}>
                    <Avatar alt="Desarrollador 1" src={Desarrollador1} />
                    <Avatar alt="Desarrollador 2" src={Desarrollador2} />
                    <Avatar alt="Desarrollador 3" src={Desarrollador3} />
                    <Avatar alt="Desarrollador 4" src={Desarrollador4} />
                </div>
                <div className={classe.avatars}  xs={3}>
                    <h3>Andres Vargas</h3>
                    <h3>Jose Morales</h3>
                    <h3>Lilibeth Vargas</h3>
                    <h3>Paula Benites</h3>
                </div>
            </div>
          
            <div>
                <Grid container alignItems="center">
                     <Grid item xs={8}>
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0144861497383!2d-79.9666771856702!3d-2.1481404377783284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d72f925e5bfdb%3A0x327cdb9f7f4ba3b2!2sEscuela%20Superior%20Polit%C3%A9cnica%20del%20Litoral%20(ESPOL)!5e0!3m2!1ses-419!2sec!4v1593102534169!5m2!1ses-419!2sec" width="100%" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0">
                         </iframe>
                     </Grid>
                     <Grid item xs={4}>
                        <h2>Campus Gustavo Galindo Velasco</h2>
                        <Typography color="textSecondary" >
                            Km 30.5 via perimetral<br/>
                            Conmutador: (593-4) 3708 000 - (593-4) 2269 269<br/>
                            Horario de atención De 08h00 a 16h30, de lunes a viernes.<br/>
                            Guayaquil - Ecuador
                        </Typography>
                    </Grid>
                 </Grid>
            </div>
            
        </main>
    )
} 
export default About;
