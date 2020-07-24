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
    },
    tagsContainer: {
        marginTop: 10,
    },
    white: {
        color: 'white',
    },

});

export default useStyles;