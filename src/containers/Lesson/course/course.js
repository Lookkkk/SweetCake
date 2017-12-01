import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom'
import './course.less';
import Detail from '../../Detail/detail'
import {HashRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import actions from '../../../store/actions/details'
import {connect} from 'react-redux'
let num;
let ary = [1, 2, 3, 4, 5];
class Course extends Component {
    /*handleClick=(e,index)=>{
        e.preventDefault;
        this.props.fetchDetailLists(index)
    };*/
    render() {

        return (
            <ul className="course-list">
                {
                    this.props.lessons ? (
                        this.props.lessons.map((item, index) => {
                            num = Math.round(Math.random() * 4 + 1);
                            return (
                                <li key={index}>
                                <div className="content">
                                    {/*跳转详情页*/}
                                    <Link to={`/lesson/course/${index}`}>
                                        <div className="img">
                                            <img src={item.url} alt=""/>
                                            <div className="data">
                                                收藏:{item.collect}
                                                <span> · </span>
                                                评论:{item.comment}
                                            </div>
                                        </div>
                                        <div className="title">{item.title}</div>
                                        <div className="Info">
                                            {
                                                ary.map((item, index) => {
                                                        return <i key={index}
                                                                  className={item < num ? 'level' : ''}> </i>
                                                    }
                                                )
                                            }

                                        </div>
                                    </Link>
                                </div>
                            </li>)
                        })
                    ) : null
                }

            </ul>

        )
    }
}
export default connect (state=>state.detail, actions)(Course)

