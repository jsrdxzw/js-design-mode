/** 2018/7/27
 * author: XU ZHI WEI
 * function: 职责连模式
 */
class Action {
    constructor(name) {
        this.name = name
        this.nextAction = null
    }

    setNextAction(action) {
        this.nextAction = action
    }

    handle() {
        console.log(`${this.name} 审批`)
        if (this.nextAction) {
            this.nextAction.handle()
        }
    }
}

const a1 = new Action('组长')
const a2 = new Action('部长')
const a3 = new Action('总监')

a1.setNextAction(a2)

a2.setNextAction(a3)

a1.handle()