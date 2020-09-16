import {
    OBTENER_USUARIOS,
    OBTENER_USUARIO_PERFIL
} from '../../types';
export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case OBTENER_USUARIOS:
            return {
                ...state,
                usuarios: payload
            }
        case OBTENER_USUARIO_PERFIL:
            return {
                ...state,
                perfilUsuario: [payload]
            }
        default:
            break;
    }
    
}