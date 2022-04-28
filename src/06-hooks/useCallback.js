/*
 * @Description: useCallback
 * @Author: Gavin
 * @Date: 2022-04-26 11:45:45
 * @LastEditTime: 2022-04-26 22:39:59
 * @LastEditors: Gavin
 */
import React,{useState,useCallback} from 'react'

export default function App() {
  const [name,setName]=useState('')
    //保持函数内的状态
  const handleClick=useCallback(
    () => {
      setName(name+"我是更新")
    },
    [name],
  )
  
  return (
    <div>
     
      useCallback{name}<button onClick={()=>handleClick()}>更新</button></div>
  )
}
