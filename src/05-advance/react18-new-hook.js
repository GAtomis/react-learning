/*
 * @Description: 新生命周期
 * @Author: Gavin
 * @Date: 2022-04-23 19:25:57
 * @LastEditTime: 2022-04-24 12:29:48
 * @LastEditors: Gavin
 */
import React, { Component } from 'react'
import {request2} from '../utils/request-api'
class Child extends Component{
  state={
    title:''
  }
  static getDerivedStateFromProps(props, state) {
      //通过属性转换为状态
      console.log('getDerivedStateFromProps');
    return {...props}
  }
    //配合getDerivedStateFromProps进行状态更新都的监听,可以dom已渲染
    componentDidUpdate(prevProps, prevState) { 
      console.warn(prevProps,prevState,'componentDidUpdate');
      if(JSON.stringify(prevState)===JSON.stringify(this.state)) return
      const config = {
        url: '/home/multidata'
      }
      request2(config).then(res =>{
      })
      
    } 
    //render=>hook=>insertDom 代替了CWU
  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate');
  }
  render(){
    console.log('render');
    return (<div>{this.state.name}
    
    
    </div>)
  }

}

export default class react18hook extends Component {
  //数据同步渲染时回调并返回最后更新完毕的状态
  /**
   * @description: 方法说明....
   * @param {*} props
   * @param {*} state
   * @return {*} 更新的最新state
   * @Date: 2022-04-24 01:33:55
   */
  static getDerivedStateFromProps(props, state) {
      console.log(props,state);
      //初始化
      return {
          list:state.list.map(str=>str.toString().substring(0,1).toUpperCase()+str.toString().substring(1))

      }
  }
  state={
    list:["zhangxiaonan"]
  }
  render() {
    return (
      <div>新生命周期
            <ul>{this.state.list.map((item,index)=>(<li key={index}><Child name={item}></Child></li>))}</ul>
            <button onClick={()=>{
              this.setState({list:['zhounan','xinnan','zhangxiaonan']})
            }}>更新</button>
      </div>
  
    )
  }
}
