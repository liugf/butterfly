import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import User from './components/User';

export default (
    <Route path="/" component={App}>
        <Route path="user" component={User}/>
    </Route>
);