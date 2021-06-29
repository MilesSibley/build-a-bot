import { createStore } from 'vuex';

const store = createStore({
    state:{
        cart: []
    },
    mutations:{
        addRobotToCart(state, robot){
            state.cart.push(robot);
        }
    },
    actions: {
        
    },
    getters: {
        cartSaleItems(state){
            return state.cart.filter(item => item.head.onSale);
        }
    }
});

export default store