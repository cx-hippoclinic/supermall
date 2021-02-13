<template>
    <scroll ref="scroll">
      <div>
          <cart-list-item  v-for="item in carList":key="item.iid" :item-info="item"/>
      </div>
    </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "../childComps/CartListItem";
import { mapGetters } from "vuex";
export default {
  name: "cartList",
  components:{
    Scroll,
    CartListItem,
  },
  computed:{
    ...mapGetters(['carList'])
  },
  activated() {
     this.$refs.scroll.refresh;
   }
  }
</script>

<style scoped>

</style>