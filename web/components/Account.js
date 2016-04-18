import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { changeTitle } from '../actions';
import '../assets/scss/account.scss';

class Account extends Component {
    componentWillMount() {
        this.props.changeTitle(this.props.title);
    }
    render() {
        return (
            <div>
                <div className="random-background"></div>
                <div className="account-flex-container">
                    <div className="account-container">
                        <h2>{this.props.title}</h2>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Account = connect(
    () => {
        return {}
    },
    (dispatch) => {
        return {
            changeTitle: (title) => {
                dispatch(changeTitle(title));
            }
        }
    }
)(Account);


export class Login extends Component {
    constructor(props) {
        super(props);
        this.title = '用户登录';
    }

    render() {
        return (
            <Account title={this.title}>
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
                    <Link to='/register'>还没有账户, 马上注册</Link>
                </div>
            </Account>
        );
    }
}

export class Register extends Component {
    constructor(props) {
        super(props);
        this.title = '用户注册';
    }

    render() {
        return (
            <Account title={this.title}>
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
                    <Link to='/login'>已有帐号? 马上登录</Link>
                </div>
            </Account>
        );
    }
}