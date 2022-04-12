/*
 * @Description: 属性
 * @Author: Gavin
 * @Date: 2022-04-12 18:26:45
 * @LastEditTime: 2022-04-12 19:03:46
 * @LastEditors: Gavin
 */
import React, { Component } from 'react'
import Navbar from './components/Navbar'
export default class props extends Component {
  render() {
    return (
      <div>props

        <Navbar title="我的标题" isShow={true}></Navbar>
      </div>
    )
  }
}

