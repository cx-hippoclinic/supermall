<template>
  <div class="details">
    <detail-nav-bar class="detail-nav-bar" @topItemClick="topItemClick" ref="nav"/>
    <Scroll class="content"
            ref="scroll"
            :probeType="3"
            @scroll="getScrollY"
            >
      <div>
        <top-swiper :swiper-img="swiperImg"></top-swiper>
        <detail-goods :detail-goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info :detail-info="detailInfo" @imgLoadOver="loadOver"/>
        <detail-param-info :paramInfo ="goodsParam" ref="param"/>
        <detail-goods-comment :commentInfo="goodComment" ref="comment"/>
        <good-list :goods="recommendGoods" ref="commend"/>
      </div>
    </Scroll>
    <BackTop @click.native="backClicks" v-show="isShowBackTab"/>
    <detail-botton-bar @addCatClick="addCatClick"/>
  </div>
</template>
<script>
import {getDetail,goods,Shop,GoodsParam,getRecommend} from "network/detail";
import DetailNavBar from "./childComps/DetailNavBar";
import TopSwiper from "./childComps/TopSwiper";
import DetailGoods from "./childComps/DetailGoods";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailGoodsComment from "./childComps/DetailGoodsComment";
import GoodList from "components/content/goodsList/GoodList";
import DetailBottonBar from "./childComps/DetailBottonBar";
import Scroll from "components/common/scroll/Scroll";
import {itemListenerMixin,backTopMinIn} from "@/common/mixin";
import { mapActions } from "vuex"
import {debounce} from "@/common/utils";



export default {
  name: "Details",
  data(){
    return{
      iid:null,
      swiperImg:[],
      goods:{},
      shop:{},
      detailInfo:{},
      goodsParam:{},
      goodComment:{},
      recommendGoods:[],
      themeTopYs:[],
      getThemeTopYs:null
    }
  },
  components:{
    DetailBottonBar,
    DetailNavBar,
    TopSwiper,
    DetailGoods,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailGoodsComment,
    GoodList,

    Scroll
  },
  mixins:[itemListenerMixin,backTopMinIn],
  methods:{
    ...mapActions(['addCart']),
    loadOver(){
      this.$refs.scroll.refresh();
      this.getThemeTopYs();
    },
    topItemClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    getScrollY(position){
      this.isShowBackTop(position);
      const positionY = -position.y
      let length = this.themeTopYs.length;
      // for(let i in this.themeTopYs) 这里的i是str类型，需要parseInt(i)转成int类型
      for(let i = 0;i < length;i ++){
        if((i !== this.currentIndex) && ((i < length - 1&& positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])||
            (i === length -1 && positionY >= this.themeTopYs[i]))){
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    addCatClick(){
      const product ={};
      product.image = this.swiperImg[0];
      product.title = this.goods.title;
      product.desc = this.goods.discountDesc;
      product.price = this.goods.oldPrice;
      product.iid = this.iid;
      // //this.$store.commit('addCart',product);
      // this.$store.dispatch('addCart',product).then(res=>{
      //   console.log(res);
      // })
       this.addCart(product).then(res=>{
         this.$toast.show(res,1500)
       })
    }
  },
  created() {
    this.iid=this.$route.params.id
    getDetail(this.iid).then(res=>{
      const data = res.data.result;
      console.log(res);

      this.swiperImg = data.itemInfo.topImages;
      this.goods = new goods(data.columns,data.itemInfo,data.shopInfo);
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.goodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule);
      if(data.rate.cRate !== 0){
        this.goodComment = data.rate.list[0];
      }
      this.getThemeTopYs = debounce(()=>{
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.commend.$el.offsetTop)
        console.log(this.themeTopYs);
      },100)
    })
    getRecommend().then(res=>{
      this.recommendGoods = res.data.data.list;
    })
  },
  mounted() {
  },
  destroyed() {
    this.$bus.$off('itemImgLoad',this.itemImgListener)

  }

}
</script>

<style scoped>
  .details{
    height: 100vh;
    position: relative;
    z-index: 8;
    background-color: #ffffff;
  }
  .detail-nav-bar{
    position: relative;
    z-index: 8;
    background-color: #ffffff;
  }
  .content{
    position: absolute;
    top:44px;
    bottom: 58px;
  }
</style>