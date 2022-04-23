/*
 * @Description: 生命周期钩子函数
 * @Author: Gavin
 * @Date: 2022-04-22 09:35:54
 * @LastEditTime: 2022-04-23 11:07:42
 * @LastEditors: Gavin
 */
import { extend } from 'lodash';
import React, { Component } from 'react'

export default class lifeCycle extends Component {
  componentDidMount() {
    // dom已挂载,只执行一次,推荐数据挂载在这里做
    console.warn("已经挂载", document.getElementById('hook'));
  }
  // react17已被列如不够安全hook
  UNSAFE_componentWillMount() {
    console.warn("组件渲染前");
  }
  state = {
    name: "--"
  }
  //react17已被列如不够安全hook
  UNSAFE_componentWillUpdate(e) {
    //将要更新数据的钩子,拿不到最新的dom
    console.warn("数据更新前", e);
  }
  /**
   * @description: 方法说明....
   * @param {*} props 老属性
   * @param {*} state 老状态
   * @return {*}
   * @Date: 2022-04-22 12:51:27
   */
  componentDidUpdate(preProps, perState) {

    console.warn("数据更新后", preProps, perState);
  }
  shouldComponentUpdate(nextProps, nextState) {
    //是否更新组件 通过返回值判断 放行或阻止更新
    return JSON.stringify(this.state) !== JSON.stringify(nextState)
  }

  render() {
    console.warn("正在渲染");
    return (
      <div id="hook">life-cycle-hook{this.state.name}
        <button onClick={() => {
          this.setState({ name: 'zhounan' })

        }}>更新
          </button>
          <Child name={this.state.name}></Child>

      </div>
    )
  }
}
class Child extends Component {
  state={
    title:''
  }
  componentWillReceiveProps(perProps, perState) {
      console.warn("父组件改变时",perProps,perState);
      //监听父组件的state 可以拿到父组件最新的更改数据
      this.setState({
        title:perProps.name
      })
      
  }

  render() {
    return (

      <div>{this.state.title}</div>
    )
  }
}
