import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../views/home';
import Posts from '../views/posts';
import Favorites from '../views/favorites';
import Profile from '../views/profile';
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
        </Switch>
    );
}

export default Router;