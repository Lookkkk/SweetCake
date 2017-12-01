import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Login.less'
import {connect} from 'react-redux'
import actions from '../../../store/actions/session'

class Login extends Component {
    constructor() {
        super();
        this.state = {isShow1: false, isShow2: false}
    }

    signUp = (e) => {
        e.preventDefault();
        let phone = this.phone.value;
        console.log(phone);
        let password = this.password.value;
        if (phone && password) {
            this.props.login({phone, password});
            this.setState({isShow1: false});
            this.setState({isShow2: false});
        }
        else if (!phone && password) {
            this.setState({isShow1: true});
            this.setState({isShow2: false});
        }
        else if (phone && !password) {
            this.setState({isShow2: true});
            this.setState({isShow1: false});
        }
        else {
            this.setState({isShow1: true});
            this.setState({isShow2: true});
        }

        // this.phone.value='';
        // this.password.value='';
    };
    disappear = () => {
        this.setState({isShow1: false, isShow2: false});

    };

    render() {
        //console.log(this.phone.value);
        return (
            <div className="base">
                <div className="register-img"/>
                <div className="register-bg"/>

                <div className="register-head">
                    <div className="left">
                        <a href="#" onClick={() => this.props.history.goBack()}><i>&lt;</i></a>
                    </div>
                    <div className="center register">登录</div>

                    <div className="right">
                        <Link to={'/register'}>注册</Link>
                        {/*<input type="text"/>*/}
                    </div>
                </div>

                <div className="register-form">
                    <form>
                        <div className="phone">
                            <input autoFocus ref={input => this.phone = input}
                                   onFocus={this.disappear}
                                   type="text" placeholder="请输入11位手机号码"/>
                            {/*{this.phone ? this.phone.value === '' ?*/}
                            {/*<span className="checkout-phone">手机号不能为空</span> : '' : ''}*/}
                            {this.state.isShow1 ? <span
                                className="checkout-phone">手机号不能为空</span> : ''}

                        </div>
                        <div className="password">
                            <input ref={input => this.password = input}
                                   onFocus={this.disappear}
                                   type="password" placeholder="请输入密码"/>
                            {this.state.isShow2 ? <span className="checkout-password">密码不能为空</span> : ''}

                            <button
                                onClick={this.signUp}
                                className="btn">登录
                            </button>
                        </div>
                        <div className="goto">
                            <Link to={'/register'}>忘记密码？找回密码</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(
    state => state.session,
    actions
)(Login)