/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-05 10:52:46
 * @LastEditTime: 2022-04-06 12:51:51
 * @LastEditors: Gavin
 */
import React, { Component } from 'react'
import './css/index.css'
export default class styleComponents extends Component {
  render() {
    const objStyle = { background: "#000" }
    return (
      <div>
        {/* 三种方式 */}
        <div style={objStyle}>{window.location.origin}</div>
        {/* 官方推荐行内样式 */}
        <div style={{ background: 'red' }} >{window.location.origin}</div>
        <div className="active" >{window.location.origin}</div>

      </div>

    )
  }
}
