/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-06-18 10:58:36
 * @LastEditTime: 2022-06-20 15:53:20
 * @LastEditors: Gavin
 */
import React from 'react'

import Home from './home'
import About from './about'
import Login from './login'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
export default function started() {
  return (
    //声明当前要用一个非hash模式的路由 
    <BrowserRouter>
      {/* 指定要跳转的link */}
      <Link to="/">home</Link>｜
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/home" element={<Home></Home>} ></Route>
        <Route path="/home/:id" element={<Home></Home>} ></Route>
        <Route path="/about" element={<About></About>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}
