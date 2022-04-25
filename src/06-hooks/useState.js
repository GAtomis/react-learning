/*
 * @Description: useState
 * @Author: Gavin
 * @Date: 2022-04-25 09:53:37
 * @LastEditTime: 2022-04-25 11:23:16
 * @LastEditors: Gavin
 */
import react, { useState } from 'react'

function GaInput(params) {

  const watchInput = e => {
    console.log(e);
  }

  return (<input onChange={watchInput}></input>)
}
export default function App(params) {
  const [list, setList] = useState(['疼的', '我的'])
  return (
    <div>

      <GaInput></GaInput>  <button onClick={() => {
        const newList = [...list]
        newList.push("更新ADD")
        setList(newList)
      }}>更新</button>

      {list.map(item => (<h1>{item}</h1>))}</div>
  )
}