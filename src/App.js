import React, { useContext, useState, useEffect, useMemo, useCallback } from 'react';
import AnuncioState from './context/anuncios/state';
import UsuarioState from './context/perfiles/state';
import AuthState from './context/auth/state';
import ResponsiveDrawer from './components/layout';
import { IconButton, Grid, LinearProgress} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Router from './routes/Router';
import AuthContext  from './context/auth/context';
import BaseRouter from './routes/BaseRouter';
import clienteAxios from './config/axios'
const App =()=> {
	const notistackRef = React.createRef();
	const sessionStorage = window.localStorage;
	const onCloseSnack = key => () => {
		notistackRef.current.closeSnackbar(key);
	}
	const initialLoginState = {
		loading: true,
		userName: null,
		userToken: null

	}

	const loginReducer = (prevState, action) => {
		switch (action.type) {
			case 'RETRIEVE_TOKEN':
				return {
					...prevState,
					userToken: action.token,
					loading: false,
				};
			case 'LOGIN':
				return {
					...prevState,
					userName: action.id,
					userToken: action.token,
					loading: false};
			case 'LOGOUT':
				return {
					...prevState,
					userName: null,
					userToken: null,
					loading: false};
			case 'REGISTER':
				return {
					...prevState,
					userName: action.id,
					userToken: action.token,
					loading: false};
        }
	}

	const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

	const authContext = React.useMemo(() => ({
		signIn: async (userName, password) => {
			let userToken = null;
			const data= {
				username: userName,
				email: userName,
				password: password
			}

			const respuesta = await clienteAxios.post('/credenciales/login/', data); 
			console.log(respuesta)
			try {

				userToken = respuesta.data.key
				userToken = await sessionStorage.setItem('userToken', userToken)
				} catch (e) {
					console.log(e)
				}
			dispatch({ type: 'LOGIN', id: userName, token: userToken })
		},

		signOut: async () => {
			try {
				await sessionStorage.removeItem('userToken')
			} catch (e) {
				console.log(e)
			}
			dispatch({ type: 'LOGOUT' })
		},
		signUp: () => {


		},
		changeNav: () => {
			let userToken = sessionStorage.getItem('userToken')
			return userToken;
        }
	}), []);

	useEffect(() => {
		setTimeout(async () => {
			let userToken = null;
			try {
				userToken = await sessionStorage.getItem('userToken')
			} catch (e) {
				console.log(e)
			}
			console.log(userToken);
			dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
		}, 1500)
	},[]);

	if (loginState.loading) {
		return (
			<Grid style={{ flex: 100, justifyContent: "center", alignItems: "center" }}>
				<LinearProgress   />
			</Grid>
			)
	}

	
	return (
		
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
				<AuthContext.Provider value={authContext}>
					<UsuarioState>
						<AnuncioState>
							{loginState.userToken !== null ? (
								<ResponsiveDrawer>
									<Router />
								</ResponsiveDrawer>
						) : (
								<ResponsiveDrawer>
									<BaseRouter />
								</ResponsiveDrawer>
								)
							}
						
						</AnuncioState>
					</UsuarioState>
				</AuthContext.Provider>
			</SnackbarProvider>
		</BrowserRouter>
		
		
	);
}

export default App;
