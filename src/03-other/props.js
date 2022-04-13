/*
 * @Description: 属性
 * @Author: Gavin
 * @Date: 2022-04-12 18:26:45
 * @LastEditTime: 2022-04-13 00:16:34
 * @LastEditors: Gavin
 */
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
export default class props extends Component {
  render() {
    const obj={bg:"red",isShow:true}
    return (
      <div>

        <Navbar title="我的标题" isShow={true}></Navbar>
        {/* {简写} */}
        <Sidebar {...obj}></Sidebar>
      </div>
    )
  }
}

