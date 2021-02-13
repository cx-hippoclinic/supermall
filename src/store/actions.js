import {ADD_CART,ADD_COUNT} from "./mutaion-types"
export default {
  addCart(context,payload){
    return new Promise((resolve, reject) => {
      let oldProduce = context.state.cartList.find(item=>item.iid===payload.iid)
      if(oldProduce){
        // oldProduce.count +=1
        context.commit(ADD_COUNT,oldProduce);
        resolve('当前商品数量+1');
      }
      else{
        context.commit(ADD_CART,payload);
        resolve("加入到购物车成功");
        // payload.count = 1;
        // context.commit('')
      }
    })
  }
}