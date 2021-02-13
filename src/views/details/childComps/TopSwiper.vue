<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="index in swiperImg">
      <img :src="index" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper"
export default {
  name: "TopSwiper",
  components: {Swiper,SwiperItem},
  props:{
    swiperImg:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>