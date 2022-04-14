/*
 * @Description: 子传父
 * @Author: Gavin
 * @Date: 2022-04-13 19:43:02
 * @LastEditTime: 2022-04-15 00:44:50
 * @LastEditors: Gavin
 */
import React, { Component } from 'react'
class Navbar extends Component {
  render() {
    return (
      <div style={{ background: "red" }}>Navbar

        <button onClick={()=>{
          this.props.handleHidden(true)


        }}>隐藏</button>


      </div>
    )
  }
}



class Side extends Component {
  render() {
    return (
      <div style={{ background: 'blue' }}>
        {!this.props.model&&<ul>

          <li>12332131</li>
          <li>12332131</li>
          <li>12332131</li>
          <li>12332131</li>
          <li>12332131</li>
          <li>12332131</li>
        </ul>}</div>
    )
  }
}

export default class child extends Component {
  state = {
    isShow: false
  }
  render() {
    return (
      <div><Navbar handleHidden={k => (this.setState({ isShow: k }))}></Navbar>


        <Side model={this.state.isShow}></Side></div>
    )
  }
}
