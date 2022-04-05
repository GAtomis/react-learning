/*
 * @Description: 子父组件嵌套
 * @Author: Gavin
 * @Date: 2022-04-05 00:09:32
 * @LastEditTime: 2022-04-05 10:46:04
 * @LastEditors: Gavin
 */
import React, { Component } from 'react'

//孙子组件
const Grandson=()=><div>我是孙子组件</div>
//子组件
const ChildFoot = () => (<footer>我是底部子组件<Grandson></Grandson></footer>)


export default class ChildComponents extends Component {
  render() {
    return (
      <div>child-components



        <ChildFoot></ChildFoot>
      </div>

    )
  }
}
