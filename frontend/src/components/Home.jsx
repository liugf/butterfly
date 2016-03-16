import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

export default class Home {
	render(node) {
		ReactDOM.render(<Header/>, document.getElementById(node));
	}
}