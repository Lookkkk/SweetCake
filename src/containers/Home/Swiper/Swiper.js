import React from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import "./Swiper.less"

export default class Swiper extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        let swipeOptions = {
            continuous: true,
            auto: 1400,
            callback: (index) => {
                this.setState({index});
            }
        };
        return (
            <div className="home-swiper">
                {
                    this.props.slider.length ? <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
                            {
                                this.props.slider.map((item, index) => (
                                    <div key={index} className="slider">
                                        <img src={item.url} alt=""/>
                                        <div className="slider-cover">
                                            <h3>{item.desc}</h3>
                                            <p>共有{item.id||0}个方子</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </ReactSwipe>
                        : null
                }
                <div className="dots">
                    {
                        this.props.slider.length ?this.props.slider.map((item,index)=>(
                            <span key={index} className={this.state.index == index?"active":""}></span>
                        )):""
                    }
                </div>
            </div>
        );
    }
}
