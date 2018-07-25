/** 2018/7/25
 * author: XU ZHI WEI
 * function: 适配器模式
 * 场景: Vue computed (适配逻辑), 兼容旧接口
 */

class Adaptee {
    specificRequest(){
        return '德国标准插头'
    }
}

class Target {
    constructor(){
        this.adaptee = new Adaptee()
    }
    request(){
        const info = this.adaptee.specificRequest()
        console.log(`${info} - 转换器 - 中国标准插头`)
    }
}


const $ = {
    ajax:function (options) {
        return ajax(options)
    }
}

//$.ajax(...)




