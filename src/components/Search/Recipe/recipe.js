import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from "../../../store/actions/search";

let ary = ['烤箱菜', '饼干曲奇', '面包', '蛋糕', "挞、派", "布丁", "冰淇淋", "马卡龙", "巧克力、糖果", "裱花翻糖", "中式点心", "酸奶米酒", "其它"];
let star = ['一星难度', '二星难度', '三星难度', '四星难度', '五星难度'];
let reg = /^(\d+)(star|class)$/;

class Recipe extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            list: [],
            flag: true,//判读是否只显示3条,
            sort: '类别',
            data: null,//是否搜索到内容
            headline: '',//标题
            id: '',//搜索的第几个选项
        }
    }

    componentDidMount() {
        console.log(this.props);
        //获取当前路径参数,
        this.state.title = this.props.match.params.id || '';
        //如果是点击选项进来的,
        if (reg.test(this.state.title)) {
            this.state.sort = reg.exec(this.state.title)[2];
            console.log(reg.test(this.state.title)[2]);
            this.state.id = reg.exec(this.state.title)[1];
            this.state.headline = this.state.sort === 'star' ? star[reg.exec(this.state.title)[1] - 1] : ary[reg.exec(this.state.title)[1] - 1];
            this.state.sort === 'class' ? this.props.searchIndex({index: this.state.id - 1}) : this.props.getStarFood(this.state.id - 1);

        }

        //判读是不是点击星级
        /*reg.test(this.state.title) ? this.state.sort = 'star' : 'class';
        this.setState({title: +this.state.title ? this.state.title : '', flag: true});*/
        this.setState({});
    }


//组件点击发现更多,会发送dispatch接收新的属性,利用flag跟正常刷机,跳转发送dispatch接收新的属性做判断,如果是点击加载更多,展示更多的数据,不是点击更多,每次最多加载3条,
    shouldComponentUpdate(props, state) {
        if (this.state.sort === 'class') {
            state.flag ? this.state.list = [...props.searchList] : this.state.list = [...state.list, ...props.searchList];
        }else if (this.state.sort === 'star') {
            console.log(props);
            this.state.list = props.star.data?props.star.data.find_recipe:[];
        }else{
            this.state.list=[...props.searchList];
        }

        /*this.state.sort === 'class' ?this.state.list=props.searchList:this.state.list=props.star.data.find_recipe;
        state.flag ? this.state.list = [...props.searchList] : this.state.list = [...state.list, ...props.searchList];
        this.state.data = this.props.star;*/
        return true;
    }

    render() {
        return (
            this.state.list.length || this.state.data ?
                <div className="recipe">
                    {this.state.headline &&this.state.flag? <div className="recipe-header">{this.state.headline}</div> : null}
                    <div className="recipe-body">
                        <p>{this.state.sort==='star'?'教程':'发现'}</p>
                        <ul className="recipe-list">
                            {
                                this.state.list.map((item, index) => (
                                    <li key={index} className="">
                                        <Link to={`/lesson/course/${index}`}>
                                            <img src={item.recipe_img} alt=""/>
                                            <div className="recipe-info">
                                                <span className="recipe-title">{item.recipe_name}</span>
                                                <span className="recipe-msg">{item.recipe_info}</span>
                                                <span className="recipe-date">{item.author} {item.create_time}</span>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="recipe-find">
                        <a onClick={() => {
                            this.props.searchFood({searchFood: '', limit: 20});
                            this.state.flag = false;
                        }}>
                            <i className="recipe-left"> </i>
                            <span>{this.state.sort==='star'?'查看更多教程':'发现更多'}</span>
                            <i className="recipe-right"> </i>
                        </a>
                    </div>
                </div> :
                <div className="recipe-false">
                    <i> </i>
                    <span>还没有这样的方子哦，试试其它的关键字吧～</span>
                </div>
        )
    }
}

export default connect(state => state.search, actions)(Recipe);
import './recipe.less';