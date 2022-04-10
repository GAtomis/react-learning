/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-10 23:48:57
 * @LastEditTime: 2022-04-10 23:58:46
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
    const list = this.state.list.map((item, index) => <li key={index}><span dangerouslySetInnerHTML={{
      __html: item
    }}></span><button onClick={() => this.delClick(index)}>del</button></li>)
    return (
      <div>
        <input ref={this.myRef} />
        <button onClick={this.handleClick}>add</button>
        <ul>
          {list}
        </ul>
       {!this.state.list.length&&<div>暂无内容</div>} 

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

}
