/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-08 09:08:08
 * @LastEditTime: 2022-04-08 10:51:44
 * @LastEditors: Gavin
 */


import React, { Component } from 'react'

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
    list: [1, 2, 4, 1, 4]
  }
  render() {
    let text = "tende"
    const list = this.state.list.map((item, index) => <li key={index}>{item}<button onClick={() => this.delClick(index)}>del</button></li>)
    return (
      <div>
        <input ref={this.myRef} />
        <button onClick={this.handleClick}>add</button>
        <h1>{this.state.isText ? text : '0'}</h1>
        <ul>
          {list}
        </ul>

      </div>
    )
  }
  handleClick = () => {
    console.warn(123399, this.myRef.current);
    this.setState({ isText: !this.state.isText })



  }
  ordinaryClick() {

    console.warn(123399, this);

  }
  delClick(index) {
    console.log(index);
    const newList = [...this.state.list]
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
  }
}
