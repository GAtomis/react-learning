/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-17 02:15:45
 * @LastEditTime: 2022-04-17 12:12:35
 * @LastEditors: Gavin
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'; // ES6


class Field extends Component {
  state={
    value:""
  }
  static defaultProps = {
    label: "示例",
    type: "text"

  }
  clearForm=()=>{

    this.setState({value:""})
  }
  setValue=(v)=>{
    this.setState({
      value:v
    })
  }
  render() {
    return (
      <div>

        <label>{this.props.label}</label>
        <input type={this.props.type} value={this.state.value} onChange={

          (e) => {
          this.setState(state=>({value:e.target.value}))

          }
        } />
      </div>

    )
  }
}



export default class App extends Component {
  userRef=React.createRef()
  passwordRef=React.createRef()
  render() {
    return (
      <div>
        <h1>通常通信方法</h1>
        <Field label="用户名" type="text" ref={this.userRef}  ></Field>
        <Field label="密码" type="password"  ref={this.passwordRef}></Field>
        <button onClick={
          ()=>{
            console.warn(this.userRef.current.state.value,this.passwordRef.current.state.value);
          }

        }>登录</button><button>取消</button>
      </div>
    )
  }
}
