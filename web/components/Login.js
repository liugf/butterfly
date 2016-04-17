import React, { Component, PropTypes } from 'react';
import '../assets/scss/account.scss';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="random-background"></div>
                <div className="account-flex-container">
                    <div className="account-container">
                        <h2>用户登录</h2>
                        <form action="">
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="用户名/手机/邮箱"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="密码"/>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"/> 记住我
                                </label>
                            </div>
                            <button type="button" className="btn btn-dark btn-lg">登录</button>
                        </form>
                        <div className="buttom-link">
                            <a href="/">还没有账户, 马上注册</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}