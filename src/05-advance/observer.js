/*
 * @Description: 发布订阅模式
 * @Author: Gavin
 * @Date: 2022-04-18 22:47:52
 * @LastEditTime: 2022-04-19 01:33:01
 * @LastEditors: Gavin
 */

import React, { Component } from 'react'
import {  request2 } from '../utils/request-api'
var watch = {
  list: [],
  //订阅
  subscribe(fn) {
    this.list.push(fn)
  },
  //发布
  publish(params) {
    this.list.forEach(fn => fn && fn(params))
  }
}

export default class observer extends Component {
  render() {
    return (
      <div><Film></Film></div>
    )
  }
}

class Film extends Component {
  constructor() {

    super()
    const config = {
      url: '/home/multidata'
    }
    this.state = {
      list: []
    }
    request2(config).then(res => {
      // console.warn(res);
      this.setState({
        list: res.data.banner.list
      })
    })
  }
  render() {

    { console.error(this.state) }
    return (
      <div>
        {
        this.state.list.map(item => <FilmItem key={item.acm} {...item}></FilmItem>)
        }
        <FilmDetail></FilmDetail>
      </div>
    )
  }
}
class FilmItem extends Component {
  render() {
    // { console.error(this.props) }
    return <div onClick={()=>{
      watch.publish(this.props.title)
    }} >

      <img height={this.props.height} width={this.props.width} src={this.props.image} alt={this.props.title}></img>
      <h1>{this.props.title}</h1>
    </div>
  }

}

class FilmDetail extends Component {
  constructor() {
    super()
    this.state = {

    }
    watch.subscribe((data) => {
      this.setState({
        title:data
      },()=>{
        
        console.warn("watch发布完毕",this.state);
      })
    })

  }
  render() {
    return (
      <div>observer</div>
    )
  }

}


// watch.subscribe(() => {
//   console.warn("我的知乎");
// })
// watch.publish()
