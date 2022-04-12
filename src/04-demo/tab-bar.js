/*
 * @Description: 选项卡
 * @Author: Gavin
 * @Date: 2022-04-11 10:06:52
 * @LastEditTime: 2022-04-11 12:34:11
 * @LastEditors: Gavin
 */
// 选项卡
import React, { Component } from 'react'
import './css/index.css'
import Film from './components/Film'
import Home from './components/Home'
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
