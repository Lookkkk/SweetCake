import React, {Component} from 'react';
import './lesson.less';
import Header from "../../components/Header/header.js";
import "../../components/Header/header.less";
import {Route, NavLink, Link, Redirect, Switch} from 'react-router-dom';
import Course from "./course/course";
import Pack from "./pack/pack";
import {connect} from 'react-redux'
import actions from '../../store/actions/lesson'
import {upMore, downRefresh} from '../../utils/util.js'
import First from "./First/first";
import Detail from '../Detail/detail'
class Lesson extends Component {
    componentDidMount() {
        this.props.getLessons();//获取教程列表数据
        upMore(this.refs.content, this.props.refresh);
        downRefresh(this.refs.content, this.props.getLessons);
        this.props.getLessonPrefer();//获取课程包数据
    }
    render() {
        return (
            <div>
                <Header>
                    {
                        <div className="lesson-header">
                            <Link className="left-link" to="/search/lesson"/>
                            <div className="tabs-header">
                                <NavLink className="coursePack course" to="/lesson/course"><span>教程</span>
                                </NavLink>
                                <NavLink className="coursePack pack" to="/lesson/pack"><span>课程包</span>
                                </NavLink>
                            </div>
                            <Link className="right-link" to="/gift"/>
                        </div>
                    }
                </Header>
                <div ref="content" className="lesson-content">

                        <Route exact path="/lesson/course" render={() => <Course lessons={this.props.lessons} getLessons={this.props.getLessons}/>}/>
                        <Route exact path="/lesson/pack" render={()=><Pack lessons={this.props.lessons} getLessons={this.props.getLessons} prefer={this.props.prefer} getLessonPrefer={this.props.getLessonPrefer}/>}/>
                        <Route path="/lesson/pack/first" render={()=><First lessons={this.props.lessons} getLessons={this.props.getLessons}/>}/>

                </div>
                <Route path="/lesson/course/:index" render={(props) => <Detail {...props}/>}/>
            </div>
        )
    }
}
export default connect(state => state.lessons, actions)(Lesson)