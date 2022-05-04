/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-04-27 21:48:26
 * @LastEditTime: 2022-05-05 01:42:58
 * @LastEditors: Gavin
 */
import react, { useEffect, useState,useMemo } from 'react'
import { request2 } from '../../utils/request-api'
import { flowerNumber } from '../../utils'


export function useAxios(params) {
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

    console.error(flowerNumber(2));

  },[])
  return {titleState:[title, setTitle] ,prodListState:[prodList,setProdList]}
}
export function useFilterList(title,prodList){
    return useMemo(()=>{
    return prodList.filter(item=>item.title.includes(title))
  },[title,prodList])
}