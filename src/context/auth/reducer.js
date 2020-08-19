import {
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    OBTENER_USUARIO
} from '../../types';

export default (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case LOGIN_EXITOSO:
            return {
                ...state
            }
            break;
        case LOGIN_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                msg: null
            }
            break;
        case CERRAR_SESION:
            return {
                ...state
            }
            break;
        case OBTENER_USUARIO:
            return {
                ...state
            }
            break;

        default:
            break;
    }
}