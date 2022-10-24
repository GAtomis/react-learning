/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-06-20 16:26:49
 * @LastEditTime: 2022-06-21 12:58:10
 * @LastEditors: Gavin
 */
import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './css/layout.css'
export default function Layout() {
  return (
    <div>
      <NavLink to="/layout/home" className={({ isActive }) => isActive ? 'isActive' : ''}>Home</NavLink> |
      <NavLink to="/layout/about" className={({ isActive }) => isActive ? 'isActive' : ''}> About</NavLink>
      <Outlet />
    </div>
  )
}
