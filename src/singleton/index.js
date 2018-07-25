/** 2018/7/25
 * author: XU ZHI WEI
 * function: 单例模式
 * 应用：登录框，购物车
 */

class SingleObject {
    login() {
        console.log('login...')
    }
}

SingleObject.getInstance = (function () {
    let instance //闭包,相当于私有化,private
    return function () {
        if (!instance) {
            instance = new SingleObject()
        }
        return instance
    }
})()

const object1 = SingleObject.getInstance()
object1.login()

const object2 = SingleObject.getInstance()
object2.login()

console.log(object1 === object2)

// const object3 = new SingleObject()

