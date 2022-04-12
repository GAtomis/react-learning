/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-12 18:30:57
 * @LastEditTime: 2022-04-12 19:22:31
 * @LastEditors: Gavin
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'; // ES6
export default class NavBar extends Component {
  static propTypes={
    title:PropTypes.string,
    isShow:PropTypes.bool
  } 
  static defaultProps={
    title:"默认标题",
    isShow:true
  }
  render() {
    return (
      <div>{this.props.title}</div>
    )
  }
}
/*
 NavBar.propTypes={
  title:PropTypes.string,
  isShow:PropTypes.bool
} 

*/