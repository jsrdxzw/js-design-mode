import {readonly,deprecate} from 'core-decorators'

class Person {
    @readonly
    name(){
        return 'xu zhwei'
    }

    @deprecate('we has deprecated this method')
    age(){
        return 12
    }
}

const p = new Person()

console.log(p.age())