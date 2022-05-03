/*
 * @Description: useReducer
 * @Author: Gavin
 * @Date: 2022-05-02 11:06:21
 * @LastEditTime: 2022-05-02 11:10:36
 * @LastEditors: Gavin
 */
import React, { useReducer } from 'react'
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>     Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button></div>
  )
}
