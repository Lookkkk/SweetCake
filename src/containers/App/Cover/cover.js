import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import "./cover.less"

export default class Cover extends Component {
    constructor() {
        super();
        this.state = {
            isCover: false,
            style: {}
        }
    };

    cover = () => {
        this.setState({
            isCover: !this.state.isCover,
            style: {transform: `rotate(${!this.state.isCover * 45}deg)`},
            styleWrite: {
                transform: `translate(0,-${!this.state.isCover * 1.75}rem) 
            scale(${!this.state.isCover * 3},${!this.state.isCover * 3})`
            },
            styleCaoGao: {
                transform: `translate(0,-${!this.state.isCover * 1}rem)
            scale(${!this.state.isCover * 3},${!this.state.isCover * 3})`
            }
        });
    };

    render() {
        return (
            <div>
                <div className="plus-master">
                    <div onClick={this.cover} style={this.state.style}
                         className="tab-plus">
                        <div/>
                        <span/>
                    </div>
                    <div onClick={() => {
                        this.props.history.push('/works');
                        this.cover()
                    }} className="write" style={this.state.styleWrite}/>
                    <div onClick={() => {
                        this.props.history.push('/speech');
                        this.cover()}}
                        className="caogao" style={this.state.styleCaoGao}/>
                </div>
                {
                    this.state.isCover ? <div className="cover-all" onClick={this.cover}>

                    </div> : ""
                }
            </div>
        )
    }
}

