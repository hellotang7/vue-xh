// 导入Vue和VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入组件
import HelloWorld from "@/page/HelloWorld.vue";
import xhHome from "@/page/xh-home.vue";
import xhChuru from "@/page/xh-churu.vue";
import xhShenling from "@/page/xh-shenling.vue";
import xhFenxi from "@/page/xh-fenxi.vue";
import xhTaizhang from "@/page/xh-taizhang.vue";
import xhPandian from "@/page/xh-pandian.vue";
import xhXitong from "@/page/xh-xitong.vue";
import xhMain from "@/page/xh-main.vue";

// 调用 Vue.use(VueRouter)
Vue.use(VueRouter)

// 设置路由和面包屑层级
const routes = [
    //第一级
    {
        path: '/', component:xhMain ,meta: {title: '首页'},redirect:'/home', //当路径为/时重定向 ,
        children: [
            //第二级
            {path: '/home', component: xhHome, meta: {title: ''}},
            {path: '/churu', component: xhChuru, meta: {title: '出入管理'}},
            {path: '/shenling', component: xhShenling, meta: {title: '申领管理'}},
            {path: '/fenxi', component: xhFenxi, meta: {title: '分析统计'}},
            {path: '/taizhang', component: xhTaizhang, meta: {title: '台账管理'}},
            {path: '/pandian', component: xhPandian, meta: {title: '盘点管理'}},
            {path: '/xitong', component: xhXitong, meta: {title: '系统设置'}},
            {path: '/sy', component: HelloWorld, meta: {title: '试验页'}},
        ]
    },


]


const router = new VueRouter({
    routes
})

export default router
