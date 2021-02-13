<template>
  <div>
  <TarBar>
    <tar-bar-item path="/home" active-color="deeppink">
      <img slot="item-icon"  src="~assets/img/tabbar/home.png">
      <img slot="item-icon-active"  src="~assets/img/tabbar/home-active.png">
      <div slot="item-text">首页</div>
    </tar-bar-item>
    <tar-bar-item path="/category" active-color="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/category.png">
      <img slot="item-icon-active"  src="~assets/img/tabbar/category-active.png">
      <div slot="item-text">分类</div>
    </tar-bar-item>
    <tar-bar-item path="/shopCart" active-color="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/shopCar.png">
      <img slot="item-icon-active"  src="~assets/img/tabbar/shopCar-active.png">
      <div slot="item-text">购物车</div>
    </tar-bar-item>
    <tar-bar-item path="/profile" active-color="deeppink" >
      <img slot="item-icon" src="~assets/img/tabbar/file.png">
      <img slot="item-icon-active"  src="~assets/img/tabbar/file-active.png">
      <div slot="item-text">我的</div>
    </tar-bar-item>
  </TarBar>
  </div>
</template>

<script>
import TarBar from "components/common/tabbar/TarBar";
import TarBarItem from  "components/common/tabbar/Tar-Bar-item";
export default {
  name: "MainTagBar",
  components:{
    TarBar,
    TarBarItem
  }
}
</script>

<style scoped>

</style>