import React from 'react'

export default class CommentList extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            user_ids: '',
            comment: '',
            coment_time: '',
            head_icon: '',
            nickname: '',
        }
    }

    componentDidMount() {
        let {user_ids, comment, coment_time, head_icon, nickname} = this.props.comment;
        let user = JSON.parse(localStorage.getItem('user'));
        let id = user ? user.id : '';
        this.setState({user_ids, comment, coment_time, head_icon, nickname, id});
    }

    handleDelete = () => {
        console.log(this.props);
        console.log(this.props.commentId);
        this.props.delComment(this.props.commentId);
        this.setState({});
    };

    render() {
        console.log(this.props);
        //localStorage.setItem('userComment',JSON.stringify(this.props.comment));
        //let comment=localStorage.getItem('userComment');
        //let getUserComment=JSON.parse(comment);
        //console.log(getUserComment);
        return (
            <li className="list-group-item" style={{width: '100%', height: '.75rem'}}>
                {this.state.nickname}:{this.state.comment}
                <button onClick={this.handleDelete} className="btn btn-danger"
                        style={{padding: '0 0', display: this.state.id == this.props.id ? 'block' :
                            'none'}}>
                    删除
                </button>
                <span className="pull-right">{this.state.coment_time}</span>
            </li>
        )

    }
}

