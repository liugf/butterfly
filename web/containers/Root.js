import React, { Component, PropTypes } from 'react'

export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <div>hello</div>
        )
    }
}