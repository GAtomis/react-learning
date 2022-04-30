/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-28 12:17:16
 * @LastEditTime: 2022-04-30 20:27:56
 * @LastEditors: Gavin
 */
import React,{useState,useRef}from 'react'

export default function App() {
  const [content,setContent]=useState(0)
  const number=useRef(0)
  const inp=useRef()
  return (
    <div>
      
      <input ref={inp} ></input>
      <button onClick={()=>{
     console.log(inp.current.value);
     setContent(content+Number(inp.current.value))
     number.current+=Number(inp.current.value)

    }}>更新</button>{content}-{number.current}
    
    </div>
  )
}
