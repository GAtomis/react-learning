/*
 * @Description: login
 * @Author: Gavin
 * @Date: 2022-06-20 12:03:50
 * @LastEditTime: 2022-06-20 15:56:22
 * @LastEditors: Gavin
 */
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = (params) => {
  const navigate = useNavigate()
  const goHomeByQuery = (e) => {
    // navigate('/home?id=233&email=zhounan@react.com', { replace: true })
    navigate('/home?id=233&email=zhounan@react.com')

  }
  const goHomeByParams = e => {
    navigate(`/home/101`,)
  }
  return (
    <div>
      {/* 跳转函数 */}

      <button onClick={goHomeByQuery}>LoginByQuery</button>
      <button onClick={goHomeByParams}>LoginByParams</button>
    </div>
  )
}
export default Login