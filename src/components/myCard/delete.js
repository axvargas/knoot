import React, { Fragment,useContext }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AnuncioContext from '../../context/anuncios/context'

const useStyle = makeStyles((theme) => ({
    root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
    cont1: {
        backgroundColor: '#E5E9F2',
        margin: theme.spacing(0,3),
    },
    cont3: {
         margin: theme.spacing(0,1),
    },
    textcenter: {
        alignItems: 'center',
        justifyContent:'center',
        display: 'flex',

    },
    iconSize:{
      width: '50%',
      height: '70%',
    },
    white: {
      color: 'white',
  },
}));



export default function DeleteOpcion({id}) {
  const j= {fecha_inicio:"2020-09-14",fecha_termino:"2020-10-24",usuario:"5",
  nombre:"Prueba mugrosa",descripcion:"alskdsald",categoria:"1",
  habilidad:[{id:1,nombre:"Programación"}],vacantes:"30"}
  const anuncioContext = useContext(AnuncioContext);

  const { anuncios, eliminarAnuncioFn } = anuncioContext;
  const [open, setOpen] = React.useState(false);
  const classe = useStyle();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.info('Eliminando...');
  };


  const eliminarAnuncio = async(id) => {
    await eliminarAnuncioFn(id) 
    console.log("se elimino") 
    handleClose()
}


  return (
    <div>

      <Tooltip title="Eliminar">
                    <IconButton aria-label="delete" className={classe.white}  onClick={handleClickOpen}>
                        <DeleteIcon />
                    </IconButton>
        </Tooltip>
      <div className={classe.cont1} >
      <Dialog  className={classe.textcenter} className={classe.root}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <div className={classe.cont3}>
                <DialogTitle id="alert-dialog-title" >{<h3>ELIMINAR ANUNCIO</h3>}</DialogTitle>
                <DialogContent>
                    <div justifyContent='center' > 
                        <div justifyContent='center' >
                            <fromGroup alignItems='center'> 
                            <HighlightOffIcon  className={classe.iconSize}/>
                            <h2> ¿Estas seguro de eliminar?</h2>
                            <h4> Una vez que hayas eliminado 
                            no se podra recuperar... </h4>
                            </fromGroup>
                        </div>
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={()=>eliminarAnuncio(id)} color="primary" autoFocus>
                        Eliminar
                    </Button>
                </DialogActions>
                                     
      </div>
    </Dialog>
    </div>
    </div>
  );
}