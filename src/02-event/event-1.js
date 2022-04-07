/*
 * @Description: 事件
 * @Author: Gavin
 * @Date: 2022-04-06 13:05:16
 * @LastEditTime: 2022-04-07 10:47:01
 * @LastEditors: Gavin
 */

import React, { Component } from 'react'

export default class event extends Component {
  render() {
    return (
      <div>
        <input />
        <button onClick={() => {
          console.log("出发");
        }}>add</button>
        <button onClick={this.handleClick}>add2</button>
      </div>
    )
  }
  handleClick = () => {

    console.warn(1233);


  }
}
