/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-06-20 16:26:49
 * @LastEditTime: 2022-06-20 16:34:30
 * @LastEditors: Gavin
 */
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      layout
      <Outlet />
    </div>
  )
}
