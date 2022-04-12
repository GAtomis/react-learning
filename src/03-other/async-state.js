/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-11 17:45:38
 * @LastEditTime: 2022-04-11 23:29:01
 * @LastEditors: Gavin
 */
import React, { Component } from 'react'

export default class async extends Component {
  state={

    number:0
  }
  render() {
    return (
      <div>async
        {this.state.number}
        <button onClick={this.handleAdd}>+1</button>
      </div>
    )
  }
  handleAdd=()=>{

    this.setState({
      number:this.state.number+1
    },()=>{
      //dom更新完毕的callback
      console.warn("更新完毕");
    })
    console.log(this.state.number);
    this.setState({
      number:this.state.number+1
    })
    console.log(this.state.number);
    this.setState({
      number:this.state.number+1
    })
    console.log(this.state.number);

  }
}
