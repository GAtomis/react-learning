/*
 * @Description: 自定义函数
 * @Author: Gavin
 * @Date: 2022-05-03 11:22:15
 * @LastEditTime: 2022-05-03 12:05:00
 * @LastEditors: Gavin
 */
import {useAxios,useFilterList} from './hooks'
export default function App(params) {
  const {titleState:[title,setTitle],prodListState:[prodList,setProdList]}=useAxios()
  const newList=useFilterList(title,prodList)


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
