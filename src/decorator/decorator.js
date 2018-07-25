@testDec(false)
class Demo {
    
}

function testDec(isDec) {
    return function(target){
        target.isDev = isDec
    }
}

function mixins(...list){
    return function (target) {
        Object.assign(target.prototype,...list)
    }
}

const Foo = {
    foo(){
        console.log('12')
    }
}

@mixins(Foo)
class MyClass{
}

const obj = new MyClass()
obj.foo()

function log(target,name,descriptor) {
    const oldValue = descriptor.value //add function
    descriptor.value = function () {
        console.log(`calling ${name} with ${arguments}`)
        console.log(this) // this is Math class
        return oldValue.apply(this,arguments)
    }
    return descriptor
}

class Math {
    @log
    add(a,b){
        return a + b
    }
}

const math = new Math()
const result = math.add(2,4)



