import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Component imports
// import SignIn from '../components/auth/signin';
// import SignUp from '../components/auth/signup';
// import Projects from '../components/projects';
import Home from '../views/home';
import Posts from '../views/posts';
import Favorites from '../views/favorites';
import Profile from '../views/profile';
import About from '../views/about';
import LogIn from '../views/logIn';
import Register from '../views/register';
import Contact from '../views/contact';


const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/home' component={Home}></Route>
            <Route exact path='/my-posts' component={Posts}></Route>
            <Route exact path='/favorites' component={Favorites}></Route>
            <Route exact path='/profile' component={Profile}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            {/* <Redirect from="/" to="/sign-in" /> */}
            {/*
            <Route component={NotFound}></Route> */}
        </Switch>
    );
}

export default Router;