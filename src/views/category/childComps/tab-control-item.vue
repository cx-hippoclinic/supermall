<template>
  <div class="tab-control-item" >{{cateNameItem.title}}</div>
</template>

<script>
export default {
  name: "tab-control-item",
  props:{
    cateNameItem:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>
.tab-control-item{
  background-color: #F6F6F6;
  height: 54px;
  width: 100%;
  line-height: 54px;
  text-align: center;
}
</style>