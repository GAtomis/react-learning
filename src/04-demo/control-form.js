/*
 * @Description: 受控
 * @Author: Gavin
 * @Date: 2022-04-13 14:52:36
 * @LastEditTime: 2022-04-13 17:53:15
 * @LastEditors: Gavin
 */

import React, { Component } from 'react'
import Navbar from '../03-other/components/Navbar'

export default class contral extends Component {
  state = {
    value: '',
    list:["爱乐","爱情","亲戚","志愿者","大白","疫情","志向"]
  }
  render() {
    return (
      <div>
        <h1>表单操作</h1>
            <input type="text"  value={this.state.value} onChange={this.searchKey}/>
      
          <ul>
            {

              this.getList().map((item,index)=>(<li key={index}>{item}</li>))
             

            }
       
          </ul>
       
      </div>
    )
  }
  searchKey=(e)=>{
    this.setState({
      value:e.target.value.trim()
    })
  }
  getList=()=>{
    return this.state.list.filter(item=>item.includes(this.state.value))
  }
}
