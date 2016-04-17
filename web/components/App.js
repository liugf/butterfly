import React, { Component, PropTypes } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>App</h1>
                {children}
            </div>
        );
    }
}