<template>
  <div id="homeswiper">
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper/index"
export default {
  name: "homeswiper",
  components:{
    Swiper,
    SwiperItem
  },
  data(){
    return{
      imgIsLoad:false
    }
  },
  methods:{
    imgLoad(){
      if(!this.imgIsLoad){
        this.$emit('swiperImgLoad');
        this.imgIsLoad=true;
      }

    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>