import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import DetailHeader from "../../components/DetailHeader/detail-header.js";

let url = '';
export default class Suff extends Component {
    componentWillUpdate() {
        //this.$input
    }

    handleClick = () => {
        console.log(this.$img);
        console.log(this.$input.files);
        let url = window.URL.createObjectURL(this.$input.files[0]);
        console.log(url);
        this.$img.src = url;
        console.dir(this.$input);
        this.setState({});
    };

    render() {
        return (
            <div className="suff">
                <DetailHeader>
                    {
                        <div className="detail-header">
                            <div className="left">
                                <Link className="go_home" to="/home">首页</Link>
                            </div>
                            <div className="right">
                                <a href="javascript:;" className="love"><i className="current"> </i></a>
                                <Link className="share" to="/share"><span> </span></Link>
                            </div>
                        </div>
                    }
                </DetailHeader>
                <div className="suff-body">
                    <div className="suff-img1">
                        <img
                            src="http://beile.bakelulu.com.cn/recipe/o_1bvep6f2f14a5946d7tdsa2m0f.png?imageView2/1/w/720/h/540"
                            alt=""/>
                    </div>
                    <div className="suff-title">
                        <h2>咸蛋黄肉松贝果</h2>
                        <p>面包</p>
                        <span>
                                创建于 2017-11-21
                                <i/>
                            </span>
                    </div>
                    <div className="msg">
                        <img
                            src="http://tvax4.sinaimg.cn/crop.0.0.751.751.50/68b03333ly8fevtg4195kj20kv0kv0tt.jpg"/>
                        <h3 className="fs_16">姗胖胖</h3>
                    </div>
                    <div className="difficulty"><h4 className="fs_18">难度</h4>
                        <ul>
                            <li className="current"></li>
                            <li className="current"></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="time">
                        <div className="zero">0分钟</div>
                        <div className="twelve">20分钟</div>
                        <div className="zero">0分钟</div>
                        <span>准备时间</span>
                        <span>烘焙时间</span>
                        <span>组装时间</span>
                    </div>
                    <div className="temperature">
                        <h4>温度</h4>
                        <p>上管温度 180 度</p>
                        <p>下管温度 180 度</p>
                    </div>
                    <div className="pic">
                        <h4>分量</h4>
                        <div className="ss">x6个</div>
                        <span>-</span>
                        <span>+</span>
                    </div>
                    <div className="needs">
                        <h4>食材</h4>
                        <span>公制</span>
                        <span>英制</span>
                    </div>
                    <div className="list">
                        <ul>
                            <li>
                                <div className="left"><i></i>黄油A</div>
                                <div className="right">
                                    <span className="gram">35</span>
                                    <span className="food_unit">克</span>
                                </div>
                            </li>
                            <li className="m_b_8">
                                <div className="left"><i></i>淡奶油</div>
                                <div className="right"><span className="gram">50</span><span
                                    className="food_unit">克</span>
                                </div>
                            </li>
                            <li>
                                <div className="left"><i></i>鸡蛋</div>
                                <div className="right"><span className="gram">1</span><span
                                    className="food_unit">个</span>
                                </div>
                            </li>
                            <li>
                                <div className="left"><i></i>椰糖</div>
                                <div className="right"><span className="gram">50</span><span
                                    className="food_unit">克</span></div>
                            </li>
                            <li className="m_b_8">
                                <div className="left"><i></i>红酒</div>
                                <div className="right"><span className="gram">20</span><span
                                    className="food_unit">克</span></div>
                            </li>
                            <li>
                                <div className="left"><i></i>低筋面粉</div>
                                <div className="right"><span className="gram">70</span><span
                                    className="food_unit">克</span></div>
                            </li>
                            <li>
                                <div className="left"><i></i>泡打粉</div>
                                <div className="right"><span className="gram">2</span><span
                                    className="food_unit">克</span></div>
                            </li>
                            <li>
                                <div className="left"><i></i>杏仁粉</div>
                                <div className="right"><span className="gram">25</span><span
                                    className="food_unit">克</span></div>
                            </li>
                            <li className="m_b_8">
                                <div className="left"><i></i>提子干</div>
                                <div className="right"><span className="gram">30</span><span
                                    className="food_unit">克</span></div>
                            </li>
                            <li>
                                <div className="left"><i></i>马斯卡朋</div>
                                <div className="right"><span className="gram">80</span><span
                                    className="food_unit">克</span></div>
                            </li>
                            <li>
                                <div className="left"><i></i>红酒</div>
                                <div className="right"><span className="gram">10</span><span
                                    className="food_unit">克</span></div>
                            </li>
                            <li>
                                <div className="left"><i></i>淡奶油</div>
                                <div className="right"><span className="gram">50</span><span
                                    className="food_unit">克</span></div>
                            </li>
                            <li className="m_b_8">
                                <div className="left"><i></i>糖粉</div>
                                <div className="right"><span className="gram">12</span><span
                                    className="food_unit">克</span></div>
                            </li>
                            <li className="m_b_8">
                                <div className="left"><i></i>提子</div>
                                <div className="right"><span className="gram">6</span><span
                                    className="food_unit">个</span></div>
                            </li>
                        </ul>
                    </div>
                    <div className="now">
                        马上跟做
                    </div>
                    <div className="content_frame">
                        <div className="content">
                            <div className="step">步骤1／10</div>
                            <img src="http://beile.bakelulu.com.cn/step/o_1bvepg4fdoq7167jq3711p4nk0q.png" alt=""/>
                            <p className="description">烤箱180℃预热；黄油、淡奶油放入碗中，微波加热至黄油完全融化，用蛋抽搅拌均匀，放凉备用；</p><p
                            className="ingredients fs_14">黄油A <span className="unitFood">35克</span>,淡奶油
                            <span className="unitFood">50克</span></p></div>
                        <div className="content">
                            <div className="step">步骤2／10</div>
                            <img
                                src="http://beile.bakelulu.com.cn/step/o_1bvepirqnieqrss1t981h379iq15.png?imageView2/1/w/720/h/540"
                                alt=""/>
                            <p className="description">鸡蛋、椰糖、红酒放入料理盆中，用蛋抽混合均匀；</p><p className="ingredients fs_14"><i
                            className="icon1"></i>鸡蛋 <span className="unitFood">1个</span>,椰糖 <span className="unitFood">50克</span>,红酒
                            <span className="unitFood">20克</span></p></div>
                        <div className="content">
                            <div className="step">步骤3／10</div>
                            <img
                                src="http://beile.bakelulu.com.cn/step/o_1bvepl05dmni1di0o4r175itac1g.png?imageView2/1/w/720/h/540"
                                alt=""/>
                            <p className="description">将冷却的黄油奶油混合物倒入料理盆中，用蛋抽混合均匀；</p></div>
                        <div className="content">
                            <div className="step">步骤4／10</div>
                            <img src="http://beile.bakelulu.com.cn/step/o_1bvepp021qhl1u0f123514on3ia20.png?imageView2/1/w/720/h/540" alt=""/>
                            <p className="description">混合筛入低筋面粉和泡打粉，倒入杏仁粉，用蛋抽沿不规则的方向混合均匀，切勿画圈；再倒入提子干，用刮刀翻拌均匀；</p><p
                            className="ingredients fs_14">低筋面粉 <span
                            className="unitFood">70克</span>,泡打粉
                            <span className="unitFood">2克</span>,杏仁粉 <span className="unitFood">25克</span>,提子干 <span
                                className="unitFood">30克</span></p></div>
                        <div className="content">
                            <div className="step">步骤5／10</div>
                            <img
                                src="http://beile.bakelulu.com.cn/step/o_1bveq694po4p1ddavk018dlfhh2b.png?imageView2/1/w/720/h/540"
                                alt=""/>
                            <p className="description">面糊倒入裱花袋中，挤入模具，180度烤20分钟；<br/>烤箱上管温度 180 度<br/>烤箱下管温度 180 度</p>
                            <p className="time_frame fs_14">用时 20 分钟</p></div>
                        <div className="content">
                            <div className="step">步骤6／10</div>
                            <img src="http://beile.bakelulu.com.cn/step/o_1bveqdee54j3s63a8g19tr1cgn30.png?imageView2/1/w/720/h/540" alt=""/>
                            <p className="description">烤至表面金黄即可出炉冷却；</p></div>
                        <div className="content">
                            <div className="step">步骤7／10</div>
                            <img src="http://beile.bakelulu.com.cn/step/o_1bveqhc7j1ig6i051k061p40aie3b.png?imageView2/1/w/720/h/540" alt=""/>
                            <p className="description">黄油软化，和马斯卡彭放入料理盆中，用蛋抽混合至顺滑细腻，倒入剩下所有材料，用电动打蛋器低速打至比较硬，可以裱花的程度；</p><p
                            className="ingredients fs_14"><i className="icon1"></i>黄油B <span
                            className="unitFood">35克</span>,马斯卡朋
                            <span className="unitFood">80克</span>,红酒 <span className="unitFood">10克</span>,淡奶油 <span
                                className="unitFood">50克</span>,糖粉 <span className="unitFood">12克</span></p></div>
                        <div className="content">
                            <div className="step">步骤8／10</div>
                            <img src="http://beile.bakelulu.com.cn/step/o_1bveqlsv4acteva1vbr1jovk2q3m.png?imageView2/1/w/720/h/540" alt=""/>
                            <p className="description">夹心用的提子或葡萄剥皮去籽；</p><p className="ingredients fs_14"><i
                            className="icon1"></i>提子
                            <span className="unitFood">6个</span></p></div>
                        <div className="content">
                            <div className="step">步骤9／10</div>
                            <img src="http://beile.bakelulu.com.cn/step/o_1bveqpa4bvg4dip1bj318udf0446.png?imageView2/1/w/720/h/540" alt=""/>
                            <p className="description">蛋糕用刀子挖一个小坑，把提子填进去；用裱花袋装上星形花嘴，挤上奶酪霜，装饰切半的提子与薄荷叶，完成！</p></div>
                        <div className="content">
                            <div className="step">步骤10／10</div>
                            <img src="http://beile.bakelulu.com.cn/step/o_1bveqqhip1br4goa1rru190hu1g4h.png?imageView2/1/w/720/h/540" alt=""/>
                            <p className="description">非常油润绵密的口感，超好吃。</p></div>
                    </div>
                </div>
            </div>
    )
    }
    }
    import './suff.less';
