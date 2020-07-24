import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
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
    },
    white: {
        color: 'white',
    },

    tagsContainer: {
        marginTop: 10,
        marginBottom: 10,
    },

    nombre: {
        display: 'flex',
    }
});

export default useStyles;