import React from 'react';
import AnuncioState from './context/anuncios/state'
import ResponsiveDrawer from './components/layout';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Router from './routes/Router';
function App() {
	const notistackRef = React.createRef();
	const onCloseSnack = key => () => {
		notistackRef.current.closeSnackbar(key);
	}
	return (
		
		//<LogIn />
		<BrowserRouter>
			<SnackbarProvider
				ref={notistackRef}
				maxSnack={5}
				action={(key) => (
					<IconButton onClick={onCloseSnack(key)} size="small">
						<CloseIcon size="small" />
					</IconButton>
				)}
			>
				{/** <UsuarioState> */}
				<AnuncioState>
					<ResponsiveDrawer>
						<Router />
					</ResponsiveDrawer>
				</AnuncioState>
				{/** </UsuarioState> */}
			</SnackbarProvider>
		</BrowserRouter>
		
		
	);
}

export default App;
