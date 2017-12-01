import React, {Component} from 'react';
import "./fangzi.less"
import {connect} from 'react-redux'
import actions from '../../../store/actions/getOthers'
class Fangzi extends Component {

    render() {
        console.log(this.props,'dddddddddddddddddddddddd');
        return (
            <div className="fangzi">
                <ul>
                    <li>
                        <div className="img-box">
                            <img src={this.props.friends.url} alt=""/>
                            <div className="cover"/>
                            <div className="footer">
                                <small><span>收藏 {this.props.friends.collect_num}</span></small>
                                <small><span> - 评论 {this.props.friends.collect_num}</span></small>
                            </div>
                        </div>
                        <div className="title">
                            <h4>{this.props.friends.title}</h4>
                            <span>{this.props.friends.family}</span>
                            <div className="author">
                                <img src={this.props.friends.user_img} alt=""/>
                                <span className="wrap">{this.props.friends.author}</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="footer-footer">
                    <p>对，我就是传说中的底线</p>
                    <p>——————————————</p>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.getOthers,actions
)(Fangzi)