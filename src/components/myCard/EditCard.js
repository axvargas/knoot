import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import imagen from '../../recursos/placeholder.png';
import Chip from '@material-ui/core/Chip';
import ChipInput from 'material-ui-chip-input';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStylee = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
  },

  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },

  form: {
    flexWrap: 'wrap',
    width: '50%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {

    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },

  upload: {
    width: '50%',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },

  imageStyl: {
    width:"50%",
    height:"50%",
  },

  chips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }

}));


const EditCard= (title, description,views,tags,autor) => {
  const classee = useStylee();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  
  return (
    <Fragment>

        <Tooltip title="Editar" arrow placement="bottom">
            <IconButton aria-label="edit" onClick={handleClickOpen}>
                    <EditIcon />
                </IconButton>
            </Tooltip>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classee.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classee.title} align="center">
                Editar Anuncio
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                Crear
              </Button>
            </Toolbar>
          </AppBar>
          

      <div className={classee.root}>
      
        <div className={classee.form}>
          <TextField
            style={{ margin: 10 }}
              className={classee.textField}
              id="standard-textarea"
              label="Título del anuncio:"
              placeholder="Escriba el título aqui"
              defaultValue={title}
              fullWidth
              multiline
              variant="outlined"
            />
          <TextField
          style={{ margin: 10 }}
            className={classee.textField}
            id="standard-textarea"
            label="Descripción del Anuncio:"
            defaultValue={description}
            placeholder="Escriba la descripción del anuncio aqui"
            fullWidth
            variant="outlined"
            multiline
            rows={10}
          />

          <TextField
            style={{ margin: 10 }}
              className={classee.textField}
              id="standard-textarea"
              label="Agregue las habilidades requeridas:"
              placeholder="Escriba el texto aqui"
              fullWidth
              multiline
              variant="outlined"
            />

          <div className={classee.chips}>
                <Chip
              color="primary"
              variant="outlined"
              label="Texto 1"
              onDelete={handleDelete}
            />
          </div>

          <TextField
            style={{ margin: 10 }}
              className={classee.textField}
              id="standard-textarea"
              label="Agregue el número de vacantes:"
              placeholder="Escriba un número aqui"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              variant="outlined"
            />


        </div>
        <div className={classee.upload}>
          <input
            accept="image/*"
            className={classee.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Subir imagen
            </Button>
          </label>
          <input accept="image/*" className={classee.input} id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          
          <div>
          <img src={imagen} alt="imagen" className={classee.imageStyl}/>
          </div>
          
        </div>
      
      </div>
        



      </Dialog>
    </Fragment>
      
  )
}
export default EditCard;