# 学习笔记
受到疫情影响,正好有时间去学习除vue以外优秀的前端框架,react作为目前前端生态最好的框架体系,又是函数式编程最好的实现者,抱着敬畏之心去学习他。希望我的学习时间不会很长,时间越多疫情越严重,上海加油!中国加油！-GAtomis
##  序章
### 如何建立react脚手架
```
npx create-react-app my-app
cd my-app
npm start
```
### 根目录建立
1. 在src下建立index文件
2. 将react核心引入
```

import React from 'react'
import ReactDom from 'react-dom'
import App from './01-base/class-components'

import App1 from './01-base/FP-components'
ReactDom.render(<App1></App1>,document.getElementById('root'))
```
## 一 组件
### 1. class组件
通过ES6的模块导出,导出自定义class类并继承react.Component从而实现类组件的实现
```
//xml自动实例化组件
class App extends React.Component{
    render:()=><h1></h1>

}
```
### 2. 函数式组件
通过函数式方式导出jsx,在16.8以后的版本具有函数式特性状态保存
```
export default const FP=(params)=><h1>函数式组件</h1>
```

### 3. 父子组件嵌套关系
通过以上两个方式FP或者Class都可以实现组件互相嵌套
详情看01-class/child-components.js

### 4. 样式组件
通过花括号的方式在进行表达式书写
```
        {/* 三种方式 */}
        <div style={objStyle}>{window.location.origin}</div>
        官方推荐
        <div style={{ background: 'red' }} >{window.location.origin}</div>
        <div className="active" >{window.location.origin}</div>

```

## 二 事件
### 1. 类组件事件一（定义）
1. 通过定义类方法去
2. 通过直接嵌入jsx中去写表达式
3. 通过类中定义方法名在jsx中直接this指向当前类（推荐使用箭头函数）

### 2. 类组件事件二（种类）
1. 类组件中直接使用当前类中定义的方法
2. 普通函数this指向问题通过bind去改变this指向
3. 不使用普通函数使用箭头函数this指向直接继承他外层的作用域类组件

### 3. 类组件事件三（事件代理）
1. react通过事件冒泡的方式去捕获当前事件,并去反射当前组件所有的绑定事件并去匹配它
2. 完美继承了当前event


## 三 综合
### 1. [ref](./src/03-other/ref)
获取组件或者当前dom,react17推荐以下方式获取
js
```
//声明一个ref
 myRef=React.createRef()
 获取ref
 nowDom=myRef.current

```
jsx
```
      <input ref={this.myRef} />
```

### 2. [组件中的状态](./src/03-other/state.js)


重点！重点！在class组件中有一个固定的状态值(类似vue中的data),通过setState方法修改状态值实现数据和视图同步渲染和更新
个人理解将组件转化为vnode进行diff比较进行视图更新
```
state={
    isText:0,
    text:"zhounan"
}
handleClick(){  
  this.setState({isText:!this.state.isText})
}

```
构造器创建状态
```
  constructor() {
    super()
    this.state = {
      isText: 0
    }

  }
```
### 3. [列表渲染](./src/03-other/forEach.js)



通过map迭代插入jsx进行列表渲染
```
this.state.list.map((item, index) => <li key={index}>{item}<button onClick={() => this.delClick(index)}>del</button></li>)

```
### 4. [条件渲染](./src/03-other/forEach.js)
#### 是否渲染(类似vue中v-if)
```
//标签内容 三目运算也可以使用if推荐三目运算
 <h1 className={this.state.isText&&'red'}>{this.state.isText ? text : 'isText为false'}</h1>
 //jsx 条件运算符
{this.state.isIf&&<h1 >v-if的效果{this.state.isIf.toString()}</h1>}
```
#### 是否隐藏(类似vue中v-show)
```
    <h1 className={!this.state.isShow&&'hidden'}>v-show的效果{this.state.isShow.toString()}</h1>
```


### 5. [async-state(异步的状态)](./src/03-other/asyncState.js)
异步单项绑定数据特性如下
1. 如果setState处于异步回调函数中类似setTimeout,Promise,他是同步的更新状态不执行合并操作
2. 如果setState处于同步函数中进行执行,他将会是异步合并处理的更新状态
3. setState第二个参数,为视图渲染完毕后执行的callback函数

### 6. [RTF(富文本)](./src/03-other/rtf.js)


