import React, { Fragment }  from 'react';
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



export default function DeleteOpcion() {
  
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

  const eliminar =()=>{
      var array = document.getElementsByClassName("MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2")
      var cards = document.getElementsByClassName("MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-2")

      var arrayTags=[]
     for(var element of array){
        arrayTags.push(element.innerText)
    }

    if(arrayTags.length != 0){
        for(var card of cards){
            var titulo = card.getElementsByClassName("MuiCardContent-root")
            var tagCards=[]
            for(var titul of titulo){
              if (titul.textContent === 'Titulo 1'){
                  tagCards.push(titul.textContent)
                }
            }
            for(var e of arrayTags){
                if(!tagCards.includes(e)){
                        card.style.display="none"
                        break;
                    }
                } 
            }
            
        }
    else{
        for(var card of cards){
            card.style.display=""
        }
    }
    handleClose();
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
                    <Button onClick={eliminar} color="primary" autoFocus>
                        Eliminar
                    </Button>
                </DialogActions>
                                     
      </div>
    </Dialog>
    </div>
    </div>
  );
}