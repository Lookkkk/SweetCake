import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './register.less'
import {connect} from 'react-redux';
import actions from  '../../../store/actions/session'
 class Register extends Component{
     constructor(){
         super();
         this.state={isShow1:false,isShow2:false,isShow3:false}
     }
     registers=(e)=>{
         e.preventDefault();
         console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
         let phone=this.phone.value;
         let password=this.password.value;
         let confirmPassword=this.confirmPassword.value;

         if(!!phone&&!!password&&!!confirmPassword&&password===confirmPassword){
             console.log(phone);
             this.props.register({phone,password});
         }
         else if(!phone&&password&&confirmPassword){
             this.setState({isShow1:true});
             this.setState({isShow2:false});
             this.setState({isShow3:false});
         }
         else if(!phone&&!password&&confirmPassword){
             this.setState({isShow1:true});
             this.setState({isShow2:true});
             this.setState({isShow3:false});
         }
         else if(phone&&!password&&confirmPassword){
             this.setState({isShow2:true});
             this.setState({isShow1:false});
             this.setState({isShow3:false});
         }
         else if(phone&&!password&&!confirmPassword){
             this.setState({isShow2:true});
             this.setState({isShow1:false});
             this.setState({isShow3:true});
         }
         else{
             this.setState({isShow1:true});
             this.setState({isShow2:true});
             this.setState({isShow3:true});
         }
         // this.phone.value='';
         // this.password.value='';
         // this.confirmPassword.value='';
     };
     disappear=()=>{
         this.setState({isShow1:false,isShow2:false,isShow3:false});

     };
    render(){
        // console.log(this.props);

        return (
            <div className="base">
                <div className="register-img"/>
                <div className="register-bg"/>

                <div className="register-head">
                    <div className="left">
                        <a href="#" onClick={()=>this.props.history.goBack()}><i>&lt;</i></a>
                    </div>
                    <div className="center register">注册</div>

                    <div className="right">
                        <Link to={'/login'}>登录</Link>
                        {/*<input type="text"/>*/}
                    </div>
                </div>

                <div className="register-form">
                    <form>
                        <div className="phone">
                            <input ref={input=>this.phone=input}
                                   onFocus={this.disappear}
                                   autoFocus type="text" placeholder="请输入11位手机号码"/>
                            {this.state.isShow1?<span
                                className="checkout-phone">手机号不能为空</span>:''}
                        </div>
                        <div className="password">
                            <input ref={input=>this.password=input}
                                   onFocus={this.disappear}
                                   type="password" placeholder="请设置密码"/>
                            {this.state.isShow2?<span className="checkout-password">密码不能为空</span>:''}
                        </div>
                        <div className="confirm-password">
                            <input ref={input=>this.confirmPassword=input}
                                   onFocus={this.disappear}
                                   type="password" placeholder="请确认密码"/>
                            {this.state.isShow3?<span className="checkout-password2">密码不能为空</span>:''}
                            <button
                                onClick={this.registers}
                                className="btn" >注册</button>
                        </div>
                        <div className="goto">
                            <Link to={'/login'}>已有账号？去登录</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.session,
    actions
)(Register)