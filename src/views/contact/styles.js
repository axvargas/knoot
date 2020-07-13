import { makeStyles } from '@material-ui/core/styles';
//import contact from '../../recursos/contact.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },

	  decorediv: {
	  backgroundColor: '#3A405A',
	  width: 'auto',
	  height: '100px',
},

  container: {
    color: '#039be5',
  	paddingTop: theme.spacing(4),
  	display: "flex",
  }

}));

export default useStyles;