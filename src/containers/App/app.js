import React, {Component} from 'react';
import {HashRouter as Router, Route, withRouter, Redirect, Switch} from 'react-router-dom';
import './app.less';
import Home from "../Home/index";
import Lesson from "../Lesson/lesson";
import Profile from "../Profile/profile";
import Tab from "../../components/Tab/tab";
import Recipe from "../../components/Search/Recipe/recipe";
import Search from "../../components/Search/search"
import Register from "../Profile/Register/register";
import Login from "../Profile/Login/login";
import Person from "../Profile/Person/person";

import Detail from '../Detail/detail.js'

import Collect from '../Profile/Collect/collect'
import Myworks from '../Profile/Myworks/myworks'
import Tools from '../Tools/tools.js'


import Dialog from '../../components/Dialog/dialog.js'

import Gift from "../../components/Header/gift/gift";
import Suff from "../Suff/suff";

import Cover from "./Cover/cover";


import OtherDetail from "../OtherDetail/otherDetail";

import Works from "../Works/works";
import Speech from "../Speech/speech";

import Comment from '../comment/CommentApp.js'

/*import First from '../Lesson/First/first'*/
let WithCover = withRouter(function (props) {
    return <Cover {...props}/>
});
export default class App extends Component {

    render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route path="/Recipe/:from" component={Recipe}/>
                        <Route path="/lesson" component={Lesson}/>

                        {/*<Route path="/detail" component={Detail}/>*/}
                        <Route path="/profile" component={Profile}/>
                        <Route path="/suff" component={Suff}/>

                        <Route path="/share" component={Dialog}/>
                        <Route exact path="/profile" component={Profile}/>

                        <Route path="/gift" component={Gift}/>
                        <Route path="/search/:from" component={Search}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/person" component={Person}/>
                        <Route path="/collect" component={Collect}/>
                        <Route path="/myworks" component={Myworks}/>
                        <Route path="/tools" component={Tools}/>
                        <Route path="/other/fangzi/:id" component={OtherDetail}/>
                        <Route path="/works" component={Works}/>
                        <Route path="/speech" component={Speech}/>
                        <Route path="/comment/:id" component={Comment}/>
                        <Redirect to="/home"/>
                    </Switch>
                    <Tab/>
                    <WithCover/>
                </div>
            </Router>
        )
    }
}
