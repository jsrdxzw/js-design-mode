/** 2018/7/26
 * author: XU ZHI WEI
 * function: 明星 经纪人 案例
 */

const star = {
    name:'张某某',
    age:25,
    phone:'13900001111'
}

const agent = new Proxy(star,{
    get:function (target,key) {
        if(key==='phone'){
            return '13913012345'
        }
        if(key==='price'){
            return 120000
        }
        return target[key]
    },
    set:function (target,key,val) {
        if(key==='customPrice'){
            if(val<100000){
                throw new Error('price is low')
            } else {
                target[key] = val
                return true //赋值成功
            }
        }
    }
})

//请参照代理，不能直接访问原对象
console.log(agent.phone)
console.log(agent.price)

agent.customPrice = 120000
console.log(agent.customPrice)