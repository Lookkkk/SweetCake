import React, {Component} from 'react';
import './profile.less';
import {Link}  from 'react-router-dom'
import {connect} from 'react-redux'
 class Profile extends Component {
         componentDidMount(){
             console.log(localStorage.getItem('user'));
             localStorage.getItem('user')?this.props.history.push('/person'):null;
     }
    render() {
        return (
            <div className="profile-bg">
                <div className="profile-back">
                    <Link to={'/home'}>取消</Link>
                </div>
                <div className="profile-middle">
                    <h2>登录</h2>
                    <span>可查看   /  收藏更多食谱和教程！</span>
                    <button className="profile-register"><Link to={'/register'} >注册</Link></button>
                    <button className="profile-login"><Link to={'/login'} >登录</Link></button>

                </div>

              <div className="profile-bottom">
                  <div className="left1"/>

                  <div className="login-quick">
                      试试快速登录
                  </div>
                  <div className="right1"/>
                  <div className="weibo">微博</div>
              </div>


            </div>
        )
    }
}
export default connect(
    state=>state.session
)(Profile);