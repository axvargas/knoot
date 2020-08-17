import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        backgroundColor: '#3A405A',
    },
    white: {
        color: 'white',
    },
    media: {
        height: 150,
    },
    typography: {
        color: 'white',
        maxHeight: '30px',
        overflow: 'hidden',
        fontSize:'20px',
    },
    
    descripcion: {
        color: 'white',
        maxHeight: '100px',
        overflow: 'hidden',
    },
    views: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
    },

    tagsContainer: {
        marginTop: 10,
        height: '70px',
        overflow: 'hidden',
    }

});

export default useStyles;