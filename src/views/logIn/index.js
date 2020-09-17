import React, { useEffect, useContext, useState } from 'react';
import {
    Avatar,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Paper,
    Box,
    Grid,
    Typography,
    Input,
    
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AuthContext from '../../context/auth/context';
import Copyright from '../../components/copyright';

//Styles
import useStyles from './styles';

const LogIn = ({ history }) => {
    const classes = useStyles();
    const { signIn } = React.useContext(AuthContext);
    const [username, setUserName] = React.useState(null)
    const [password, setPassword] = React.useState(null)

    const loginHandle = async (e) => {
        e.preventDefault()
        await signIn(username, password)
        history.push("./")
      //  localStorage.setItem('id', usuarioActual.id)
    }

     const handleUserName = (e) => {
        setUserName(e.target.value);
    }

    const handlePass = (e) => {
        setPassword(e.target.value);
    }
    return (
                
            <Grid container className={classes.root}>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Iniciar Sesión
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="email"
                            name="userName"
                            autoComplete="email"
                            autoFocus
                          //  value={data.userName}
                            onChange={handleUserName}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                           // value={data.password}
                            onChange={handlePass}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            onClick={(e) => loginHandle(e)}
                        >
                            Ingresar
                            
            </Button>

            
                        <Grid container>
                            <Grid item xs>
                            </Grid>
                            <Grid item>
                                <Link href= "../register" variant="body2">
                                    {"No tienes una cuenta? Registrate"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}
export default LogIn;