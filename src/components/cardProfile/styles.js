import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 140,
    },
    views: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
    },

    tagsContainer: {
        marginTop: 10,
        marginBottom: 10,
    }
});

export default useStyles;