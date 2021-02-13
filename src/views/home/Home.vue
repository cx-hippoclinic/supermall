<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center" >购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 v-show="isShowTabControl"
                 class="tab-control"
    />
    <Scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            @pullingUp="loadMore"
            :pullUpLoad="true"
    >
      <div>
        <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
        <rocommand-view :recommends="recommends"></rocommand-view>
        <remand-view></remand-view>
        <tab-control :titles="['流行','新款','精选']"
                     @tabClick="tabClick"
                     ref="tabControl2"
        />
        <good-list :goods="showGoods"></good-list>
      </div>
    </Scroll>
    <BackTop @click.native="backClicks" v-show="isShowBackTab"/>
  </div>
</template>

<script>
import {getHomeMultidata,getHomeGoods} from "network/home";
import {debounce} from "@/common/utils";
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goodsList/GoodList";
import HomeSwiper from "./childComps/homeswiper"
import RocommandView from "./childComps/RocommandView";
import RemandView from "views/home/childComps/RemandView";
import Scroll from "components/common/scroll/Scroll";
import {itemListenerMixin,backTopMinIn} from "@/common/mixin";

export default {
  name: "Home",
  components: {
    GoodList,
    NavBar,
    HomeSwiper,
    RocommandView,
    RemandView,
    TabControl,
    Scroll,
  },
  mixins:[itemListenerMixin,backTopMinIn],
  data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        controlOffsetTop:0,
        isShowTabControl:false,
        saveY:0,
      }
      },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
    },
    activated() {
      this.$refs.scroll.refresh();
      this.$refs.scroll.scrollTo(0,this.saveY,0);
    },
    deactivated() {
      this.saveY=this.$refs.scroll.scroll.y;
      this.$bus.$off('itemImgLoad',this.itemImgListener)
    },
  methods:{
    /*事件监听的方法*/
    swiperImgLoad(){
      this.controlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    tabClick(index){
      switch (index){
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index

    },
    contentScroll(position){
      this.isShowBackTop(position);
      this.isShowTabControl =( -position.y >this.controlOffsetTop)
    },
    /*网络请求相关方法*/
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners =res.data.data.banner.list;
        this.recommends=res.data.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page+=1;
        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      })
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    }
  }
}
</script>
<style scoped>
  #home{
    padding-top:44px ;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control{
    position: relative;
    z-index: 7;
  }
</style>