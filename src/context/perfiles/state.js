import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios'
import UsuarioContext from './context';
import UsuarioReducer from './reducer';

import {
    OBTENER_USUARIOS
} from '../../types';

import { useSnackbar } from 'notistack';

const UsuarioState = props => {
    const { enqueueSnackbar } = useSnackbar();

    const initialState = {
        usuarios: [],
        msg: null
    }
    // Dispatch para ejecutar las acciones mediante types
    const [state, dispatch] = useReducer(UsuarioReducer, initialState);

    // CRUD

    // Obtener los anuncios 
    const obtenerUsuariosFn = async () => {
        try {
            const respuesta = await clienteAxios.get('/Usuarios/');

            dispatch({
                type: OBTENER_USUARIOS,
                payload: respuesta.data
            })
            enqueueSnackbar("Usuarios cargados",
                { variant: 'success', preventDuplicate: true });
        } catch (error) {
            console.log(error);
            enqueueSnackbar("Error cargar los usuarios",
                { variant: 'error', preventDuplicate: true });
        }

    }

   
    
    return (
        <UsuarioContext.Provider
            value={{
                usuarios: state.usuarios,
                msg: state.msg,

                obtenerUsuariosFn
            }}
        >
            {props.children}
        </UsuarioContext.Provider>
    )
}
export default UsuarioState;