/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-27 21:48:26
 * @LastEditTime: 2022-04-28 11:11:34
 * @LastEditors: Gavin
 */
import react, { useEffect, useState } from 'react'
import { request2 } from '../utils/request-api'
export default function App(params) {
  const [title, setTitle] = useState("")
  const [goodList, setGoodList] = useState([])
  const [prodList,setProdList]=useState([])
  useEffect(() => {
    const config = {
      url: '/home/multidata',
      params:{title}
    }
    request2(config).then(res =>{
      const {banner:{list}}=res.data
      setGoodList(list)
      setProdList(list)
    })

  },[])

  return (<div>

      <InputForm title={title} handleInput={(value)=>{
          setTitle(value)       
          setGoodList(prodList.filter(item=>item.title.includes(value)))
      }}></InputForm>
      <GoodList goodList={goodList}></GoodList>

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