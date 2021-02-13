import {ADD_CART,ADD_COUNT} from "./mutaion-types"
export default {
  [ADD_COUNT](state,payload){
    payload.count += 1;
  },
  [ADD_CART](state,payload){
    payload.count = 1;
    payload.check = true;
    state.cartList.push(payload)
  }
}