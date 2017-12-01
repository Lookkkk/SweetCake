import React from 'react'
/*import 'bootstrap/dist/css/bootstrap.css'*/
import CommentInput from './CommentInput.js'
import CommentList from "./CommentList";
import {connect} from "react-redux";
import actions from '../../store/actions/details';

class CommentApp extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            comments: [],
            /*[{id: 1, username: '娜可露露', content: '这个技能get到了', createAt: new Date()}, {
                id: 2,
                username: '李白',
                content: '一人我饮酒醉',
                createAt: new Date()
            }]*/
        }
    }

    componentDidMount() {
        this.props.fetchDetailLists(+this.props.match.params.id);
        this.setState({id:+this.props.match.params.id});
    }

    componentWillReceiveProps(props) {
        console.log(props);
        let comments = props.dataComment.commentList;
        this.setState({comments});
    }

    /*addComment = (comment) => {
        //console.log(comment);
        comment.id = comment.username;
        comment.createAt = new Date();
        this.setState({
            comments: [...this.state.comments, comment].reverse()
        });
    };*/
    delComment = (id) => {
        /*this.setState({
            comments: this.state.comments.filter((item) => item.id !== id)
        })*/
        console.log(this.props);
        this.props.delComment({detailId:this.state.id,commentId:id});
    };
    render() {
        //console.log(this.props);
        return (
            <div className="container"
                 style={{position: 'fixed', top: '.13rem', bottom: '.49rem', overflowY: 'scroll'}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        {/*.panel.panel-default*/}
                        <div className="panel panel-default">
                            {/*<div className="panel-heading">
                                <h3 className="text-center">评论框</h3>
                            </div>*/}
                            <div className="panel-footer">
                                <CommentInput detailId={+this.props.match.params.id} addComment={this.props.addComment}/>
                            </div>
                            <div className="panel-body">
                                <CommentList comments={this.state.comments}
                                             delComment={this.delComment}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state.detail, actions)(CommentApp);

