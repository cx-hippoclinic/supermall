<template>
  <div class="tab-control2">
    <tab-control-item v-for="(item,index) in cateTitle"
                      @click.native="cateItemClick(index)"
                      :class="{active:index === currentIndex}"
                      :key="index"
                      :cate-name-item="item"></tab-control-item>
  </div>
</template>

<script>
import TabControlItem from './tab-control-item'
export default {
  name: "tab-control2",
  components:{TabControlItem},
  props:{
    cateTitle:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    cateItemClick(index){
      this.currentIndex = index
      this.$emit("changCateSub",index)
    }
  }
}
</script>

<style scoped>
.tab-control2{
  display: flex;
  flex-direction: column;
  width: 30%;
}
.active{
  color: var(--color-high-text);
  background-color: #fff;
  border-left:3px solid var(--color-high-text);
  font-weight: 600;
}
</style>