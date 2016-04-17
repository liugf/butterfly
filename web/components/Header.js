import React, { Component, PropTypes } from 'react';
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
                    <a src="/" className="btn btn-dark">注册</a>
                    <a src="/" className="btn btn-default">登录</a>
                </div>
            </div>
        );
    }
}