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
    },
    views: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
    },

    tagsContainer: {
        marginTop: 10,
    }

});

export default useStyles;