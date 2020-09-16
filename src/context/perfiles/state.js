import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios'
import UsuarioContext from './context';
import UsuarioReducer from './reducer';

import {
    OBTENER_USUARIOS,
    OBTENER_USUARIO_PERFIL
} from '../../types';

import { useSnackbar } from 'notistack';

const UsuarioState = props => {
    const { enqueueSnackbar } = useSnackbar();

    const initialState = {
        usuarios: [],
        perfilUsuario: [],
        msg: null
    }
    // Dispatch para ejecutar las acciones mediante types
    const [state, dispatch] = useReducer(UsuarioReducer, initialState);

    // CRUD

    // Obtener los anuncios 
    const obtenerUsuariosFn = async () => {
        try {
            const respuesta = await clienteAxios.get(`/Consumidores/`);
            dispatch({
                type: OBTENER_USUARIOS,
                payload: respuesta.data
            })
            enqueueSnackbar("Usuarios cargados",
                { variant: 'success', preventDuplicate: true });
        } catch (error) {
            enqueueSnackbar("Error cargar los usuarios",
                { variant: 'error', preventDuplicate: true });
        }

    }

    const obtenerUsuarioPerfil = async (id) => {
        try {
            const respuesta = await clienteAxios.get(`/Consumidores/${id}/`);
            dispatch({
                type: OBTENER_USUARIO_PERFIL,
                payload: respuesta.data
            })
            enqueueSnackbar("Perfil cargado",
                { variant: 'success', preventDuplicate: true });
        } catch (error) {
            enqueueSnackbar("Error al cargar perfil.",
                { variant: 'error', preventDuplicate: true });
        }

    }


   
    
    return (
        <UsuarioContext.Provider
            value={{
                usuarios: state.usuarios,
                perfilUsuario: state.perfilUsuario,
                msg: state.msg,

                obtenerUsuariosFn,
                obtenerUsuarioPerfil
            }}
        >
            {props.children}
        </UsuarioContext.Provider>
    )
}
export default UsuarioState;