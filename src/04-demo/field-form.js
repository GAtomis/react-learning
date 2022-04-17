/*
 * @Description: 受控表单
 * @Author: Gavin
 * @Date: 2022-04-16 11:02:48
 * @LastEditTime: 2022-04-17 02:14:24
 * @LastEditors: Gavin
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'; // ES6


class Field extends Component {

  static defaultProps = {
    label: "示例",
    type: "text"

  }
  render() {
    return (
      <div>

        <label>{this.props.label}</label>
        <input type={this.props.type} value={this.props.value} onChange={

          (e) => {
            this.props.onChangeEvent(e.target.value)

          }
        } />
      </div>

    )
  }
}



export default class App extends Component {
  state = {
    form: {
      username: localStorage.getItem('username'),
      password: localStorage.getItem('password')
    }
  }
  render() {
    return (
      <div>
        <h1>通常通信方法</h1>
        <Field label="用户名" type="text"  value={this.state.form.username} onChangeEvent={
          v => {
            console.warn(v)
            this.setState(state => ({ form: {...state.form, ...{ username: v }} }),()=>{
              localStorage.setItem("username",v)
            })
          }
        }></Field>
        <Field label="密码" type="password" value={this.state.form.password} onChangeEvent={
          v => { console.warn(v)
            this.setState(state => ({ form: {...state.form, ...{ password: v }} }),()=>{
              localStorage.setItem("password",v)
            })
           }
        }></Field>
        <button onClick={
          ()=>{
            console.warn(this.state.form);
          }

        }>登录</button><button>取消</button>
      </div>
    )
  }
}
