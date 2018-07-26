/** 2018/7/26
 * author: XU ZHI WEI
 * function: proxy 代理模式
 * 场景 事件代理模式 $.proxy ES6的proxy
 */ 

class ReadImg {
    constructor(filename){
        this.filename = filename
        this._loadFromDisk()
    }

    _loadFromDisk(){
        console.log('loading from disk')
    }

    display(){
        console.log('display '+this.filename)
    }
}

class ProxyImg {
    constructor(filename){
        this.realImg = new ReadImg(filename)
    }
    display(){
       this.realImg.display()
    }
}

const proxyImg = new ProxyImg('1.png')
proxyImg.display()


