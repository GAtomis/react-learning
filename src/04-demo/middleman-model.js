/*
 * @Description: 中间人模式
 * @Author: Gavin
 * @Date: 2022-04-18 10:30:54
 * @LastEditTime: 2022-04-18 19:39:17
 * @LastEditors: Gavin
 */

// 选项卡
import React, { Component } from 'react'
import './css/index.css'
// import Film from './components/Film'
import Home from './components/Home'
import { request, request2 } from '../utils/request-api'

class FilmItem extends Component {
  render() {
    // { console.error(this.props) }
    return <div>

      <img height={this.props.height} width={this.props.width} src={this.props.image} alt={this.props.title}></img>
      <h1>{this.props.title}</h1>
    </div>
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
        


      </div>
    )
  }
}

export default class tabs extends Component {

  state = {
    list: [{
      id: 1,
      text: "碟中谍"
    }, {
      id: 2,
      text: "复仇者联盟"

    }
      , {
      id: 3,
      text: "钢铁侠"

    }
      , {
      id: 4,
      text: "长津湖"

    }
    ],
    currentId: 1
  }

  render() {
    const currentId = this.state.currentId
    const list = this.state.list.map(item => <li key={item.id} onClick={this.handleTab.bind(this, item.id)} className={currentId === item.id && 'active'}>{item.text}</li>)
    return (
      <div>
        {this.which(currentId)}


        <ul>
          {list}
        </ul>
      </div>
    )
  }
  handleTab = (id) => {
    this.setState({
      currentId: id
    })
  }
  which(index) {
    let currentComp = ""

    switch (index) {
      case 1: currentComp = <Film></Film>

        break;
      case 2: currentComp = <Home></Home>

        break;


      default:
        break;


    }
    return currentComp
  }
}
