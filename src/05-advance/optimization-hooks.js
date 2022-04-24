/*
 * @Description: 性能优化通过生命周期
 * @Author: Gavin
 * @Date: 2022-04-24 20:12:23
 * @LastEditTime: 2022-04-24 20:18:46
 * @LastEditors: Gavin
 */

import React, { Component } from 'react'

export default class optimizationHooks extends Component {
  state={
    title:"zhounan"
  }
  render() {
    return (
      <div>

        <h1>{this.state.title}</h1>
        <button onClick={()=>{
          this.setState(state=>({title:"修改完毕"}))
          
        }}>btn</button>
      </div>
    )
  }
  shouldComponentUpdate(nextProps,nextState){
    return JSON.stringify(this.state) !== JSON.stringify(nextState)
  }
  componentDidUpdate(prevProps, prevState) { 
    console.log("updated");

  } 
}
