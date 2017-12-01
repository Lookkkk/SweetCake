import React from 'react'
import {Route, Link} from 'react-router-dom';
import Profile from "../Profile/profile";

export default class CommentInput extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            let {id, phone} = user;//获取用户输入的用户名
            let content = this.content.value;//获取用户输入的内容
            let comment = {
                "user_ids": id,
                "nickname": phone,
                "comment": content,
                "comment_time": new Date().toLocaleString(),
            };
            let detailId = this.props.detailId;
            this.props.addComment({
                detailId,
                comment
            });
            this.content.value = '';
        } else {
            alert('请先登录');
        }
    };

    render() {
        return (
            <div>
                <form className="form-horizontal"
                      onSubmit={this.handleSubmit}>{/*form-horizontal文本与输入框在一行上  ,这里用onSubmit而不是用onclick绑定,是为了检测表单的输入值的合法性,只有校验通过了才会提交*/}
                    {/*<div className="form-group">
                        <label htmlFor="username" className="control-label col-md-2">用户名</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" ref={input=>this.username=input}/>
                        </div>
                    </div>*/}
                    <div className="form-group">
                        <label htmlFor="content" className="control-label col-md-2">请输入内容</label>
                        <div className="col-md-10">
                            <textarea cols="30" rows="10" className="form-control" ref={input => this.content = input}>
                            </textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-10 col-md-offset-2">
                            <input type="submit" className="btn btn-primary" value="发布" style={{width: '100%',}}/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

