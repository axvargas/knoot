import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios'
import AnuncioContext from './context';
import AnuncioReducer from './reducer';

import {
    OBTENER_ANUNCIOS,
    OBTENER_ANUNCIO_ACTUAL,
    AGREGAR_ANUNCIO,
    EDITAR_ANUNCIO,
    ELIMINAR_ANUNCIO,
    OBTENER_ANUNCIOS_USUARIO
} from '../../types';

import { useSnackbar } from 'notistack';

const AnuncioState = props => {
    const { enqueueSnackbar } = useSnackbar();

    const initialState = {
        anuncios: [],
        anunciosDeUsuario: [],
        msg: null
    }
    // Dispatch para ejecutar las acciones mediante types
    const [state, dispatch] = useReducer(AnuncioReducer, initialState);

    // CRUD 

    // Obtener los anuncios 
    const obtenerAnunciosFn = async () => {
        try {
            const respuesta = await clienteAxios.get('/Anuncios/');
           
            dispatch({
                type: OBTENER_ANUNCIOS,
                payload: respuesta.data
            })
            enqueueSnackbar("Anuncios cargados",
                { variant: 'success', preventDuplicate: true });
        } catch (error) {
            console.log(error);
            enqueueSnackbar("Error cargar los anuncios",
                { variant: 'error', preventDuplicate: true });
        }

    }

    // Obtener los anuncios del usuario
    const obtenerAnunciosDeUsuarioFn = async (usuarioId) => {
        try {
            const respuesta = await clienteAxios.get('/Anuncios/userId/', { params: { usuarioId } });
            dispatch({
                type: OBTENER_ANUNCIOS_USUARIO,
                payload: respuesta.data.anunciosDeUsuario
            })
            enqueueSnackbar("Anuncios cargados",
                { variant: 'success', preventDuplicate: true });
        } catch (error) {
            console.log(error);
            enqueueSnackbar("Error cargar los anuncios",
                { variant: 'error', preventDuplicate: true });
        }

    }

    // Obtener el anuncio actual 
    const obtenerAnuncioActualFn = anuncioId => {
        dispatch({
            type: OBTENER_ANUNCIO_ACTUAL,
            payload: anuncioId
        })
    }

    // Agregar un anuncio
    const agregarAnuncioFn = async (anuncio) => {
        try {
            const respuesta = await clienteAxios.post('/Anuncios/', anuncio);
            dispatch({
                type: AGREGAR_ANUNCIO,
                payload: respuesta.data
            })
            enqueueSnackbar("Anuncio creado",
                { variant: 'success', preventDuplicate: true });
        } catch (error) {
            console.log(error);
            enqueueSnackbar("Error al crear anuncio",
                { variant: 'error', preventDuplicate: true });
        }

    }

    // Editar un anuncio
    const editarAnuncioFn = async (anuncio) => {
        const { id } = anuncio;
        try {
            const respuesta = await clienteAxios.put(`/anuncio${id}`, anuncio);
            dispatch({
                type: EDITAR_ANUNCIO,
                payload: anuncio
            })
        } catch (error) {
            console.log(error);
            enqueueSnackbar("Error al editar anuncio",
                { variant: 'error', preventDuplicate: true });
        }

    }

    // Eliminar un anuncio
    const eliminarAnuncioFn = async (anuncioId) => {
        try {
            const respuesta = await clienteAxios.put(`/anuncio${anuncioId}`);
            dispatch({
                type: ELIMINAR_ANUNCIO,
                payload: anuncioId
            })
        } catch (error) {
            console.log(error);
            enqueueSnackbar("Error al eliminar anuncio",
                { variant: 'error', preventDuplicate: true });
        }

    }
    return (
        <AnuncioContext.Provider
            value={{
                anuncios: state.anuncios,
                anuncioActual: state.anuncioActual,
                msg: state.msg,

                obtenerAnunciosFn,
                obtenerAnunciosDeUsuarioFn,
                obtenerAnuncioActualFn,
                agregarAnuncioFn,
                editarAnuncioFn,
                eliminarAnuncioFn
            }}
        >
            {props.children}
        </AnuncioContext.Provider>
    )
}
export default AnuncioState;