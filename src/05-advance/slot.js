/*
 * @Description: 插槽
 * @Author: Gavin
 * @Date: 2022-04-21 01:37:51
 * @LastEditTime: 2022-04-21 11:23:40
 * @LastEditors: Gavin
 */
import React, { Component } from 'react'

export default class slot extends Component {
  render() {
    return (
      <div>
        <Item>
          {/* {全部插槽} */}
          <h1>slot1</h1>
          <h1>slot2</h1>
          <h1>slot3</h1>
        </Item>
        <item2>
          疼的的的
        </item2>


      </div>
    )
  }
}
class Item extends Component {
  render() {
    const [frist, send, pend] = this.props.children
    return (<div>{
      frist
    }{send}{pend}</div>)
  }

}
class Item2 extends Component {
  render() {
    return (<div>{this.props.children}</div>)
  }

}
