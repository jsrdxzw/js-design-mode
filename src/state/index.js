/** 2018/7/27
 * author: XU ZHI WEI
 * function: 状态模式 状态变化,触发
 * 状态对象和主题对象分离
 * 场景：有限状态机 Promise javascript-state-machine
 */

import StateMachine from 'javascript-state-machine'

const fsm = new StateMachine({
    init:'收藏',
    transitions:[
        {
            name:'doStore',
            from:'收藏',
            to:'取消收藏'
        },
        {
            name:'deleteStore',
            from:'取消收藏',
            to:'收藏'
        }
    ],
    methods:{
        onDoStore:function () {
            alert('收藏成功')
            updateText()
        },
        onDeleteStore:function () {
            alert('取消收藏')
            updateText()
        }
    }
})

let btn = document.getElementById('btn1')

btn.addEventListener('click',function () {
    if(fsm.is('收藏')){
        fsm.doStore()
    } else {
        fsm.deleteStore()
    }
})

function updateText() {
    btn.innerText = fsm.state
}

updateText()



