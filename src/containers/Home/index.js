import React, {Component} from 'react';
import ReactDOM from "react-dom"
import './index.less';
import Header from "../../components/Header/header";
import {Link} from 'react-router-dom';
import "../../components/Header/header.less";
import actions from '../../store/actions/home';
import {connect} from 'react-redux';
import ReactSwipe from "react-swipe"
import Swiper from "./Swiper/Swiper";
import HomeListNew from "./HomeListNew/HomeListNew";
import HomeListFri from "./HomeListFir/HomeListFir";
import "./index.less"
import {upMore,downRefresh,fixed} from "../../utils/util";


class Home extends Component {
    constructor(){
        super();
        this.state = {
            index:""
        }
    };
    componentDidMount() {
        this.props.getHList();
        this.props.getFriend();
        //upMore(this.refs.content,()=>console.log(1111111111111));
        downRefresh(this.refs.content,()=>console.log(222222222222));
    }

    componentWillUpdate() {

    }
    change=()=>{
        console.log(123123);

    };
    render() {
        let swipeOptions = {
            continuous: false,
            callback: (index) => {
                this.setState({index});
            }
        };
        let mySlider = this.props.slider || [];
        let style = {
            left:(this.state.index+1)*.9+"rem"
        };
        return (
            <div>
                <Header>
                    {
                        <div className="container-header">
                            <Link className="left-link" to="/search/home"/>
                            <span>焙忘录</span>
                            <Link className="right-link" to="/gift"/>
                        </div>
                    }
                </Header>
                <div className="home-content"  ref={"content"}>
                    <Swiper slider={mySlider}/>
                    <div className="list-tab" ref={"ss"}>
                        <span className={this.state.index == 0 ? "active" : ""}>最新</span>
                        <span onClick={this.change} className={this.state.index == 1 ? "active" : ""}>朋友圈</span>
                        <div className="slider" style={style}/>
                    </div>
                    <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
                        <div><HomeListNew list={this.props.list}/></div>
                        <div><HomeListFri friends={this.props.friends}/></div>
                    </ReactSwipe>
                </div>
            </div>
        )
    }
}

export default connect(state => state.home, actions)(Home);