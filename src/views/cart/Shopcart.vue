<template>
  <div id="cart">
    <cart-nav-bar class="nav-bar"/>
    <cart-list class="cart-list"/>
    <cart-button/>
  </div>
</template>

<script>
import CartNavBar from "./childComps/CartNavBar";
import CartList from "./childComps/CartList";
import CartButton from "./childComps/CartButton";
  export default {
    name: "Shopcart",
    components:{
      CartNavBar,CartList,CartButton
    }
  }
</script>

<style scoped>
.cart-list{
  position: absolute;
  top: 44px;
  bottom: 90px;
  width: 100%;
}
.nav-bar{
  color: #fff;
  position: relative;
  z-index: 9;
}
#cart {
  /*position: relative;*/
  height: 100vh;
}

</style>