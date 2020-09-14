import React, { useReducer } from 'react';
import AuthContext from './context';
import AuthReducer from './reducer';
import clienteAxios from '../../config/axios'
import { LOGIN_EXITOSO } from '../../types';
import { useSnackbar } from 'notistack';

const AuthState = props => {

    const initialState = {
        usuario: null,
        token: localStorage.getItem('token'),
        autenticado: null,
        msg: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const { enqueueSnackbar } = useSnackbar();
    //CRUD

    const autentificarme = async (usuario) => {
        try {
            const respuesta = await clienteAxios.post('/credenciales/login', usuario);

            dispatch({
                type: LOGIN_EXITOSO,
                token: respuesta.data
            })
            enqueueSnackbar("Acceso con éxito",
                { variant: 'success', preventDuplicate: true });
        } catch (error) {
            console.log(error);
            enqueueSnackbar("Error al ingresar",
                { variant: 'error', preventDuplicate: true });
        }

    }
    

    return (
        <AuthContext.Provider
            value={{
                usuario: state.usuario,
                token: state.token,
                autenticado: state.autenticado,
                msg: state.msg,

                autentificarme
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState