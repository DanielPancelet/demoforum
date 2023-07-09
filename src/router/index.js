import {createRouter, createWebHistory} from "vue-router";
import InfoPage from "@/pages/InfoPage.vue";
import MainPage from "@/pages/MainPage.vue";
import SicretPage from "@/pages/SicretPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import PostInfo from "@/pages/PostInfo.vue";
import store from "@/store/index";

const routes = [
  {
    path:'/',
    component: MainPage
  },
  {
    path:'/blogs',
    component: InfoPage
  },
  {
    path:'/blogs/:id',
    component: PostInfo
  },
  // {
  //   path:'/private',
  //   component: SicretPage,
  //   meta:{
  //     requiresAuth:true,
  //   }
  // },
  {
    path:'/:username',
    component:ProfilePage,
    meta:{
      requiresAuth:true,
    }
  },
]

const router = createRouter({
  routes,
  history:createWebHistory(process.env.BASE_URL),

})

// Добавляем логику для защиты маршрутов

export default router;