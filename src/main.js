import { createApp } from 'vue'
import App from '@/App.vue'
import components from '@/components/UI'
import router from '@/router/index'
import store from "@/store/index"
import Vuetify from "@/plugins/vuetify";
import directives from "@/directives";
import lodash from "lodash";

const app = createApp(App);
components.forEach(component =>
    app.component(component.name,component)
)
directives.forEach(directive =>{
  app.directive(directive.name,directive)
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Если требуется авторизация для доступа к маршруту
    if (!localStorage.getItem('token')) {
      // Если пользователь не авторизован, перенаправляем на страницу авторизации
      next('/')
    } else {
      // Если пользователь авторизован, разрешаем доступ к маршруту
      next()
    }
  } else {
    // Если маршрут не требует авторизации, разрешаем доступ к нему
    next()
  }
})

app
    .use(Vuetify,{
      iconfont: 'md'
    })
  .use(router)
  .use(store)
    .use(lodash)
  .mount('#app')
