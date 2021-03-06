import React, { Component, PropTypes } from 'react';
import Header from './Header';
import '../assets/scss/common.scss';

export default class App extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <Header/>
                {children}
            </div>
        );
    }
}