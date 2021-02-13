<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center" >商品分类</div>
    </nav-bar>
    <scroll class="content">
      <tab-control2 :cate-title="categories"
                    @changCateSub="changCateSub">
      </tab-control2>
    </scroll>
    <scroll class="content2">
      <div>
        <subcategories :subcategories-date="subcategoriesSubmit"></subcategories>
        <tab-control :titles="['流行','新款','精选']"
                     @tabClick="tabClick"
                     ref="tabControl2"
        />
        <good-list :goods="categoriesSubmit"/>
      </div>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl2 from "./childComps/tab-control2";
import Subcategories from "./childComps/Subcategories";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goodsList/GoodList";
import {getSubcategory,getCategoryDetail,getCategory} from "network/category"
import {POP,NEW,SELL} from "@/common/const"
  export default {
    name: "Category",
    components:{NavBar,Scroll,TabControl2,Subcategories,TabControl,GoodList},
    data(){
      return{
        categories:[],
        categoriesData:{},
        currentIndex:-1,
        currentType:'pop'
      }
    },
    computed:{
      subcategoriesSubmit(){
        if (this.currentIndex === -1) return {}
        return this.categoriesData[this.currentIndex].subcategories
      },
      categoriesSubmit(){
        if (this.currentIndex === -1) return []
        return this.categoriesData[this.currentIndex].categoryDetail[this.currentType];
      }

    },
    methods: {
      _getCategories() {
        getCategory().then(res => {
          this.categories = res.data.data.category.list;
          //初始化categoriesDate
          /*1、中括号法可以用变量作为属性名,而点方法不可以;

              2、中括号法可以用数字作为属性名,而点语法不可以;

              3、中括号法可以使用js的关键字和保留字作为属性名,而点语法不可以(尽量避免在变量或者属性中使用关键字或保留字);
            * */
          for (let i = 0; i < this.categories.length; i++) {
            this.categoriesData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          this._getSubcategories(0)
        })
      },
      _getSubcategories(index) {
        this.currentIndex = index
        const maitKey = this.categories[index].maitKey
        getSubcategory(maitKey).then(res => {
          this.categoriesData[index].subcategories = res.data.data;
          this.categoriesData = {...this.categoriesData};
          console.log(index);
          this._getCategoryDetail(POP);
          this._getCategoryDetail(NEW);
          this._getCategoryDetail(SELL);
        })
      },
      _getCategoryDetail(type) {
        const miniWallkey = this.categories[this.currentIndex].miniWallkey
        getCategoryDetail(miniWallkey, type).then(res => {
          this.categoriesData[this.currentIndex].categoryDetail[type] = res.data
          this.categoriesData = {...this.categoriesData}

        })
      },
      changCateSub(index) {
        this._getSubcategories(index)
      },
        tabClick(index) {
          switch (index) {
            case 0:
              this.currentType = 'pop'
              break
            case 1:
              this.currentType = 'new'
              break
            case 2:
              this.currentType = 'sell'
              break
          }
        }
    },
    created(){
      this._getCategories()
    }

}

</script>

<style scoped>
.navbar{
  color: white;
  background-color: var(--color-tint);
  width: 100%;
}
.content{
  position: absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
  z-index: -1;
}
.content2{
  position: absolute;
  top:44px;
  bottom: 51px;
  left: 30%;
  right: 0;
  z-index: -1;
}
</style>