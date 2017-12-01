import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from  'react-redux'
import actions from '../../../store/actions/session'
import './person.less'
// import {push} from 'react-router-redux'
 class  Person extends Component{
   // componentWillMount(){
   //     this.props.validate();
   //
   // }
   //   componentDidMount(){
   //     if(this.props.code===0){
   //         push('/person')
   //     }else {
   //         push('/profile')
   //     }
   //   }


    signOut=()=>{
        // let code =1;
        this.props.signout();
 };
    render(){
        console.log(this.props);
        return (
            <div className="person-content">
                {/*//第一部分：头部 个人信息*/}
               <div className="person-head">
                   <div className="content">
                       <a href="">
                           <img src="http://img.hb.aicdn.com/18313d7c916e64894af2f07c0f3c6fae3e8a2547182a-yM8jYR_fw658" alt=""/>
                       </a>
                       <input type="hidden" className="sex"/>
                       {/*//显示用户手机号*/}
                       <div className="person-name">{this.props.user?this.props.user.phone:''}</div>
                       {/*//显示 关注  粉丝*/}
                       <div className="data">
                           <div className="attention">
                               <span className="attention-count">关注 1</span>
                           </div>
                           <div className="fans">
                               <span className="fans-count">粉丝 3</span>
                           </div>
                       </div>

                   </div>
               </div>

                {/*第二部分：内容区域  */}
                <div className="set-content">
                    <ul>
                        <Link to={'/collect'}>
                            <span>我的收藏</span>
                            <p><i>&gt;</i></p>
                        </Link>
                    </ul>
                    <ul>
                        <Link to={'/myworks'}>
                            <span>我的作品</span>
                            <p><i>&gt;</i></p>
                        </Link>
                    </ul>
                </div>
                <div className="set-content">
                    <ul>
                        <a href="">
                            <span>消息中心</span>
                            <p className="msgCenter"><i>&gt;</i></p>
                        </a>
                    </ul>
                </div>
                <div className="set-content">
                    <ul>
                        <a href="">
                            <span>手机号</span>
                            <p className="phoneContent">{this.props.user?this.props.user.phone:''}</p>
                            <p><i>&gt;</i></p>
                        </a>
                    </ul>
                    <ul>
                        <a href="">
                            <span>修改密码</span>
                            <p><i>&gt;</i></p>
                        </a>
                    </ul>

                    <ul>
                     <li>
                         微博
                         <p className="no-bind">未绑定</p>
                     </li>
                        <div className="bind-status">
                            <div className="switch">
                                <div className="btn"></div>
                            </div>
                        </div>
                    </ul>
                </div>

                {/*退出登录按钮*/}
                <div className="sign-out">
                    <button
                        onClick={this.signOut}
                        className="person-out">退出登录</button>
                </div>
            </div>
        )
    }
}

export default connect(
    state=>state.session,
    actions
)(Person)