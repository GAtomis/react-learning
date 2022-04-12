/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-12 15:53:25
 * @LastEditTime: 2022-04-12 19:36:54
 * @LastEditors: Gavin
 */
import React, { Component } from 'react'
import BScroll from '@better-scroll/core'


export default class betterScroll extends Component {
  state={
    list:[]
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>加BS</button>
        <div className="wrapper" style={{height:"200px",overflow:"hidden"}}>
          <ul className="content">
                {
                  this.state.list.map((item,index)=><li key={index} style={{margin:"30px",fontSize:"30px"}}>{item}</li>)

                }
          </ul>
        </div>
      </div>

    )
  }
  handleClick=()=>{
    //方法一
    // this.setState({list:[1,2,3,4,5,6,7,8,9,10,11,12,13]},()=>{
    //   let wrapper = document.querySelector('.wrapper')
    //   let scroll = new BScroll(wrapper)
    // })
    //方法二
    setTimeout(() => {
      this.setState({list:[1,2,3,4,5,6,7,8,9,10,11,12,13]})
      let wrapper = document.querySelector('.wrapper')
      let scroll = new BScroll(wrapper)
    }, 0);
    
  }
}