通过设置标签中属性进行HTML标签转义(类似Vue2 v-html)
```
//通过设置dangerouslySetInnerHTML来转义文本中的HTML标签
this.state.list.map((item, index) => <li key={index}><span dangerouslySetInnerHTML={{
      __html: item
    }}></span><button onClick={() => this.delClick(index)}>del</button></li>)
```
### 7. [props(属性)](./src/03-other/props.js)
#### 通过属性传参的方式进行父组件向子组件传递
```
<nav value={{title:1}}/>
//拓展运算符
const obj ={title:"周楠",isShow:true}
<nav {...obj}>
//上方等价
<nav title={obj.title} isShow={obj.isShow}>
```
#### 子组件接受参数
```
//结束属性
    return (
      <div>{this.props.title}</div>
    )
  }

```
#### 属性验证规则(子组件类似vue.prop)
```
//react 18后prop-types需要独立依赖
import PropTypes from 'prop-types'; // ES6
NavBar.propTypes={
  title:PropTypes.string,
  isShow:PropTypes.bool
}
```
#### 默认属性
当父组件未传参时默认参数设置
```
NavBar.defaultProps={
    title:"默认标题",
    isShow:true
  }
```
#### props函数式组件
通过形参获得props属性

#### 属性vs状态
1. 属性能从父组件获取,状态不能
2. 属性可以由父组件修改，状态不能
3. 属性状态都可以设默认值,方式不一样
4. 属性子组件内部不可以修改,状态组件内部进行修改
5. 属性设置子组件初始值，状态不可以
6. 属性可以修改子组件的值,状态不可以


## 四 区别  React vs Vue 
### 1. [数据流处理方式](./src/04-demo/free-form)
```
//vue双向绑定
<input v-model="value">
//约等于
<input :value="value" :onChange="(e)=>(new=e.target.value)">
//react 单向数据流
<input defaultValue={this.state.value} value={this.state.value} type="text" onChange={(e) => {
 this.setState({value: e.target.value })
 }}></input>

```
### 2.[非受控表单](./src/04-demo/contral-form)
通过搜索受控进行数据过滤 

### 3. 子父通讯

vue option-api
```
//子
const params="这就是参数"
this.$emit("callback",params)
//父
<child @callback="(p)=>{
  list =p
}">
```
react
```
//子
<button onClick={()=>{
  const params="这就是参数"
  this.props.callback(params)
}}/>
//父
<child callback={(p)=>this.setState({
  list:p
})}
>
``` 
### slot vs children(插槽)
vue插槽模式
```
//父
<template   #top>
  <h1>zhounan</h1>
</template>
//子
<slot name="top">ada</slot>
```
react插槽
```
//父
  render() {
    return (
      <div>
        <Item>
          {/* {全部插槽} */}
          <h1>slot1</h1>
          <h1>slot2</h1>
          <h1>slot3</h1>
        </Item>
        <item2>
          疼的的的
        </item2>
      </div>
    )
  }
//子
  render() {
    const [frist, send, pend] = this.props.children
    return (<div>{
      frist
    }{send}{pend}</div>)
  }
```
### 生命周期区别
react和vue生命周期作用
页面初始化异步数据请求
```
//vue 
mount(){
}
//react
componentDidMount() {
 // dom已挂载,只执行一次,推荐数据挂载在这里做
 console.warn("已经挂载", document.getElementById('hook'));
}
```
数据更新
```
// vue updated(更新后)
updated(){}
//react
  componentDidUpdate(preProps, perState) {

    console.warn("数据更新后", preProps, perState);
  }
其他区别可以去官方文档或者下方生命周期中查看

```
### Composition API VS React hooks
vue3 hooks和React hooks有异曲同工之妙
* 都是解决的了组件内面条式代码问题,把业务逻辑归类在一处,解决代码组织性问题
* react hook在每次state更变时都会重新执行整个hooks ,vue是把get和set合并在一起变成一个叫ref 
* setup(vue) 初始化只执行一次,收集完数据依赖关系后,后续根据会执行watch和compute里的副作用
* 如何精准的控制函数式组件重载是个头疼的问题,需要对react函数式系统的理解,vue没有这个行为
* 都可以单独抽离逻辑,但是提出这个概念的是react在16.8版本提供的
* vue-hooks弥补了react-hooks一些不足,双向绑定天生不受约束,可以自由更改响应式



## 五 高阶技巧
### 1.父子通信
* [CTP(子传父)](./src/05-advance/child-transfer-parents.js)
之前基础介绍了父组件传子组件数据的机制,现在的介绍子组件传递父组件的方法
与vue的比较请看上面专栏
### 2.非父子通信
* [状态提升](./src/05-advance/middleman-model.js)通过父组件状态回调改变后,传入兄弟属性使兄弟组件成为受控组件
* [订阅发布](./src/05-advance/observer.js) 通过发布订阅模式进行组件通讯
* [context](./src/05-advance/context.js)略...
### 3.[插槽(slot)](./src/05-advance/slot.js)类似vue-slot
通过props.children对插槽内容进行遍历,使插槽具名化
```
    //可以进行解构代替具名作用
    const [frist, send, pend] = this.props.children
    return (<div>{
      frist
    }{send}{pend}</div>)

```
插槽具有一下两个特点
* 复用性
* 与父组件状态管理,子父组件状态传递减少
* 通过数组具名化插槽

### 生命周期
 [react生命周期](./src/05-advance/life-cycle-hook.js) 
