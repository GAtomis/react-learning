/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-27 21:48:26
 * @LastEditTime: 2022-04-28 11:37:46
 * @LastEditors: Gavin
 */
import react, { useEffect, useState,useMemo } from 'react'
import { request2 } from '../utils/request-api'
export default function App(params) {
  const [title, setTitle] = useState("")

  const [prodList,setProdList]=useState([])
  useEffect(() => {
    const config = {
      url: '/home/multidata',
      params:{title}
    }
    request2(config).then(res =>{
      const {banner:{list}}=res.data
      setProdList(list)
    })

  },[])
  const newList=useMemo(()=>{
    return prodList.filter(item=>item.title.includes(title))
  },[title,prodList])

  return (<div>

      <InputForm title={title} handleInput={(value)=>{
          setTitle(value)       
       
      }}></InputForm>
      <GoodList goodList={newList}></GoodList>

  </div>)
}
function InputForm(props) {
    const {handleInput,title}=props
    return (<div>
        <input  value={title} onChange={e=>handleInput(e.target.value)}></input>
        <button>搜索</button>


    </div>)
}
function GoodList(props) {
  const {goodList}=props
  return (<ul>
        {goodList.map((item,index)=>(<li key={index}><img src={item.image} alt={item.title}></img><p>{item.title}</p></li>))}
  </ul>)
  
}