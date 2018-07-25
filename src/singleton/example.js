/** 2018/7/25
 * author: XU ZHI WEI
 * function:模态框的单例
 */

class LoginForm{
    constructor(){
        this.state = 'hide'
    }
    show(){
        if(this.state === 'show'){
            console.log('has showed..')
            return
        }
        this.state = 'show'
        console.log('is show...')
    }
    hide(){
        if(this.state === 'hide'){
            console.log('has hided..')
            return
        }
        this.state = 'hide'
        console.log('is hide...')
    }
}

LoginForm.getInstance = (function () {
    let instance
    return function () {
        if(!instance){
            instance = new LoginForm()
        }
        return instance
    }
})()

let login1 = LoginForm.getInstance()
login1.show()

let login2 = LoginForm.getInstance()
login2.show()