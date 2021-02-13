import {debounce} from "@/common/utils";
import BackTop from "components/content/backyop/BackTop";
import {BACKTOP_DISTANCE} from "@/common/const";

export const itemListenerMixin = {
  data(){
    return {
      itemImgListener:null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,50);
    this.itemImgListener = ()=>{
      refresh()
    }
    this.$bus.$on('itemImgLoad',this.itemImgListener);
  }
}
export const backTopMinIn = {
  data() {
    return {
      isShowBackTab:false,
    };
  },
  components:{
    BackTop
  },
  methods:{
    backClicks(){
      this.$refs.scroll.scrollTo(0,0)
    },
    isShowBackTop(position){
      this.isShowBackTab =(-position.y) > BACKTOP_DISTANCE
    }
  }
}