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
import ChipInput from 'material-ui-chip-input'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
// import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStylee = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5),
    display: 'flex',
    flexDirection: 'row',
  },

  appBar: {
    position: 'relative',
    backgroundColor: '#3A405A',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },

  form: {
    flexWrap: 'wrap',
    width: '50%',
    display: 'flex',
  },
  textField: {

    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },

  right: {
    width: '50%',
    marginLeft: theme.spacing(5)

  },
  input: {
    display: 'none',
  },

  imageStyl: {
    width:"50%",
    height:"50%",
  },

  dates: {
    marginTop: theme.spacing(4),
  },

  button: {
    marginBottom: 15,
  }

}));


const NewPost= () => {
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

  const today = new Date()

  console.log(today)

  const deadline = new Date(today.getFullYear(),today.getMonth()+1, today.getDate())

  const [selectedDate, setSelectedDate] = React.useState(Date.now());
  const [selectedDeadLineDate, setSelectedDeadLineDate] = React.useState(deadline);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  
  return (
    <Fragment>
      <Button
          onClick={handleClickOpen}
          variant="contained"
          //color="primary"
          size="large"
          startIcon={<AddIcon />}
          className={classee.button}
          >
          
          Nuevo Anuncio
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classee.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classee.title} align="center">
                Crear Nuevo Anuncio
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                Crear
              </Button>
            </Toolbar>
          </AppBar>
          

      <div className={classee.root}>
      
        <div className={classee.form}>
        <Typography variant="h6">Información del anuncio: </Typography>
          <TextField
            style={{ margin: 10 }}
              className={classee.textField}
              id="standard-textarea"
              label="Título del anuncio:"
              placeholder="Escriba el título aqui"
              fullWidth
              multiline
              variant="outlined"
            />

          <TextField
          style={{ margin: 10 }}
            className={classee.textField}
            id="standard-textarea"
            label="Descripción del Anuncio:"
            placeholder="Escriba la descripción del anuncio aqui"
            fullWidth
            variant="outlined"
            multiline
            rows={10}
          />

          <ChipInput
            style={{ margin: 10 }}
            className={classee.textField}
            //defaultValue={['clown fish', 'whale', 'shark']}
            label="Agregue las habilidades requeridas:"
            placeholder='Escriba las habilidades aqui'
            variant="outlined"
            fullWidth
            />

            {/* <TextField
            style={{ margin: 10 }}
              className={classee.textField}
              id="standard-textarea"
              label="Agregue las habilidades requeridas:"
              placeholder="Escriba el texto aqui"
              fullWidth
              multiline
              variant="outlined"
            /> */}

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
        
        <div className={classee.right} >
          
          <div>
            <Typography variant="h6">Banner del anuncio:</Typography>
            <img src={imagen} alt="imagen" className={classee.imageStyl}/>
          </div>
          
          <div >
            <input
              accept="image/*"
              className={classee.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span">
                Subir imagen
              </Button>
            </label>
            <input accept="image/*" className={classee.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
              <IconButton aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
          </div>
          
          <div className={classee.dates}>
          <Typography variant="h6">Fecha de inicio y fin: </Typography>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container>
              {/* justify="space-around" */}
                <KeyboardDatePicker
                  className={classee.textField}
                  id="start-date"
                  label="Fecha de inicio: "
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />

                <KeyboardDatePicker
                  className={classee.textField}
                  id="deadline"
                  label="Fecha de termino"
                  format="dd/MM/yyyy"
                  value={selectedDeadLineDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                
              </Grid>
            </MuiPickersUtilsProvider>

          </div>

          
        </div>
      
      </div>
        



      </Dialog>
    </Fragment>
      
  )
}
export default NewPost;