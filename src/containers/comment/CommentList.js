import React from 'react'
import Comment from "./Comment";

export default class CommentList extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        console.log(this.props.comments,'kkkkkkkkkkkkkkkkkkkkkkkkk');
        return (
            <ul className="list-group">
                {
                    this.props.comments.map((item, index) => (
                        <Comment id={item.user_ids} key={index} commentId={index} comment={item} delComment={this.props.delComment}/>))
                }
            </ul>
        )

    }
}
