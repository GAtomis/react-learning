/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-05-04 21:47:33
 * @LastEditTime: 2022-05-05 02:06:09
 * @LastEditors: Gavin
 */

//index等于number里的值两个数返回true 不等于返回false
export function twoSum(list, target) {
  const disc = Object.fromEntries(list.map(i => [i, true]))
  return list.some(i => disc[target - i])
}

export function flowerNumber(n) {

  const getFlower = (list, enumList) => {

    if (list.length !== enumList.length) {

      throw new Error("数组位数与o*n不一致")
    }


    let number=0,total=0
    list.forEach((item,index) => {
      number+=item[enumList[index]][0]
      total+=item[enumList[index]][1]
    });
    return {number,total}
  
    // return {
    //   number: list.reduce((t, sum, index) => {

   
    //       return t + sum[enumList[index]][0]

    //   }),
    //   total: list.reduce((t, sum, index) => t + sum[enumList[index]][1])
    // }


  }

  let ge = Array.from({ length: 10 }, (_, i) => [i, i ** n])
  let shi = Array.from({ length: 10 }, (_, i) => [i * 10, i ** n])
  let bai = Array.from({ length: 9 }, (_, i) => [(i + 1) * 100, (i + 1) ** n])
 let result=[]
  console.log(ge, shi, bai);
  const a = getFlower([ bai,ge, shi], [1, 2, 3])
  console.log(a);

  for (let x = bai.length-1; x >= 0; x--) {
    for (let y = shi.length-1; y >= 0; y--) {
      for (let z = ge.length-1; z >= 0; z--) {
          const nowitem=getFlower([bai,ge,shi],[x,y,z])
          const {number,total}=nowitem
         if(z===9){
          const max= nowitem
          const min= getFlower([bai,shi,ge],[x,y,0])
          if(max.total<max.number||min.total>min.number){
            console.log(max,min);
            break;

          }
      

         }
        //  console.log(number,total);
         number===total&&result.push(number)







      }

    }

  }
  return result
 

}

