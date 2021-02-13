<template>
  <div class="SubcategoriesItem">
    <div class="up">
      <slot name="up" ></slot>
    </div>
    <div class="down">
      <slot name="down"></slot>
    </div>
  </div>
</template>

<script>
export default {
name: "SubcategoriesItem"
}
</script>

<style scoped>
.SubcategoriesItem{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 33.3%;
  font-size: 14px;

}
.up{
  width: 50px;
  height: 50px;
}
.down{

}
</style>