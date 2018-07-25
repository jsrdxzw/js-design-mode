/** 2018/7/25
 * author: XU ZHI WEI
 * function: 工厂模式
 * 场景: $('div') React.createElement vue异步组件
 */

class Product{
    constructor(name) {
        this.name = name
    }

    init(){
      console.log('init')
    }

    fun1(){
      console.log('fun1')
    }

    fun2(){
        console.log('fun2')
    }
}

class Creator {
    static create(name){
        return new Product(name)
    }
}

const p = Creator.create('p1')
p.init()
p.fun1()
p.fun2()