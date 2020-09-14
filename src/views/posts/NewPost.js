import React, { Fragment, useState,useEffect,useContext } from 'react';
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
import { MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import AnuncioContext from '../../context/anuncios/context'

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
  const anuncioContext = useContext(AnuncioContext);
    const { anuncios, agregarAnuncioFn } = anuncioContext;
  const classee = useStylee();

  const [open, setOpen] = React.useState(false);
  const [post, setPost] = useState({});
  const today = new Date()

  const deadline = new Date(today.getFullYear(),today.getMonth()+1, today.getDate())

  const [selectedDate, setSelectedDate] = React.useState(Date.now());
  const [selectedDeadLineDate, setSelectedDeadLineDate] = React.useState(deadline);


  const handleClickOpen = () => {
      setOpen(true);
    setPost({
    ...post,
    ["fecha_inicio"]: "2020-09-14",
    ["fecha_termino"]: "2020-09-14"
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePost = (e) => {
    setPost({
        ...post,
        [e.target.id]: e.target.value
        
    })

  }

  const handleChangeChip = (e) => {
    setPost({
      ...post,
      ["habilidad"]: [{"id":1, "nombre": "Programación"}]
  })

  }

  
  {/* useEffect(() => {
    const j={"fecha_inicio":"2020-09-14","fecha_termino":"2020-10-14","usuario":"5","nombre":"skdlkskzldskdl","descripcion":"alskdsald","categoria":"1","habilidad":[{"id":1,"nombre":"Programación"}],"vacantes":"30"}
    const agregarAnuncios = async(json) => {
        await agregarAnuncioFn(json)  
    }
    agregarAnuncios(j)  
    handleClose()
 
}, []);*/}
 const handleNewPost = (e) => {
    console.log("NuevoPost")
    console.log(post)
   
    console.log(JSON.stringify(post))
    handleClose()
  }

  
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setPost({
      ...post,
      ["fecha_inicio"]: date
  })}

  const handleDeadLineDateChange = (date) => {
    setSelectedDeadLineDate(date);
    setPost({
      ...post,
      ["fecha_termino"]: date
  })}

  
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
              {/* onChange={handleNewPost} */}
              <Button autoFocus color="inherit" onClick={handleNewPost}>
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
              id="usuario"
              label="Usuario:"
              placeholder="Usuario5"
              fullWidth
              required
              multiline
              variant="outlined"
              onChange={handleChangePost}
            />

          <TextField
            style={{ margin: 10 }}
              className={classee.textField}
              id="nombre"
              label="Título del anuncio:"
              placeholder="Escriba el título aqui"
              fullWidth
              required
              multiline
              variant="outlined"
              onChange={handleChangePost}
            />

          <TextField
          style={{ margin: 10 }}
            className={classee.textField}
            id="descripcion"
            label="Descripción del Anuncio:"
            placeholder="Escriba la descripción del anuncio aqui"
            fullWidth
            variant="outlined"
            required
            multiline
            rows={10}
            onChange={handleChangePost}
          />
         
         <TextField
            style={{ margin: 10 }}
              className={classee.textField}
              id="categoria"
              label="Agregue el número de categoria:"
              placeholder="Escriba un número aqui"
              type="number"
              required
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              variant="outlined"
              onChange={handleChangePost}
            />

          <ChipInput
            style={{ margin: 10 }}
            className={classee.textField}
            label="Agregue las habilidades requeridas:"
            placeholder='Escriba las habilidades aqui'
            required
            variant="outlined"
            fullWidth
            onChange={handleChangeChip}
            />

          <TextField
            style={{ margin: 10 }}
              className={classee.textField}
              id="vacantes"
              label="Agregue el número de vacantes:"
              placeholder="Escriba un número aqui"
              type="number"
              required
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              variant="outlined"
              onChange={handleChangePost}
            />


        </div>
        
        <div className={classee.right} >
          
          <div>
            <Typography variant="h6">Banner del anuncio:</Typography>
            {/*<img src={imagen} alt="imagen" className={classee.imageStyl}/>*/}
            <TextField
            style={{ margin: 3 }}
              className={classee.textField}
              id="nombre"
              label="banner de anuncio URL:"
              placeholder="URL"
              fullWidth
              required
              multiline
              variant="outlined"
              onChange={handleChangePost}
            />
          </div>
          
         {/* <div >
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
         </div>*/}
          
          <div className={classee.dates}>
          <Typography variant="h6">Fecha de inicio y fin: </Typography>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container>
              {/* justify="space-around" */}
                <KeyboardDatePicker
                  className={classee.textField}
                  id="fecha_inicio"
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
                  id="fecha_termino"
                  label="Fecha de termino"
                  format="dd/MM/yyyy"
                  value={selectedDeadLineDate}
                  onChange={handleDeadLineDateChange}
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