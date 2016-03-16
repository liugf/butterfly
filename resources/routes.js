import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="about" component={About}/>
			<Route path="contact" component={Contact}/>
		</Route>
	</Router>
);