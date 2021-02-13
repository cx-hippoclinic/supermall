<template>
  <div v-if="Object.keys(detailGoods).length !== 0" class="base-info">
    <div class="detail-title">{{detailGoods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{detailGoods.price}}</span>
      <span class="o-price">{{detailGoods.oldPrice}}</span>
      <span v-if="detailGoods.discountDesc" class="discount" :style="{background:detailGoods.discountBgColor}">{{detailGoods.discountDesc}}</span>
    </div>
    <div class="info-other">
      <span>{{detailGoods.columns[0]}}</span>
      <span>{{detailGoods.columns[1]}}</span>
      <span>{{detailGoods.services[detailGoods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
    <span class="info-service-item" v-for="index in detailGoods.services.length-1" :key="index">
      <img :src="detailGoods.services[index-1].icon" alt="">
      <span>{{detailGoods.services[index-1].name}}</span>
    </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoods",
  props:{
    detailGoods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .detail-title{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #222
  }
  .n-price{
    color: var(--color-high-text);
    font-size: 25px;
    margin-right: 5px;

  }
  .o-price{
    color: var(--color-text);
    text-decoration:line-through;
    margin-right: 5px;
  }
  .discount{
    position: relative;
    top: -8px;
    color: #fff;
    padding: 2px 5px;
    border-radius: 8px;
  }
  .info-other{
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }



</style>