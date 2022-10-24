/*
 * @Description: 核心
 * @Author: Gavin
 * @Date: 2022-06-20 16:27:47
 * @LastEditTime: 2022-06-21 12:27:13
 * @LastEditors: Gavin
 */
import React from 'react'

import Home from './home'
import About from './about'
import NotFound from './notFound'
import Layout from './layout'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
export default function Index() {
  return (
    //声明当前要用一个非hash模式的路由 
    <BrowserRouter>

      <Routes>
        <Route path="/layout" element={<Layout />} >
          <Route index element={<Navigate to='/layout/home'></Navigate>}></Route>
          <Route path="home" element={<Home />} ></Route>
          <Route path="about" element={<About />} ></Route>
        </Route>
        {/* 重定向 */}
        <Route path="/" element={<Navigate to='/layout/home'></Navigate>}></Route>

        {/* 兜底匹配404 */}
        <Route path="*" element={<NotFound />} >
        </Route>

      </Routes>
    </BrowserRouter >
  )
}
