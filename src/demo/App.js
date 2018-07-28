import $ from 'jquery'
import ShoppingCart from './ShoppingCart/index'
class App{
    constructor(id) {
        this.$el = $('#'+id)

    }

    initShoppingCart(){
        const shoppingCart = new ShoppingCart(this)
    }

    initList(){

    }

    init(){
        this.initShoppingCart()
        this.initList()
    }

}

export default App