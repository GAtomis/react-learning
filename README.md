## 学习笔记

###  起步
#### 根目录建立
1. 在src下建立index文件
2. 将react核心引入
```

import React from 'react'
import ReactDom from 'react-dom'
import App from './01-base/class-components'

import App1 from './01-base/FP-components'
ReactDom.render(<App1></App1>,document.getElementById('root'))
```
### 一 组件
#### class组件
通过ES6的模块导出,导出自定义class类并继承react.Component从而实现类组件的实现
```
//xml自动实例化组件
class App extends React.Component{
    render:()=><h1></h1>

}
```
#### 函数式组件
通过函数式方式导出jsx,在16.8以后的版本具有函数式特性状态保存
```
export default const FP=(params)=><h1>函数式组件</h1>
```

#### 父子组件嵌套关系
通过以上两个方式FP或者Class都可以实现组件互相嵌套
详情看01-class/child-components.js

#### 样式组件
通过花括号的方式在进行表达式书写
```
        {/* 三种方式 */}
        <div style={objStyle}>{window.location.origin}</div>
        官方推荐
        <div style={{ background: 'red' }} >{window.location.origin}</div>
        <div className="active" >{window.location.origin}</div>

```

### 二 事件
#### 类组件事件一（定义）
1. 通过定义类方法去
2. 通过直接嵌入jsx中去写表达式
3. 通过类中定义方法名在jsx中直接this指向当前类（推荐使用箭头函数）

#### 类组件事件二（种类）
1. 类组件中直接使用当前类中定义的方法
2. 普通函数this指向问题通过bind去改变this指向
3. 不使用普通函数使用箭头函数this指向直接继承他外层的作用域类组件

#### 类组件事件三（事件代理）
1. react通过事件冒泡的方式去捕获当前事件,并去反射当前组件所有的绑定事件并去匹配它
2. 完美继承了当前event


### 三 综合
#### ref
>path:./src/03-other/ref

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
 <font color=red size=2>状态</font>
 <br/>

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
#### 列表渲染
>path:./src/forEach

通过map迭代插入jsx进行列表渲染
```
this.state.list.map((item, index) => <li key={index}>{item}<button onClick={() => this.delClick(index)}>del</button></li>)

```
如何进行条件渲染
>是否渲染(类似vue中v-if)
```
//标签内容 三目运算也可以使用if推荐三目运算
 <h1 className={this.state.isText&&'red'}>{this.state.isText ? text : 'isText为false'}</h1>
 //jsx 条件运算符
{this.state.isIf&&<h1 >v-if的效果{this.state.isIf.toString()}</h1>}
```
>是否隐藏(类似vue中v-show)
```
    <h1 className={!this.state.isShow&&'hidden'}>v-show的效果{this.state.isShow.toString()}</h1>
```
#### RTF(富文本)
> path:./src/03-other/rtf

通过设置标签中属性进行HTML标签转义(HTML)
```
//通过设置dangerouslySetInnerHTML来转义文本中的HTML标签
this.state.list.map((item, index) => <li key={index}><span dangerouslySetInnerHTML={{
      __html: item
    }}></span><button onClick={() => this.delClick(index)}>del</button></li>)
```





























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
