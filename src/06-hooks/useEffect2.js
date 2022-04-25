/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-25 23:07:05
 * @LastEditTime: 2022-04-25 23:42:24
 * @LastEditors: Gavin
 */
import React, { useEffect ,useState} from 'react'

export default function useEffect2() {
  const [isCreated, setIsCreated] = useState(true)
  return (
    <div>{isCreated&&<Child></Child>}
    <button onClick={()=>{
        setIsCreated(false)
    }}>停止计时器</button></div>
  )
}
function Child(props) {
  useEffect(()=>{
    window.onresize=()=>{
        console.log("尺寸发生变化");
    }
   const timer= setInterval(() => {
      console.log('监听');
    }, 1000);
    return ()=>{
      clearInterval(timer)
    }
  },[])
  return (<div>计时开始</div>)
  
}
