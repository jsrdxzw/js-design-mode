/** 2018/7/25
 * author: XU ZHI WEI
 * function: 装饰器模式
 * 场景: ES7装饰器 core-decorators(常用的装饰器)
 * 独立 加入新的功能
 */

class Circle{
    draw(){
        console.log('draw a circle')
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle
    }
    draw(){
        this.circle.draw()
        this._setRedBorder(this.circle) //原类添加了新的方法
    }

    _setRedBorder(circle){
        console.log('set circle border red')
    }
}

const circle = new Circle()

circle.draw()

const dec = new Decorator(circle)

dec.draw()