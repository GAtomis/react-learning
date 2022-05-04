/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-05-04 21:47:33
 * @LastEditTime: 2022-05-04 23:35:08
 * @LastEditors: Gavin
 */

//index等于number里的值两个数返回true 不等于返回false
export function twoSum(list,target) {
    const disc= Object.fromEntries(list.map(i=>[i,true]))
    return list.some(i=>disc[target-i])
}

export function flowerNumber(n) {
  let ge,shi,bai
    ge=Array.from({length:10},(_,i)=>[i,i**n])
    shi=Array.from({length:10},(_,i)=>[i*10,i**n])
    bai=Array.from({length:9},(_,i)=>[(i+1)*100,(i+1)**n])
    for( let x=8;x>=0;x--){
      for (let y =9; y >=0; y--) {
        for (let z = 9;z>=0 ;z--) {
      
         const number= ge[z][0]+shi[y][0]+ge[z][0]
         const flower=ge[z][1]+shi[y][1]+ge[z][1]
         
         
        }
        
      }

    }
    console.log(ge,shi,bai );
}