<template>
  <div class="tar-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="itemStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "Tar-Bar-item",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      itemStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    }
  }
</script>

<style scoped>
  .tar-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
  }
  .tar-bar-item img{
    height: 24px;
    vertical-align: top;
    margin-bottom: 2px;
  }
</style>