/*
 * @Description: react入口文件
 * @Author: Gavin
 * @Date: 2022-04-02 23:47:53
 * @LastEditTime: 2022-04-05 10:19:09
 * @LastEditors: Gavin
 */
import React from 'react'
import ReactDom from 'react-dom'
// import App from './01-base/class-components'

// import App from './01-base/FP-components'

import App from './01-base/child-components'
ReactDom.render(<App></App>,document.getElementById('root'))