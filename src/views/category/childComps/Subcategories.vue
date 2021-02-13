<template>
  <div class="Subcategories">
    <subcategories-item v-for="item in subcategoriesDate.list" >
      <div slot="up">
        <img :src="item.image" class="imgChange">
      </div>
      <div slot="down">
        <div>{{item.title}}</div>
      </div>
    </subcategories-item>
  </div>
</template>

<script>
import SubcategoriesItem from "./SubcategoriesItem";
export default {
  name: "Subcategories",
  components: {SubcategoriesItem},
  props:{
    subcategoriesDate:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>
.imgChange{
  width: 100%;
  height: 100%;
}
.Subcategories{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>