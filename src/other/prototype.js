/** 2018/7/27
 * author: XU ZHI WEI
 * function:clone 自己，生成一个新对象
 * 场景: object.create()
 */

const prototype = {
    getName:function () {
        return this.first + " " + this.last
    },
    say:function () {
        console.log('hello')
    }
}

const x = Object.create(prototype)

x.first = "A"
x.last = "B"

const y = Object.create(prototype)


y.first = "C"
y.last = "D"

const  m = {
    
}

console.log(x,y)