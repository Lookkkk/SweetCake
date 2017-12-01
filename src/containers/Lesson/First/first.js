import React, {Component} from 'react';
import './first.less'
import {Route, NavLink, Link, Redirect, Switch} from 'react-router-dom';
export default class First extends Component {
    constructor(){
        super();
        this.state={show:false}
    }
   /* handleClick=(e)=>{
      this.setState({
          show:!this.state.show
      })
    };*/
    render() {
        //console.log(this.props);
        //console.log(this.props.lessons);
        return (
                <ul className="big-frame">
                    {
                        this.props.lessons.map((item,index)=>(
                            <li className="current" key={index}>
                                <div className="frame">
                                    <Link to={`/lesson/course/${index}`}>
                                        <img src={item.url} alt=""/>
                                        <div className="title">{item.title}</div>
                                    </Link>
                                       {/*<div key={index} className="sign"/>*/}
                                </div>
                            </li>
                        ))
                    }

                </ul>
        )
    }
}


