import React,{Component} from 'react';
import './tools.less'
import {Link} from 'react-router-dom'
export default class Tools extends Component{
    render(){
        return (
          <div className="tools-body">
              <div className="tools-top">
                  <div className="left"><Link to={'/home'} className="back"><i>&lt;</i></Link></div>
                  <div className="tools-middle">工具</div>
              </div>

              {/*转换器*/}
              <div className="props-conversion">
                  <div className="propsName">
                      <i>X</i>
                      <span>道具转换器</span>
                  </div>

                  <div className="content">
                      {/*左边转换器*/}
                      <div className="left">
                          <div className="prop_border">
                              <div className="box">
                                  <input type="hidden" className="t"/>
                                  <input type="hidden" className="area"/>
                                  <div className="size">
                                      <span className="X">8</span>
                                      X
                                      <span className="Y">8</span>
                                      <span className="unit">厘米</span>
                                  </div>
                                  <div className="border">
                                      <i className="cure"/>
                                  </div>
                                  <div className="number">
                                      <span className="num">1</span>
                                      个
                                  </div>

                              </div>
                          </div>
                      </div>

                      {/*右边转换器*/}
                      <div className="right">
                          <div className="prop_border">
                              <div className="box">
                                  <input type="hidden" className="t"/>
                                  <input type="hidden" className="area"/>
                                  <div className="size">
                                      <span className="Y">8</span>
                                      <span className="unit">厘米</span>
                                  </div>
                                  <div className="border">
                                      <i className="cure"/>
                                  </div>
                                  <div className="number">
                                      <span className="num">1</span>
                                      个
                                  </div>

                              </div>
                          </div>
                      </div>

                      {/*相互转换按钮*/}
                      <div className="switch">
                          <i className="btn"/>
                      </div>

                      {/*转换箭头*/}
                      <div className="arrow">
                          <i className="change"/>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}
