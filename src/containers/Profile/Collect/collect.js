import React,{Component} from 'react';
import './collect.less';
import {connect} from 'react-redux'
// import actions from '../../../store/actions/works'
import actions from '../../../store/actions/session'
 class Collect extends Component{
// componentWillReceiveProps(props){
//     let collectId=props.collects;
//
// }
    componentDidMount(){
        // let userId=this.props.id;

        let otherId=JSON.parse(localStorage.getItem('user')).id;
        // console.log(otherId,'saaaaaaaaaaaaaasssssss');
        this.props.getCollections({otherId});



    }
    render(){
         console.log(this.props);
        let collect=this.props.collections||[];
        console.log(collect
            ,'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');

        return (
            <div className="collect-top">
                {/*头部：我的收藏*/}
                <div className="left" onClick={()=>this.props.history.goBack()}><a href="#" className="back"><i>&lt;</i></a></div>
                <div className="collect-middle">我的收藏</div>


                <a className="collect-class">方子 / 教程
                  <div className="border"/>
                </a>

                {/*收藏列表*/}
                {/*<ul className="collect-lists">*/}
                    {/*<li>*/}
                        {/*<a href="">*/}
                            {/*<div className="collect-img"></div>*/}
                            {/*<div className="background"/>*/}
                        {/*</a>*/}
                        {/*<div className="collect-tittle">*/}
                            {/*<p className="big-title">咸蛋黄肉松贝果</p>*/}
                            {/*<p className="small-title">面包</p>*/}
                        {/*</div>*/}
                        {/*<div className="collect-data">*/}
                            {/*收藏 9*/}
                            {/*<span>·</span>*/}
                            {/*评论 7*/}
                        {/*</div>*/}
                    {/*</li>*/}
                {/*</ul>*/}
                <ul className="collect-lists">
                {collect.map((item,index)=>(

                        <li key={index}>
                            <a href="">
                                <div className="collect-img">
                                    <img src={item.dataCourse.course_img} alt=""/>
                                </div>
                                <div className="background"/>
                            </a>
                            <div className="collect-tittle">
                                {/*<p className="big-title">{this.props.collections.course_title}</p>*/}
                                <p className="big-title">{item.dataCourse.course_title}</p>
                                {/*<p className="small-title">面包</p>*/}
                            </div>
                            <div className="collect-data">
                                收藏 {item.dataTopic.collect_num}
                                {/*收藏 3*/}
                                <span>·</span>
                                评论 {item.dataTopic.course_count}
                                {/*评论 5*/}
                            </div>
                        </li>

                ))}
                </ul>
            </div>
        )
    }
}

export default connect(
    state=>state.user,
    actions
)(Collect);