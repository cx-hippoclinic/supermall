<template>
  <div>
    <nav-bar class="navBarCart">
      <div slot="center">购物车({{getLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "CartNavBar",
  components:{NavBar},
  computed:{
    // getLength(){
    //   return this.$store.getters.getLength
    ...mapGetters(['getLength'])

  }
}
</script>

<style scoped>
.navBarCart{
  background-color: var(--color-tint);
}
</style>