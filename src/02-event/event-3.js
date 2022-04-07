/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-07 16:01:16
 * @LastEditTime: 2022-04-07 16:01:16
 * @LastEditors: Gavin
 */
/*
 * @Description:事件绑定2
 * @Author: Gavin
 * @Date: 2022-04-07 11:14:44
 * @LastEditTime: 2022-04-07 15:38:14
 * @LastEditors: Gavin
 */


import React, { Component } from 'react'

export default class event extends Component {
  a="变量A"
  render() {
    return (
      <div>
        <input />
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
    console.warn(123399,this);


  }
  ordinaryClick(){

    console.warn(123399,this);

  }
}
