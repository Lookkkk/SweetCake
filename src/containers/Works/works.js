import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import Header from "../../components/DetailHeader/detail-header";
import {connect} from 'react-redux';
import {store} from '../../store';
import actions from '../../store/actions/works';
import {CSSTransition} from 'react-transition-group';

const Fade = ({children, ...props}) => {
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
let id;
let compile;
let speech;

class Works extends Component {
    constructor() {
        super();
        this.state = {
            title: '',//标题
            star: '',//控制点击出现几个星星,
            index: 'S',//控制点击切换人份,个数,
            part: 2,//份量
            describe: '',//描述
            file: '',
            url: '',//图片地址,
            id: '',
            show: false,//是否显示dailog弹窗,
            showWord: '',//dailog文字,
            face: '',//dailog表情,
            flag: 2,
            change:false,
        }
    }

    componentDidMount() {
        speech = localStorage.getItem('speech');
        compile = JSON.parse(localStorage.getItem('compile'));
        if (compile) {
            this.$title.value = compile.title;
            this.$title.focus();
            this.setState({...compile});
            if (compile.url) {
                this.$img.src = compile.url;
                this.$img.style.display = 'block';
            }
        }
        //this.setState({});
    };

    handleGoBack = () => {
        localStorage.removeItem('speech');
        localStorage.removeItem('compile');
        id = JSON.parse(localStorage.getItem('user'));
        id = id ? id.id : null;
        if (id&&this.state.change) {
            let works = {...this.state, id: id,change:false};
            if (this.state.title || this.state.url || this.state.describe) {
                this.setState({face: 'ヾ(◍°∇°◍)ﾉﾞ', showWord: '方子已经保存到草稿箱'});
                this.setState({show: !this.state.show});
                this.$div.style.zIndex = 4;
                setTimeout(() => {
                    this.$div.style.zIndex = -4;
                }, 1700);
                this.props.postDraft(works);
                setTimeout(() => {
                    speech ? this.props.history.push('/') : this.props.history.goBack();
                }, 1700);
            } else {
                this.setState({face: 'Ψ ♪(＾∀＾●)ﾉ', showWord: '正在返回~'});
                this.setState({show: !this.state.show});
                this.$div.style.zIndex = 4;
                setTimeout(() => {
                    this.$div.style.zIndex = -4;
                }, 1700);
                setTimeout(() => {
                    speech ? this.props.history.push('/') : this.props.history.goBack();
                }, 1700);
            }
        } else {
            this.setState({face: 'Ψ ♪(＾∀＾●)ﾉ', showWord: '正在返回~'});
            this.setState({show: !this.state.show});
            this.$div.style.zIndex = 4;
            setTimeout(() => {
                this.$div.style.zIndex = -4;
            }, 1700);
            setTimeout(() => {
                speech ? this.props.history.push('/') : this.props.history.goBack();
            }, 1700);
        }
    };


    handleSubmit = () => {
        id = JSON.parse(localStorage.getItem('user'));
        id = id ? id.id : null;
        if (id) {
            if (id && this.state.title && this.state.url && this.state.describe) {
                let works = {...this.state, id: id};
                this.props.postWorks(works);
                this.setState({face: 'ヾ(◍°∇°◍)ﾉﾞ', showWord: this.state.flag > 2 ? '哈哈,终于好了喔' : '哇,一次就发布成功了呢'});
                this.state.flag = 2;
                this.setState({show: !this.state.show});
                this.$div.style.zIndex = 4;
                setTimeout(() => {
                    this.$div.style.zIndex = -4;
                }, 1700);
                setTimeout(() => {
                    this.props.history.goBack();
                }, 1700);
            } else {
                this.state.flag++;
                this.setState({
                    face: 'ヾ(๑╹◡╹)ﾉ"',
                    showWord: !this.state.title ? '方子还没有起名字哦' : !this.state.url ? '请选择一张图片' : !this.state.star ? '请选择困难程度哦' : !this.state.describe ? '还没有添加描述哦' : ''
                });
                this.setState({show: !this.state.show});
                this.$div.style.zIndex = 4;
                setTimeout(() => {
                    this.$div.style.zIndex = -4;
                }, 1700);
            }
        } else {
            this.setState({face: 'ヾ(◍°∇°◍)ﾉﾞ', showWord: '请先登录'});
            this.setState({show: !this.state.show});
            this.$div.style.zIndex = 4;
            setTimeout(() => {
                this.$div.style.zIndex = -4;
            }, 1700);
        }
    };
//创建预览图,获取图片url,
    handleClick = () => {
        let url = window.URL.createObjectURL(this.$file.files[0]);
        this.$img.src = url;
        this.$img.style.display = 'block';
        console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');
        this.setState({url,change:true});
    };
//改变星星,分类
    select = (index) => {
        console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');
        this.setState({index,change:true});
        this.$i.style.backgroundImage = index === 'S' ? 'url(http://img.hb.aicdn.com/4176b4a923d07170d09f1759d5a80f1f62e7fce5355-obwisX_fw658)' : 'url(http://m.bakelulu.com/images/count_icon.png)';
    };

    render() {
        console.log(this.state);
        return (
            <div className="works">
                <Header>
                    {
                        <div className="works-header">
                            <a onClick={this.handleGoBack} className="works-left"><i> </i></a>
                            <span className="works-title">新建方子</span>
                            <a onClick={this.handleSubmit} className="works-right">发布</a>
                        </div>
                    }
                </Header>
                <div className="works-body">
                    <span className="works-body-title">名称:</span>
                    <input onKeyUp={() => {
                        console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');
                        this.setState({title: this.$title.value,change:true})}} ref={input => this.$title = input}
                           type="text" className="works-body-time"
                           placeholder="28个字符以内"/>
                    <div className="works-body-cover">
                        <span>封面:</span>
                        <div className="works-body-input">
                            <img ref={img => this.$img = img}
                                 src="" alt=""
                                 id="works-img"/>
                            <i> </i>
                            <input onClick={this.handleClick} type="file" ref={input => this.$file = input}/>
                        </div>
                        <p></p>
                    </div>
                    <div className="works-body-diff">
                        <p>难度:</p>
                        <div onClick={e => {
                        }} className="works-body-star">
                            {[1, 2, 3, 4, 5].map((item, index) => {
                                return (
                                    <i key={index} onClick={e => {
                                        console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');
                                        this.setState({star: item,change:true})
                                    }} className={item <= this.state.star ? 'level' : ''}> </i>
                                )
                            })}
                            <p>{'烤菜'}</p>
                        </div>
                    </div>
                    <div className="works-body-class">
                        <div className="works-body-class1">分类及份量:</div>
                        <div className="works-body-class2">
                            <span>{'烤箱菜'}</span>
                        </div>
                        <div className="works-body-class3">
                            <div className="tabs-header">
                                <a onClick={() => this.select('S')}
                                   className={this.state.index === 'S' ? 'coursePack course active' : 'coursePack course'}><span>按人份</span></a>
                                <a onClick={() => this.select('K')}
                                   className={this.state.index === 'K' ? 'coursePack pack active' : 'coursePack pack'}><span>按个数</span></a>
                            </div>
                        </div>
                        <div className="works-body-class4">
                            <i ref={i => this.$i = i}> </i><span>{`x${this.state.part}${this.state.index === 'S' ? '人份' : '个'}`}</span>
                            <div>
                                <div onClick={() => {
                                    this.setState({part: --this.state.part})
                                }} className='works-body-left'>-
                                </div>
                                <div onClick={() => {
                                    this.setState({part: ++this.state.part})
                                }} className='works-body-right'>+
                                </div>
                            </div>
                        </div>
                        <div className="works-body-class5"></div>
                    </div>
                    <div className="works-add"></div>
                    <div className="works-abs">
                        <span>方子摘要:</span>
                        <textarea onKeyUp={() => {
                            console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');
                            this.setState({describe: this.$text.value,change:true})
                        }} ref={textarea => this.$text = textarea}
                                  placeholder="对这个方子有什么想介绍或者想补充的吗">{null}</textarea>
                        <div></div>
                    </div>
                    <div className="works-footer">
                        <div className="works-footer1">
                            <span>添加标签</span>
                            <i>原创></i>
                        </div>
                        <div className="works-footer2">
                            <span>设置权限</span>
                            <i>我要上首页></i>
                        </div>
                        <div className="works-footer3">
                            <span>同步到</span>
                            <i> </i>
                            <div></div>
                        </div>
                        <div id="works-button">
                            <div onClick={this.handleSubmit}>发布</div>
                        </div>
                    </div>
                </div>
                <Fade in={this.state.show}>
                    <div
                        ref={div => this.$div = div}
                        className="works-dailog">{this.state.face}<br/>{this.state.showWord}</div>
                </Fade>
            </div>
        )
    }
}

export default connect(store => store.user, actions)(Works);
import './works.less';
