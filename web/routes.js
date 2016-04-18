import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import {Login, Register} from './components/Account';
import User from './components/User';

export default (
    <Route path="/" component={App}>
        <Route path="login" component={Login}/>
        <Route path="register" component={Register}/>
        <Route path="user" component={User}/>
    </Route>
);