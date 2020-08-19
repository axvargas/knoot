import React, { useReducer } from 'react';
import AuthContext from './context';
import AuthReducer from './reducer';
import ClienteAxios from '../../config/axios'
import {
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    OBTENER_USUARIO
} from '../../types';
import clienteAxios from '../../config/axios';
const AuthState = props => {
    const initialState = {
        usuario: null,
        token: localStorage.getItem('token'),
        autenticado: null,
        msg: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // CRUD
    

    return (
        <AuthContext.Provider
            value={{
                usuario: state.usuario,
                token: state.token,
                autenticado: state.autenticado,
                msg: state.msg
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState