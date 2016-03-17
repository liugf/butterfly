import React from 'react';
import {Link} from 'react-router'

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>App</h1>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">about</Link></li>
					<li><Link to="/contact">contact</Link></li>
					<li><Link to="/comments">comments</Link></li>
				</ul>
			</div>
		);
	}
}