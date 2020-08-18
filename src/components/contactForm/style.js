import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '70%',
            //width: '25ch',
            display: 'flex',
            flexWrap: 'wrap',
        },
    },

    div: {

        display: 'flex',
        width: '71%',
    },

    formControl: {
        margin: theme.spacing(1),
        width: '70%',
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },


}));

export default useStyles;