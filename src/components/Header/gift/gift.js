import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Gift extends Component {
    render() {
        return (
            <div className="gift-page">
                <div className="gift-container">
                    <div className="gift-back">
                        <Link to="/"></Link>
                        <div>兑换更多课程</div>
                    </div>
                    <div className="gift-content">
                        <div className="gift-box">
                            <p>请输入兑换码</p>
                            <input className="gift-word" type="text"/>
                            <input className="gift-button" type="button" value="确定"/>
                        </div>
                    </div>
                </div>
                <span className="gift-footer">还没有兑换码？</span>
                <span>关注微博@焙忘录的主页君 以及APP内各种活动，</span>
                <span>就有机会第一时间获得兑换码哦~</span></div>
        )
    }
}
import './gift.less';