import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import User from './components/User';

export default (
    <Route path="/" component={App}>
        <Route path="login" component={Login}/>
        <Route path="user" component={User}/>
    </Route>
);