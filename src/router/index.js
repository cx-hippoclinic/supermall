import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shopcart = () => import('../views/cart/Shopcart')
const Profile = () => import('../views/profile/Profile')
const Details = () => import('../views/details/Details')
Vue.use(Router)
const routes =[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopCart',
    component:Shopcart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path: '/details/:id',
    component:Details,
  }
]
export default new Router({
  routes,
  mode:'history'
})
