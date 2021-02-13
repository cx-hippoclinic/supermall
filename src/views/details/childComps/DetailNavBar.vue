<template>
  <div class="detailBavBar">
    <nav-bar >
      <div slot="left" class="back" @click="backHome">
        <img src="~assets/img/common/back.svg">
      </div>
      <div slot="center" class="title">
        <div class="title-item"
             v-for="(item,index) in titles"
             :class="{active: index === currentIndex}"
             @click="itemClick(index)"
        >
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components:{
    NavBar
  },
  data(){
    return{
      titles:["商品","参数","评论","推荐"],
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit("topItemClick",index)
    },
    backHome(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .back img{
    margin-top: 12px;
  }
</style>