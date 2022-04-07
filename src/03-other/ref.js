/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-07 17:02:51
 * @LastEditTime: 2022-04-07 18:50:15
 * @LastEditors: Gavin
 */




import React, { Component } from 'react'

export default class event extends Component {
  a="变量A"
  myRef=React.createRef()
  render() {
    return (
      <div>
        <input ref={this.myRef} />
        <button onClick={() => {
          console.log("出发",this.a);
        }}>add</button>
        <button onClick={this.handleClick}>箭头函数</button>
        <button onClick={this.ordinaryClick.bind(this)}>bind普通函数</button>
        <button onClick={this.ordinaryClick}>普通函数</button>
      </div>
    )
  }
  handleClick = () => {
    console.warn(123399,this.myRef.current);



  }
  ordinaryClick(){

    console.warn(123399,this);

  }
}
