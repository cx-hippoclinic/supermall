<template>
  <div class="goodsShow">
    <good-list-item  v-for="(item,index) in goods" :goods-list="item" :key="index"></good-list-item>
  </div>
</template>
<script>
import GoodListItem from "components/content/goodsList/GoodListItem";
export default {
  name: "GoodList",
  components: {GoodListItem},
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
  .goodsShow{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>