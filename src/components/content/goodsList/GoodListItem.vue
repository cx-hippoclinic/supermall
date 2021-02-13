<template>
  <div class="good-item" @click="itemClick">
    <img v-lazy="getSrc" @load="imgLoad">
    <div class="good-info">
      <p>{{goodsList.title}}</p>
      <span class="price">￥{{goodsList.price}}</span>
      <span class="collect">{{goodsList.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props:{
    goodsList:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('itemImgLoad')
    },
    itemClick(){
      this.$router.push('/details/'+this.goodsList.iid)
    }
  },
  computed:{
    getSrc(){
      return this.goodsList.img || this.goodsList.image || this.goodsList.show.img
    }
  },
}
</script>

<style scoped>
  .good-item{
    padding-bottom: 40px;
    position: relative;
    width: 46%;

  }
  .good-item img{
    width: 100%;
    border-radius: 5px;
  }
  .good-info{
    font-size: 12px;
    position: absolute;
    buttom:5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .good-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .good-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .good-info .collect{
    position: relative;
  }
  .good-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }


</style>