import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Component imports
// import SignIn from '../components/auth/signin';
// import SignUp from '../components/auth/signup';
// import Projects from '../components/projects';
import Home from '../views/home';
import LogIn from '../views/logIn';
import About from '../views/about';
import Register from '../views/register';


const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={LogIn}></Route>
            <Route exact path='/log-in' component={LogIn}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/about' component={About}></Route>
            {/* <Redirect from="/" to="/sign-in" /> */}
            {/*
            <Route component={NotFound}></Route> */}
        </Switch>
    );
}

export default Router;