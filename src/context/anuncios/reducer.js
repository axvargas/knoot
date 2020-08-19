import {
    OBTENER_ANUNCIOS,
    OBTENER_ANUNCIO_ACTUAL,
    AGREGAR_ANUNCIO,
    EDITAR_ANUNCIO,
    ELIMINAR_ANUNCIO,
    OBTENER_ANUNCIOS_USUARIO
} from '../../types';
export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case OBTENER_ANUNCIOS:
            return {
                ...state,
                anuncios: payload
            }
        case OBTENER_ANUNCIOS_USUARIO:
            return {
                ...state,
                anunciosDeUsuario: payload
            }
        case OBTENER_ANUNCIO_ACTUAL:
            return {
                ...state,
                anuncioActual: state.anuncios.find(anuncio => anuncio.id === payload)
            }
        case AGREGAR_ANUNCIO:
            return {
                ...state,
                anuncios: [...state.anuncios, payload]
            }
        case EDITAR_ANUNCIO:
            return {
                ...state,
                anuncios: state.anuncios.map(anuncio => anuncio.id === payload.id ? payload : anuncio)
            }
        case ELIMINAR_ANUNCIO:
            return {
                ...state,
                anuncios: state.anuncios.filter(anuncio => anuncio.id !== payload),
            }
        default:
            break;
    }
}