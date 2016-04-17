import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';

export default (
    <Route path="/" component={App}>
        <Route path="login" component={Login}/>
        <Route path="register" component={Register}/>
        <Route path="user" component={User}/>
    </Route>
);