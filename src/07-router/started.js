import React from 'react'

import Home from './home'
import About from './about'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
export default function started() {
  return (
    //声明当前要用一个非hash模式的路由 
    <BrowserRouter>
      {/* 指定要跳转的link */}
      <Link to="/">home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/about" element={<About></About>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}
