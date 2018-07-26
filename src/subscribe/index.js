/** 2018/7/26
 * author: XU ZHI WEI
 * function:观察者模式
 * 场景：网页事件绑定(click,先订阅，再在一个时机发布)，Promise，Node自定义事件，jQuery
 */

//保存状态，状态变化触发观察者对象
class Subject {
    constructor() {
        this.state = 0
        this.observers = [] //观察者
    }

    getState() {
        return this.state
    }

    setState(state) {
        this.state = state
        this.notifyAllObservers()
    }

    notifyAllObservers() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }

    attach(observer) {
        this.observers.push(observer)
    }
}

class Observer {
    constructor(name, subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }

    update() {
        console.log(`${this.name} update, state:${this.subject.getState()}`)
    }
}

const s = new Subject()
const o1 = new Observer('o1',s)
const o2 = new Observer('o2',s)
const o3 = new Observer('o3',s)

s.setState(1)
s.setState(2)
s.setState(3)