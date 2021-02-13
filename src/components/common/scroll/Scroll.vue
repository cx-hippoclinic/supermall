<template>
  <div  ref="wrapper">
      <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },

  data(){
    return{
      scroll:{}
    }
  },
  methods:{
    scrollTo(x,y,time=500){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    }

  },
  mounted() {
    this.scroll=new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad

    })
    if(this.probeType===2||this.probeType===3){
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })
    }
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    }
  }
}

</script>

<style scoped>

</style>