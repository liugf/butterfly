import React from 'react';
import Header from './Header';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<Header/>
				</div>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}