import { makeStyles } from '@material-ui/core/styles';
//import contact from '../../recursos/contact.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    }

    image: {
        backgroundImage: '../../recursos/contact.jpg',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#039be5',
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    imageStyl: {
    flexGrow:1,
    width:'100%',
    height:"20%",
    alignItems: 'center',
    justifyContent:'center',
  },

  container: {
    color: '#039be5',
  	paddingTop: theme.spacing(4),
  display: "flex",
  }

}));

export default useStyles;