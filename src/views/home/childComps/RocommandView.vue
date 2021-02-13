<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommed-item">
      <a :href="item.link">
        <img :src="item.image">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
name: "RocommandVIew",
  props:{
    recommends:{
      type:Array,
      default() {
        return [];
      }
    }
  }
}

</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 25px;
    border-bottom: 10px solid #eee;

  }
  .recommed-item{
    flex: 1;
  }
  .recommed-item img {
    width: 67px;
    height: 67px;
    margin-bottom: 10px;
  }
</style>