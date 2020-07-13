import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 150,
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