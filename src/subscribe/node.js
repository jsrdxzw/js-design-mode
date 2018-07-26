const EventEmitter = require('events').EventEmitter

// const emitter = new EventEmitter()
//
// emitter.on('some',(data)=>{
//     console.log('fn1',data)
// })
//
// emitter.on('some',(data)=>{
//     console.log('fn2',data)
// })
//
// emitter.emit('some','xxx')


class Dog extends EventEmitter {
    constructor(name) {
        super()
        this.name = name
    }
}

const dog = new Dog('kk')

dog.on('bar', function (info) {
    console.log(this.name, info)
})

dog.on('bar',  (info) => {
    console.log(this) // {}
    // console.log(this.name, info)
})

setTimeout(() => {
    dog.emit('bar','123')
}, 1000)

