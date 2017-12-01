import React, {Component} from 'react';
import './myworks.less'
import {connect} from 'react-redux';
import actions from '../../../store/actions/works';
import {CSSTransition} from 'react-transition-group';

const Fade = ({children, ...props}) => {
    console.log({...props});
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

class Myworks extends Component {
    constructor() {
        super();
        this.state = {
            works: [],
            show: false,
        }
    }

    handleClose = (e) => {
        e.preventDefault();
        if (this.state.show) {
            setTimeout(()=>this.$div.style.display = 'none',500);
            this.setState({show: !this.state.show});
            this.$div.style.opacity = 0.01;
        }
        /*this.$div.style.display = 'none';
        this.setState({show: !this.state.show});
        this.$div.style.opacity = 0.01;*/
    };
    handleClick = (e) => {
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
        e.preventDefault();
        this.$div.style.display = 'block';
        setTimeout(() => this.$div.style.opacity = 1);
        this.setState({show: !this.state.show});
    };

    componentDidMount() {
        console.log(JSON.parse(localStorage.getItem('user')));
        let user = JSON.parse(localStorage.getItem('user')).id;
        this.props.getUser(user);
    }

    componentWillReceiveProps(props) {
        console.log(props.works);
        this.setState({works: props.works});
    }

    render() {
        console.log(this.props);
        return (
            <div className="works-top" onClick={this.handleClose}>
                <div className="left" onClick={() => this.props.history.goBack()}><a href="#"
                                                                                     className="back"><i>&lt;</i></a>
                </div>
                <div className="collect-middle">我的作品</div>

                <div className="list-works">
                    <ul>
                        {this.state.works.map((item, index) => (
                                <li key={index} className="list">
                                    <div className="item">
                                        <a href="">
                                            <div className="picture">
                                                <div onClick={this.handleClick}
                                                     style={{backgroundImage: item.url?`url(${item.url})`:'url("http://img.hb.aicdn.com/3eeedfcbcfaccc4368e54524b8a67368ccd2918a2572f-7XKYH4_fw658")'}} className="img"/>
                                            </div>
                                        </a>
                                    </div>
                                    <Fade in={this.state.show}>
                                        <div ref={div => this.$div = div} className="works-big">
                                            <div className="works-left">
                                                <img src={this.props.user_img}></img>
                                                <span>{this.props.author}</span>
                                            </div>
                                            <div className="works-right">
                                                {this.props.create_time}
                                            </div>
                                            <div className="works-img">
                                                <img src={item.url}
                                                     alt=""/>
                                            </div>
                                            <div className="works-footer">
                                                <div className="works-footer1">{item.title}</div>
                                                <div className="works-footer2">{item.describe}</div>
                                            </div>
                                        </div>
                                    </Fade>
                                </li>
                            )
                        )}
                    </ul>
                    <p onClick={this.handleClose} className="end">没有更多作品了~</p>
                </div>
            </div>
        )
    }
}

export default connect(state => state.user, actions)(Myworks);