import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

	nav: {
		marginLeft: 'auto',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},		
	},
	btn: {
		padding: '19px 15px',
		textTransform: 'Capitalize'
	},
	hideDown: {
		marginLeft: 'auto',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	}

}));

export default useStyles;