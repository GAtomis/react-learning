/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-08 09:08:08
 * @LastEditTime: 2022-04-12 19:36:46
 * @LastEditors: Gavin
 */


import React, { Component } from 'react'
import './css/index.css'

export default class event extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     isText: 0
  //   }

  // }
  a = "变量A"
  myRef = React.createRef()
  state = {
    isText: 0,
    list: [1, 2, 4, 1, 4],
    isShow:false,
    isIf:false
  }
  render() {
    let text = "isTest为True"
    const list = this.state.list.map((item, index) => <li key={index}>{item}<button onClick={() => this.delClick(index)}>del</button></li>)
    return (
      <div>
        <input ref={this.myRef} />
        <button onClick={this.handleClick}>add</button>
        <button onClick={this.handleVIf}>v-if</button>
        <button onClick={this.handleVShow}>v-show</button>   
        <ul>
          {list}
        </ul>
       {!this.state.list.length&&<div>暂无内容</div>} 
       <h1 className={this.state.isText&&'red'}>{this.state.isText ? text : 'isText为false'}</h1>
    
    ‘
        {this.state.isIf&&<h1 >v-if的效果{this.state.isIf.toString()}</h1>}
      </div>
    )
  }
  //添加指令
  handleClick = () => {
    console.warn(123399, this.myRef.current);
    const newList=[...this.state.list]
    newList.push(this.myRef.current.value)
    this.setState({ isText: !this.state.isText,list:newList })

  }
//删除指令
  delClick(index) {
    console.log(index);
    const newList = [...this.state.list]
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
  }
  handleVIf=()=>{
    this.setState({
      isIf:!this.state.isIf
    })
    
  }
  handleVShow=()=>{
    this.setState({
      isShow:!this.state.isShow
    })
    
    
  }
}
