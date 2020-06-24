import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    titlePerfil:{
        textAlign: "center",
    }

    image: {
        backgroundImage: 'url(https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    avatar:{
        alt="Remy Sharp",
        src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/media/2019/11/08/perfil_personas_cuesta_perdonar.jpg"
    }

}));
export default useStyles;