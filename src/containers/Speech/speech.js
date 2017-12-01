import React, {Component} from 'react';
import Header from "../../components/Header/header";
import {NavLink, Route, Link} from "react-router-dom"
import "./speech.less"
import {connect} from "react-redux"
import {store} from '../../store';
import actions from '../../store/actions/works';

class Speech extends Component {
    constructor() {
        super();
        this.state = {
            compile: '',//选中要编辑的草稿
            index:'',
        }
    }

    componentDidMount() {
        localStorage.setItem('speech', 'speech');
        let user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).id : '';
        user ? this.props.getUser(user) : null;
    }

    //编辑草稿
    handleCompileDraft = () => {
        //this.props.compileDraft(this.state.compile);
        localStorage.setItem('compile', JSON.stringify(this.state.compile));
        this.props.history.push('/works');
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <Header>
                    <Link to={'/home'} className="other-back"/>
                    <span className="middle">草稿箱</span>
                    <a onClick={this.handleCompileDraft} className="speech-right"/>
                </Header>
                <div className="speech">
                    <ul>
                        {this.props.draft.length ?
                            this.props.draft.map((item, index) => (
                                <li key={index} onClick={() => {
                                    this.setState({compile: item, index});
                                }} className="active">
                                    <img src={item.url} alt=""/>
                                    <div className={index === this.state.index ? "footer active" : 'footer'}>
                                        <div className="footer-title">
                                            <h4>{item.title}</h4>
                                            <span>{item.describe}</span>
                                            {/* <small><span>收藏 {item.collect || 0}</span></small>
                                            <small><span> - 评论 {item.comment_count || 0}</span></small>*/}
                                        </div>
                                    </div>
                                </li>
                            )) : null
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(store => store.user, actions)(Speech);