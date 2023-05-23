// 导入Vue和VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'


//一级页面
import xhMain from "@/page/xh-main.vue";
import xhLogin from "@/page/xh-login.vue";

//二级页面
import xhHome from "@/page/xh-home.vue";
import xhChuru from "@/page/xh-churu.vue";
import xhShenling from "@/page/xh-shenling.vue";
import xhFenxi from "@/page/xh-fenxi.vue";
import xhTaizhang from "@/page/xh-taizhang.vue";
import xhPandian from "@/page/xh-pandian.vue";
import xhXitong from "@/page/xh-xitong.vue";
//试验
import HelloWorld from "@/page/HelloWorld.vue";

//三级页面
import churuDanju from "@/page/churu/churu-danju.vue";
import churuMingxi from "@/page/churu/churu-mingxi.vue";
import churuDaoru from "@/page/churu/churu-daoru.vue";

// 调用 Vue.use(VueRouter)
Vue.use(VueRouter)

// 设置路由和面包屑层级
const routes = [
    //第一级
    {
        path: '/', component:xhMain ,meta: {title: '首页'},redirect:'/home', //当路径为/时重定向 ,
        children: [
            //第二级
            {path: '/home', component: xhHome, name: 'home', meta: {title: ''}},
            {path: '/churu', component: xhChuru, meta: {title: '出入管理'},
                children: [
                    //第三级
                    {path:'/churu/danju',component:churuDanju,meta:{title:'出入单据'}},
                    {path:'/churu/mingxi',component:churuMingxi,meta:{title:'出入明细'}},
                    {path:'/churu/daoru',component:churuDaoru,meta:{title:'作业单据导入'}}
                ]
            },
            {path: '/shenling', component: xhShenling, meta: {title: '申领管理'}},
            {path: '/fenxi', component: xhFenxi, meta: {title: '分析统计'}},
            {path: '/taizhang', component: xhTaizhang, meta: {title: '台账管理'}},
            {path: '/pandian', component: xhPandian, meta: {title: '盘点管理'}},
            {path: '/xitong', component: xhXitong, meta: {title: '系统设置'}},
            {path: '/sy', component: HelloWorld, meta: {title: '试验页'}},
        ]
    },
    {
        path: '/login',
        component: xhLogin, //登录页面
        name: 'login'
    },


]


const router = new VueRouter({
    routes
})

export default router
