import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		display: 'block'
	},
	toolbar: theme.mixins.toolbar

}));

export default useStyles;