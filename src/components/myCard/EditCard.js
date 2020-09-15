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
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import AnuncioContext from '../../context/anuncios/context'
import axios from 'axios';
import ChipInput from 'material-ui-chip-input'
import { MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { Autocomplete } from '@material-ui/lab';

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
    backgroundColor: '#3A405A',
  },

  titulo: {
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
  white: {
    color: 'white',
  },

  dates: {
    marginTop: theme.spacing(4),
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


const EditCard= ({id,tags,title,description,habilidad, banner, vacantes,fecha_inicio,fecha_termino}) => {
  // const j= {
  //   nombre:title,
  // }
  // console.log(j)

  const anuncioContext = useContext(AnuncioContext);
  let arrayTags = []
  const splitHabilidades = () => {
    habilidad.map( h => arrayTags.push(h.nombre))
  }
  splitHabilidades();

  const { anuncios, editarAnuncioFn } = anuncioContext;
  const classee = useStylee();

  const [open, setOpen] = React.useState(false);
  const [post, setPost] = useState({});
  // console.log(post)

  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState(null);
  useEffect(() => {
      const getCategories = async () => {
          const URL = 'http://knoot1.pythonanywhere.com/Categorias'
          const response = await axios.get(URL)
          setCategories(response.data)
      }
      getCategories();
      // eslint-disable-next-line
  }, [])


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleChangePost = (e) => {
    setPost({
        ...post,
        [e.target.id]: e.target.value
        
        
    })
    console.log(e.target.id + e.target.value)

  }

  const handleChangeChip = (e) => {
    setPost({
      ...post,
      ["habilidad"]: [{"id":1, "nombre": "Programación"}]
  })

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

  const editarAnuncio = async(anuncio) => {
    console.log(habilidad)
    anuncio.habilidad=habilidad
    await editarAnuncioFn(id, anuncio) 
    console.log(anuncio) 
    handleClose()
}
  console.log(title)
  
  const today = new Date()

  const deadline = new Date(today.getFullYear(),today.getMonth()+1, today.getDate())

  const [selectedDate, setSelectedDate] = React.useState(Date.now());
  const [selectedDeadLineDate, setSelectedDeadLineDate] = React.useState(deadline);




  return (
    <Fragment>

        <Tooltip title="Editar" arrow placement="bottom">
            <IconButton aria-label="edit" className={classee.white} onClick={handleClickOpen}>
                    <EditIcon />
                </IconButton>
            </Tooltip>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classee.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classee.titulo} align="center">
                Editar Anuncio
              </Typography>
              <Button autoFocus color="inherit" onClick={() => editarAnuncio(post)}>
                Editar
              </Button>
            </Toolbar>
          </AppBar>
          

      <div className={classee.root}>

        <div className={classee.form}>
        <Typography variant="h6">Información del anuncio: </Typography>

          <TextField
            style={{ margin: 10 }}
              className={classee.textField}
              id="nombre"
              label="Título del anuncio:"
              placeholder="Escriba el título aqui"
              defaultValue={title}
              fullWidth
              multiline
              variant="outlined"
              onChange={handleChangePost}
            />
          <TextField
          style={{ margin: 10 }}
            className={classee.textField}
            id="descripcion"
            label="Descripción del Anuncio:"
            defaultValue={description}
            placeholder="Escriba la descripción del anuncio aqui"
            fullWidth
            variant="outlined"
            multiline
            rows={10}
            onChange={handleChangePost}
          />

          <ChipInput
            style={{ margin: 10 }}
            className={classee.textField}
            label="Agregue las habilidades requeridas:"
            defaultValue={arrayTags}
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
              defaultValue={vacantes}
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
              id="banner"
              defaultValue={banner}
              label="Banner de anuncio URL:"
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
          <div className={classee.dates}>
          <Typography variant="h6">Categoría: </Typography>
            {categories.length > 0 &&
                <Autocomplete
                    id="combo-box-demo"
                    options={categories}
                    getOptionLabel={(cat) => cat.nombre}
                    value={filter}//filter.nombre
                    onChange={(event, newValue) => {
                        setFilter(newValue);
                    }}
                    style={{ width: 400 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
            }
          </div>


        {/* <div className={classee.upload}>
          <input
            accept="image/*"
            className={classee.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained"  component="span">
              Subir imagen
            </Button>
          </label>
          <input accept="image/*" className={classee.input} id="icon-button-file" type="file"  />
          <label htmlFor="icon-button-file">
            <IconButton aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          
          <div>
          <img src={imagen} alt="imagen" className={classee.imageStyl} defaultValue={edimage}/>
          </div>
          */}
        </div>
      
      </div>
        



      </Dialog>
    </Fragment>
      
  )
}
export default EditCard;