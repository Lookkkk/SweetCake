import React, {Component} from 'react';
import "./HomeListFir.less"
import {Link} from "react-router-dom"

export default class HomeListFri extends Component {

    // getOther=()=>{
    //   this.props.getOthers();
    // };
    render() {
        return (

            <div className="home-list-fri">
                <ul>
                    {this.props.friends?this.props.friends.length ?
                        this.props.friends.map((item, index) => (
                            <li key={index}>
                                <div className="img-box">
                                <img src={item.url} alt=""/>
                                    <div className="cover"/>
                                <div className="footer">
                                    <small><span>收藏 {item.collect_num || 0}</span></small>
                                    <small><span> - 评论 {item.comment_count || 0}</span></small>
                                </div>
                                </div>
                                <div className="title">
                                    <h4>{item.title}</h4>
                                    <span>{item.family}</span>
                                    <div className="author">
                                        <Link to={`/other/fangzi/${item.id}`}>

                                            <img src={item.user_img} alt=""/>
                                        </Link>
                                        <span className="wrap">{item.author}</span>
                                    </div
                                 >
                                </div>
                            </li>
                        )) : null:null
                    }

                </ul>
            </div>
        )
    }
}
