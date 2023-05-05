import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from "@/router";
import './api/mock'
import Cookie from "js-cookie";

Vue.use(ElementUI);

// 添加全局前置导航守卫
router.beforeEach((to, form, next) => {
      //判断toKen存不存在
      const toKen = Cookie.get('toKen')
      if (!toKen && to.name !== 'login') {
        next({name: 'login'})
      }  else {
        next()
      }
    }
)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
