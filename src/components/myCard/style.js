import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        //maxWidth: '100%',
        backgroundColor: '#3A405A',
    },
    media: {
        height: 140,
    },
    views: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
    },
    typography: {
        color: 'white',
        maxHeight: '30px',
        overflow: 'hidden',
        fontSize:'20px',
    },
     
    descripcion: {
        color: 'white',
        maxHeight: '60px',
        overflow: 'hidden',
    },
    tagsContainer: {
        marginTop: 10,
        height: '70px',
        overflow: 'hidden',
    },
    white: {
        color: 'white',
    },

});

export default useStyles;