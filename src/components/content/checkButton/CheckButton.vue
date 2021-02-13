<template>
  <div class="checkBox" :class="{active:isActive}">
    <img src="@/assets/img/cart/tick.svg">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    isActive:{
      type:Boolean,
      default(){
        return true;
      }
    }
  }
}
</script>

<style scoped>
  .active{
    background-color: #ff5777;
    border: 1px solid red;
  }
  .checkBox{
    border: 1px solid #a3a3a5;
    border-radius: 15px;
  }
</style>