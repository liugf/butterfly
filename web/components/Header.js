import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import '../assets/scss/header.scss';
import logo from '../assets/img/logo.png';

class Header extends Component {
    componentWillUpdate(nextProps) {
        document.title = nextProps.title + ' - ' + this.props.title;
    }
    render() {
        return (
            <div className="header">
                <a className="logo" href="/"><img src={logo} alt="logo"/></a>
                <div className="title">
                    <span>{this.props.title}</span>
                </div>
                <div className="right">
                    <Link className="btn btn-dark" to='/register'>注册</Link>
                    <Link className="btn btn-default" to='/login'>登录</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        titleSurfix: state.titleSurfix
    }
};

export default connect(mapStateToProps)(Header);