以下是react重点内容生命周期(为react18推荐的)
#### Hooks语义化说明
在IDE中通过插件所有的钩子函数都可以进行快捷输入他们列如CDM(componentDidMount)他们都进有共同的特点
* 语义相同=>目标内容+时间状态+动作。 will:某行为之前,did:代表某行为之后
* 传参类型相同 will:为新数据,did:为老数据
* 一般will关键字都hook已经为react不推荐的方法了
####  初始化阶段
* componentDidMount-Dom挂载以后执行的钩子函数,一般用于数据请求
* render-每次组件渲染的时候都会调用
#### 运行阶段
* componentDidUpdate-状态更新后的回调参数
* shouldComponentUpdate-判断是否进行render
* render-渲染函数

#### 销毁阶段
* componentWillUnmount:组件在销毁的时候的操作
#### 新生命周期
* static getDerivedStateFromProps-每状态更新和初始化时候回执信并且返回值为最终state结果
* getSnapshotBeforeUpdate-render=>hook=>dom
  
### 性能优化
#### [通过生命周期优化](./src/05-advance/optimization-hooks.js)
1. shouldComponentUpdate-通过周期函数去控制组件或者子组件是否进行dom更新
2. pureComponent-会帮你 比较新props 跟 旧的props 新的state和老的state(值相等.或者对象含有相同的属性，且属性值相等),决定shouldcomponentUpdate 返回true或者false,从而决定要不要呼叫render function
```
//会优化的你的diff算法 不会无脑一直渲染
export default class optimizationHooks extends PureComponent{}
```
## React Hooks
通过是用函数式组件进行组件的自定义编写,函数式组件默认是无状态且只执行一次,但是useState的加入时函数式组件可以更新状态,每次状态更新都会重新执行函数
### [useState(定义状态)](./src/06-hooks/useState.js)
通过解构的方式去按需引入useState
```
  //0:当前状态的键 1:对应键的set方法
  const [list,setList]=useState(['疼的','我的'])
  //打印状态的值
  conlose.log(list)
  //修改状态
  setList([...list,"zhangxiaonan"])
```
### useEffect(副作用)
#### &nbsp; [通常功能](./src/06-hooks/useEffect.js)
当函数式组件创立的时候会调用effect,通过参数更变进行回调函数调用
```
//定义一个副作用 useEffect:(fn:()=>void,list?:any[]) fn:回调函数,list:可选监听状态(为空则只执行一次)
useEffect(()=>{
  副作用
},[stateKey])
```
#### &nbsp; [销毁函数](./src/06-hooks/useEffect2.js)
useEffect承担取消定时器或监听事件
```
//在当做销毁函数执行时 必须将第二个参数为空数组或者是未定义状态,将回调函数return函数当做销毁函数使用
useEffect(()=>{
  副作用...
  return function destroy{ //可以写匿名函数
  销毁
  } 
},[])
```
#### &nbsp; useLayoutEffect
建议在useLayoutEffect中进行DOM修改,在useLayoutEffect时渲染dom还未在浏览器中渲染,仅在内存中渲染,这样做的目的是为了避免回流的出现从而影响性能。

### [useCallback(记忆函数)](./src/06-hooks/useCallback.js)
react hook特性前面提过当state更新时会重新执行一边hooks,这就导致所有在当前context的声明的内容都会被重新init,useCallback就是解决这个问题,通过第二个参数去接触冻结状态,如果第二参数中的变量状态发生了更新则接触冻结状态
```
    //保持函数内的状态
  const handleClick=useCallback(
    () => {
      setName(name+"我是更新")
    },
    [name],
  )
  
```
### [useMemo](./src/06-hooks/useMemo.js)
类似于vue的计算属性,通过监听状态变化而返回函数求值的结果，是经典的函数式编程的范式
```
//通过监听第二个形参中的状态,时而保持求值的更新
const newList=useMemo(()=>{
 return prodList.filter(item=>item.title.includes(title))
},[title,prodList])
```
### [useRef](./src/06-hooks/useRef.js)
ref有两个作用 一个是获取dom,另一个是保存一个属性不守状态更新影响
```
  //缓存一个属性不受状态更新影响
  const number=useRef(0)
    //获取dom
  const inp=useRef()
```


### [useContext](./src/06-hooks/useContext.js)


   

 


## Demo
### 1. [Demo-选项卡](./src/04-demo/tabBar.js)

通过模块化的方式实现tabBar切换

### 2. [Demo-axios](./src/04-demo/axios.js)

在react中使用axios进行网络请求

###  3. [Demo-better-scroll](./src/04-demo/better-scroll.js)

主要测试了setState方法后dom更新状态

### 4. Demo-组件通信

* [常规子父通信](./src/04-demo/field-form.js):测试了表单通过子组件回调父组件方法进行传参,从而实现表单受控的案例
* [ref子父通信](./src/04-demo/ref-form.js):直接通过ref获取子组件并调用子组件内部方法更新子组件内部状态









## END 项目启动

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

