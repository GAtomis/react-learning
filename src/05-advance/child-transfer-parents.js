/*
 * @Description: 子传父
 * @Author: Gavin
 * @Date: 2022-04-13 19:43:02
 * @LastEditTime: 2022-04-14 10:42:18
 * @LastEditors: Gavin
 */
import React, { Component } from 'react'
class Navbar extends Component {
  render() {
    return (
      <div style={{background:"red"}}>Navbar</div>
    )
  }
}

export default class child extends Component {
  render() {
    return (
      <div><Navbar></Navbar></div>
    )
  }
}
