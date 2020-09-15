import React, { Fragment, useState, useEffect, useContext } from 'react';
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
import ChipInput from 'material-ui-chip-input'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import AnuncioContext from '../../context/anuncios/context'
import { Autocomplete } from '@material-ui/lab';

import axios from 'axios';
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
    width: "50%",
    height: "50%",
  },

  dates: {
    marginTop: theme.spacing(4),
  },

  button: {
    marginBottom: 15,
  }

}));


const NewPost = () => {
  const anuncioContext = useContext(AnuncioContext);

  const { anuncios, agregarAnuncioFn } = anuncioContext;
  const classee = useStylee();


  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState(null);
  const [Itemstags, setItemstags] = useState({
    tags: [],
  });
  let { tags } = Itemstags;

  useEffect(() => {
    const getCategories = async () => {
      const URL = 'http://knoot1.pythonanywhere.com/Categorias'
      const response = await axios.get(URL)
      setCategories(response.data)
      console.log(response.data)
    }
    getCategories();
    // eslint-disable-next-line
  }, [])



  const [open, setOpen] = React.useState(false);
  const [post, setPost] = useState({});


  const agregarAnuncios = async (anuncio) => {
    if (anuncio.banner == undefined) {
      anuncio.banner = "https://blog.hotmart.com/wp-content/uploads/2020/03/BLOG_marketing-institucional.png"
    }
    anuncio.usuario = 5
    await agregarAnuncioFn(anuncio)
    console.log(anuncio)
    handleLimpiar()
    handleClose()
  }

  const today = new Date()

  const deadline = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())

  const [selectedDate, setSelectedDate] = React.useState(Date.now());
  const [selectedDeadLineDate, setSelectedDeadLineDate] = React.useState(deadline);


  const handleClickOpen = (e) => {
    setOpen(true);
    
    let datenow=new Date()
    let datefin=deadline
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' })
    const [{ value: month },,{ value: day },,{ value: year }]=dateTimeFormat.formatToParts(datenow) 
    const [{ value: monthf },,{ value: dayf },,{ value: yearf }]=dateTimeFormat.formatToParts(datefin) 
    let actual=`${year}-${month}-${day}`
    let fin=`${yearf}-${monthf}-${dayf}`
  setPost({
  ...post,
  ["fecha_inicio"]: actual,
  ["fecha_termino"]: fin,
  });
  setSelectedDate(actual)
  setSelectedDeadLineDate(fin)
  };

  const handleClose = () => {
    handleLimpiar()
    setOpen(false);
  };

  const handleLimpiar = () => {
    var categoria = document.getElementById("categoria");
    if (categoria.value.length != 0) setFilter("");
    setItemstags(previousData => ({
      ...previousData,
      tags: []
    }));
  };

  const handleChangePost = (e) => {
    setPost({
      ...post,
      [e.target.id]: e.target.value

    })

  }



  const handleChangeChip = (habilidades) => {
    habilidades.map((habilidad, i) => {
      let tag = {
        nombre: habilidad
      };
      tags.push(tag);
    })

    setPost({
      ...post,
      ["habilidad"]: tags
    })


  }


  const handleChangecategoria = (id) => {
    setPost({
      ...post,
      ["categoria"]: id
    })
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
    let dateini=date
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' })
    const [{ value: month },,{ value: day },,{ value: year }]=dateTimeFormat.formatToParts(dateini) 
    let actual=`${year}-${month}-${day}`
    setPost({
      ...post,
      ["fecha_inicio"]: actual
    })
  }

  const handleDeadLineDateChange = (date) => {
    setSelectedDeadLineDate(date);
    let datefin=date
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' })
    const [{ value: month },,{ value: day },,{ value: year }]=dateTimeFormat.formatToParts(datefin) 
    let fin=`${year}-${month}-${day}`
    setPost({
      ...post,
      ["fecha_termino"]: fin
    })
  }


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
            <Button autoFocus color="inherit" onClick={() => agregarAnuncios(post)}>
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

            {categories.length > 0 &&
              <Autocomplete
                style={{ margin: 10 }}
                fullWidth
                id="categoria"
                options={categories}
                getOptionLabel={(cat) => cat.nombre}
                value={filter}//filter.nombre
                onChange={(event, newValue) => {
                  setFilter(newValue);
                  console.log(newValue)
                  if (newValue != null) {
                    handleChangecategoria(newValue.id)
                  }
                }}


                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
              />
            }
          </div>

          <div className={classee.right} >

            <div>
              <Typography variant="h6">Banner del anuncio:</Typography>
              {/*<img src={imagen} alt="imagen" className={classee.imageStyl}/>*/}
              <TextField
                style={{ margin: 3 }}
                className={classee.textField}
                id="banner"
                label="banner de anuncio URL:"
                placeholder="https://blog.hotmart.com/wp-content/uploads/2020/03/BLOG_marketing-institucional.png"
                fullWidth
                required
                multiline
                variant="outlined"

                onChange={handleChangePost}
              />
            </div>



            <div className={classee.dates}>
              <Typography variant="h6">Fecha de inicio y fin: </Typography>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container>
                  {/* justify="space-around" */}
                  <KeyboardDatePicker
                    className={classee.textField}
                    id="fecha_inicio"
                    label="Fecha de inicio: "
                    format="yyyy-MM-dd"
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
                    format="yyyy-MM-dd"
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