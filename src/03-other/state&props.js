/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-13 10:07:24
 * @LastEditTime: 2022-04-13 10:30:51
 * @LastEditors: Gavin
 */

import React, { Component } from 'react'
import Navbar from './components/Navbar'
export default class stateProp extends Component {
  state={
    title:'我的title'
  }
  render() {
    
    return (
      <div>

            <Navbar title={this.state.title}></Navbar>
            <button onClick={
                ()=>{

                  this.setState({
                    title:"子组件props随着父组件改变"
                  })
                }



            }>修改父组件state</button>

      </div>
    )
  }
}
