import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',

	},
	drawer: {
		[theme.breakpoints.up('lg')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		backgroundColor: '#3A405A'

	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	left: {
		// flexGrow: 1,
	},
	rightToolbar: {
		marginLeft: 'auto',
		marginRight: -12,
	},
	nav: {
		marginLeft: 'auto',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	hideUp: {
		marginLeft: 'auto',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	hideDown: {
		marginLeft: 'auto',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	btn: {
		padding: '19px 15px',
		textTransform: 'Capitalize'
	},
	namePage: {
		textDecoration: 'none',
		color: 'inherit'
	},
	fab:{
		zIndex: '9999'
	}

}));

export default useStyles;