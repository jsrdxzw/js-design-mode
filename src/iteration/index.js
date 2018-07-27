/** 2018/7/26
 * author: XU ZHI WEI
 * function:迭代器模式,兼容,遍历不同类型的数据集
 * 场景：each ES6-iterator
 */

class Iterator {
    constructor(container) {
        this.list = container.list
        this.index = 0
    }

    next() {
      if(this.hasNext()){
          return this.list[this.index++]
      }
      return null
    }

    hasNext() {
       return this.index < this.list.length;
    }
}

class Container {
    constructor(list) {
        this.list = list
    }
    getIterator() {
        return new Iterator(this)
    }
}

const arr = [1,2,3,4,5]
const container = new Container(arr)
const iterator = container.getIterator()

while (iterator.hasNext()){
    console.log(iterator.next())
}
