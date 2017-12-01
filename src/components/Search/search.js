import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {getSearch} from '../../api/search';
import {connect} from 'react-redux';
import Recipe from "./Recipe/recipe";
import actions from "../../store/actions/search";
import {CSSTransition} from 'react-transition-group';

const Fade = ({children, ...props}) => {
    //console.log({...props});
    return (
        <CSSTransition
            {...props}
            timeout={1200}
            classNames="fade"
        >
            {children}
        </CSSTransition>
    )
};
let star = ['一', '二', '三', '四', '五'];
let recent = [];
let url = '';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: {
                data: [],
            },
            recent: [],
            flag: true,
            show: false,
        }
    };

    componentDidMount() {
        getSearch().then(data => {
            this.setState({search: data})
        });
        this.state.recent = (JSON.parse(localStorage.getItem('search')) || []);
    }

    handleClick = (e) => {
        let value = this.$input.value;
        if (value) {
            recent = (JSON.parse(localStorage.getItem('search')) || []);
            e.preventDefault();
            recent.push(value);
            localStorage.setItem('search', JSON.stringify(recent));
            if (this.props.location.pathname === '/search/home' || this.props.location.pathname === '/search/lesson') {
                this.props.history.push(`${this.props.match.url}/${this.$input.value}`)
            } else {
                this.props.history.replace(`${this.props.match.url}/${this.$input.value}`);
            }
            //this.props.history.push(`${this.props.match.url}/${this.$input.value}`);
            this.props.searchFood({searchFood: this.$input.value, limit: 3});

        } else {
            this.setState({show: !this.state.show})
        }

    };

    componentWillReceiveProps(props) {
        //console.log(props);
        //console.log(props.keyword);
        this.state.recent = (JSON.parse(localStorage.getItem('search')) || []);
    }

    handleKeyUp = (e) => {
        //console.log(e.keyCode);
        let keyCode = e.keyCode;
        if (e.target === this.$input && keyCode === 13) {
            this.handleClick(e);
        }
    };
    handleFocus = () => {
        !(this.props.location.pathname === '/search/home' || this.props.location.pathname === '/search/lesson') ? this.props.history.goBack() : null;
    };

    render() {
        //console.log(this.props.match);
        url = this.props.location.pathname;
       // console.log(this.props);
        return (
            <div className="home-search" onKeyUp={this.handleKeyUp}>
                <div className="search-header">
                    <div onClick={() => {
                        this.props.history.goBack();
                        //console.log(this.props.match);
                    }} className="search-back">
                        <i> </i>
                    </div>
                    <div className="search-content">
                        <i> </i>
                        <input onFocus={this.handleFocus} ref={input => this.$input = input} type="text"
                               placeholder="搜索"
                               className="search-input"/>
                        <div onClick={() => {
                            this.$input.value = '';
                            this.$input.focus();
                        }} className="search-clear">{null}
                        </div>
                    </div>
                    <input onClick={this.handleClick} type="submit" value="搜索" className="search-submit"/>
                </div>
                {
                    url === '/search/home' || url === '/search/lesson' ? <div className="search-catalog">
                        <div className="search-record">
                            <div className="record-catalog">
                                <span>最近搜索</span>
                                <a onClick={() => {
                                    localStorage.removeItem('search');
                                    this.setState({
                                        recent: [],
                                    });
                                }} href="javascript:;">清空</a>
                            </div>
                            <ul className="record-list">
                                {
                                    this.state.recent.map((item, index) => (
                                        <li onClick={() => {
                                            this.$input.value = item;
                                            this.$input.focus();
                                        }} key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        {
                            url === '/search/home' ?
                                <div className="search-classify">
                                    <div className="classify-catalog">
                                        <span>类别</span>
                                    </div>
                                    <ul className="classify-list">
                                        {
                                            this.state.search.data.map((item, index) => (
                                                <li key={index}><a
                                                    onClick={() => {
                                                        this.props.history.push(`${this.props.match.url}/${index + 1}class`);
                                                    }
                                                    }>{item.category_name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div> : null}
                        <div className="star-level">
                            <div className="star-diff">
                                <span>难度</span>
                            </div>
                            <ul className="star-list">
                                {
                                    star.map((item, index) => (
                                        <li onClick={() => {
                                            //this.starClick(index);
                                            this.props.history.push(`${this.props.match.url}/${index + 1}star`)
                                        }} key={index}>{item + '星'}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div> : null
                }
                {/*<Route path="/search/:from/:id" searchList={this.props.searchList} component={Recipe}/>*/}
                <Route path="/search/:from/:id" component={Recipe}/>
                <Fade in={this.state.show}>
                    <div className="search-dailog">请输入关键词</div>
                </Fade>
            </div>

        )
    }
}

import './search.less';

export default connect(state => state.search, actions)(Search);