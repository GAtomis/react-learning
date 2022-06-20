/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-06-18 13:21:35
 * @LastEditTime: 2022-06-20 15:59:04
 * @LastEditors: Gavin
 */
import React from 'react'
import { useSearchParams, useParams } from 'react-router-dom'

export default function Home() {
  const [params] = useSearchParams()
  const id = params.get('id')
  const email = params.get('email')
  const p = useParams()
  const pId = p.id

  return (
    <div>
      <p>这里是homeQuery{id}{email}</p>
      <p>这里是homeParams{pId}</p>


    </div>
  )
}
