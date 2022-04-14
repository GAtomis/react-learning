/*
 * @Description: 受控的组件
 * @Author: Gavin
 * @Date: 2022-04-13 13:03:37
 * @LastEditTime: 2022-04-13 16:19:27
 * @LastEditors: Gavin
 */
import React, { Component } from 'react'
import Navbar from '../03-other/components/Navbar'

export default class contral extends Component {
  state = {
    value: '受控的组件'
  }
  render() {
    return (
      <div>
        <h1>表单操作</h1>
      
        <Navbar title={this.state.value}></Navbar>
        {this.state.value}<input defaultValue={this.state.value} value={this.state.value} type="text" onChange={(e) => {
        this.setState({

          value: e.target.value
        })
      }}></input>
        <button onClick={(e) => {
          this.setState({

            value: ''
          })
        }}>重置</button>
      </div>
    )
  }
}
