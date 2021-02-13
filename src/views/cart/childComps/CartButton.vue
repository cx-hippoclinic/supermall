<template>
  <div class="button-box">
      <check-button class="select-all" :is-active="isActive" @click.native="selectAllClick"/>
      <span>全选</span>
      <span class="total-price">合计:¥{{totalPrise}}</span>
      <span class="calculate" @click="getResult">去计算（{{calculateLength}}）</span>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import {mapGetters} from "vuex"
export default {
  name: "CartButton",
  components:{
    CheckButton
  },
  computed:{
    ...mapGetters(['carList']),
    totalPrise(){
      return this.carList.filter(res=>res.check).reduce((preValue,item) => {
        return preValue + item.price*item.count
      },0).toFixed(2)
    },
    calculateLength(){
      return this.carList.filter(res=>res.check).length
    },
    isActive(){
      //return !this.carList.filter(res=>!res.check).length
      if(this.carList.length === 0)return false
      return !this.carList.find(res=>!res.check)
    }
  },
  methods:{
    selectAllClick(){
      if(this.isActive){
        this.carList.forEach(item=>item.check=false)
      }else{
        this.carList.forEach(item=>item.check=true)
      }
    },
    getResult(){
      if(!this.isActive){
        this.$toast.show("请添加商品",1500)
      }else {
        this.$toast.show("操作成功",1500)
      }
    }
  }

}
</script>

<style scoped>
.button-box{
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 49px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}
.select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}
.total-price{
  margin-left: 45px;
}
.calculate{
  background-color: #ff5777;
  float: right;
  width: 95px;
  text-align: center;
  color: white;
}
</style>