import {
    OBTENER_USUARIOS
} from '../../types';
export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case OBTENER_USUARIOS:
            return {
                ...state,
                usuarios: payload
            }
        default:
            break;
    }
}