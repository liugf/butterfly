import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import '../assets/scss/header.scss';
import logo from '../assets/img/logo.png';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <a className="logo" href="/"><img src={logo} alt="logo"/></a>
                <div className="title">
                    <span>用户登录</span>
                </div>
                <div className="right">
                    <Link className="btn btn-dark" to='/register'>注册</Link>
                    <Link className="btn btn-default" to='/login'>登录</Link>
                </div>
            </div>
        );
    }
}