/*
 * @Description: 插槽
 * @Author: Gavin
 * @Date: 2022-04-21 01:37:51
 * @LastEditTime: 2022-04-21 10:04:21
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
          </Item>


      </div>
    )
  }
}
class Item extends Component{
  render(){
    return (<div>{this.props.children}</div>)
  }

}
