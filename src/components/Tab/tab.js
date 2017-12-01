import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './tab.less';
import {connect} from 'react-redux'
import actions from '../../store/actions/session'
 export default class Tab extends Component{
   // constructor(){
   //     super();
   //     this.state={go:true}
   // }
    // componentWillMount(){
    //     let status=JSON.parse(localStorage.getItem('user'))||[];
    //       if(status){
    //           this.setState({go:false});
    //       }else {
    //           this.setState({go:true})
    //       }
    // }

    render(){
        // console.log(JSON.parse(localStorage.getItem('user')));
        return (
            <div>
                <nav className="tabs">
                    <NavLink to="/home">
                        <i className="icon-index"/>
                        <span>首页</span>
                    </NavLink>
                    <NavLink to="/lesson/course">
                        <i className="icon-lesson"/>
                        <span>课程</span>
                    </NavLink>
                    <a href="#"/>
                    <NavLink to="/tools">
                        <i className="icon-tools"/>
                        <span>工具</span>
                    </NavLink>
                   <NavLink to="/profile">
                        <i className="icon-profile"/>
                        <span>我的</span>
                    </NavLink>


                </nav>
            </div>
        )
    }
}
