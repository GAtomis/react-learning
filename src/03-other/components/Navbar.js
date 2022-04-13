/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-12 18:30:57
 * @LastEditTime: 2022-04-13 11:49:30
 * @LastEditors: Gavin
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'; // ES6
import '../css/index.css'
export default class NavBar extends Component {
  static propTypes = {
    title: PropTypes.string,
    isShow: PropTypes.bool
  }
  static defaultProps = {
    title: "默认标题",
    isShow: true
  }
  render() {
    return (
      <div className="border">


        {this.props.title}

        <button onClick={()=>{
            this.props.title="我修改的属性"
        }}>子组件修改属性</button>

      </div>
    )
  }
}
/*
 NavBar.propTypes={
  title:PropTypes.string,
  isShow:PropTypes.bool
} 

*/