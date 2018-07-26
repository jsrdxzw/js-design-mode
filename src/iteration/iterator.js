// console.log(Array.prototype[Symbol.iterator]().next())


function each(data) {
    const iterator = data[Symbol.iterator]() //生成迭代器
    let item = {done: false}

    while (!item.done) {
        item = iterator.next()
        if (!item.done) {
            console.log(item.value)
        }
    }
}

const m = new Map()
m.set('a', 100)
m.set('b', 200)

each(m)

//等同于

function each2(data) {
    for (let item of data){ //of 遍历迭代器
        console.log(item)
    }
}

each2(m)

