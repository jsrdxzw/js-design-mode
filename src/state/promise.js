import StateMachine from 'javascript-state-machine'

/** 2018/7/27
 * author: XU ZHI WEI
 * function: promise的实现
 */

const fsm = new StateMachine({
    init: 'pending',
    transitions: [
        {
            name: 'resolve',
            from: 'pending',
            to: 'fullfilled'
        },
        {
            name: 'reject',
            from: 'pending',
            to: 'reject'
        }
    ],
    methods: {
        onResolve: function (state, data) { //state 状态机的实例
            data.successFn.forEach(fun=>{
                fun()
            })
        },
        onReject: function (state, data) {
            data.failFn.forEach(fun=>{
                fun()
            })
        }
    }
})

class MyPromise {
    constructor(fn) {
        this.successFn = []
        this.failFn = []
        fn(() => { //理解，本质是回掉函数
            fsm.resolve(this) //触发状态改变
        }, () => {
            fsm.reject(this)  //触发状态改变
        })
    }

    then(success, fail) {
        success && this.successFn.push(success)
        fail && this.failFn.push(fail)
        return this
    }
}

function loadImg(src) {
    return new MyPromise(function (resolve, reject) {
        const img = document.createElement('img')
        img.src = src
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject()
        }
    })
}

const src = 'https://avatars2.githubusercontent.com/u/13454113?s=460&v=4'

const result = loadImg(src)

result.then(function () {
}, function () {
    console.log('fail')
}).then(function () {
    console.log('ok2')
})