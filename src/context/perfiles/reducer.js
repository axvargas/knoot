import {
    OBTENER_USUARIOS,
    OBTENER_USUARIO_PERFIL,
    OBTENER_USUARIO_ID
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

        case OBTENER_USUARIO_ID:
            console.log(state.usuarios)
            return {
                ...state,
                usuarioActual: state.usuarios.find(usuario => usuario.id.email === payload)
            }
        default:
            break;
    }
    
}