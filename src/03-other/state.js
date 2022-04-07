/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-07 23:51:16
 * @LastEditTime: 2022-04-08 00:34:36
 * @LastEditors: Gavin
 */




import React, { Component } from 'react'

export default class event extends Component {
  a = "变量A"
  myRef = React.createRef()
  state={
    isText:0
  }
  render() {
    let text = "tende"
    return (
      <div>
        <input ref={this.myRef} />
        <button onClick={this.handleClick}>add</button>
        <h1>{this.state.isText?text:'0'}</h1>

      </div>
    )
  }
  handleClick = () => {
    console.warn(123399, this.myRef.current);
    this.setState({isText:!this.state.isText})



  }
  ordinaryClick() {

    console.warn(123399, this);

  }
}
