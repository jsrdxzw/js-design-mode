# 设计模式的*JS*实现

罗列了当下最常用的设计模式，供学习参考

项目基于webpack4和ES6

## How to use

`npm i --save & npm run dev`

## 何为设计
1. 小即是美
2. 让每个程序只做一件事情
3. 快速建立原型
4. 舍弃高效率而取可移植性
5. 采用纯文本来存储数据 
6. 软件复用
7. 避免强制性的用户界面
8. 让每个程序成为过滤器
    
   `ls | grep *.json` 
   
   `ls | grep *.json | wc -l`
   
   ### 小准则:
   + 各部分之和大于整体
   + **寻求90%的方案**(不能满足所有人的需求)
   
   
## 五大设计原则
+ **S-单一职责原则**

+ **O-开放封闭原则(扩展新代码而不是修改已有代码)**

+ L-李式置换原则

+ I-接口独立原则

+ D-依赖导致原则   

```
function loadImg(src){
    const promise = new Promise((resolve,reject)=>{
          const img = document.createElement('img')
          img.onload = ()=>{
            resolve(img)
          }   
          img.onerror = ()=>{
            reject('error')
          }
      }
    )
    return promise
}
const src = "http://..."
const result = loadImg(src)
result.then((img)=>{  //单一原则
    //do something
    return img
}).then((img)=>{   // 开放封闭原则
    //do another thing
}).catch((err)=>{
    //handle error
})
```

