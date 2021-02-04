import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 } // router跳转后scrollTop初始化
    },
    routes: [
        {
            path: "/",
            name: "homepage",
            component: () => import("@/view/hompage/homepage.vue"),
            meta: {
                title: "我的博客网站",
                keepAlive: false
            }
        },
        {
            path: "/userCenter",
            name: "个人中心",
            component: () => import("@/view/userCenter/index.vue"),
            meta: {
                title: "个人中心",
                keepAlive: false
            }
        },
        {
            path: "/articleDetails",
            name: "articleDetails",
            props: true,
            component: () => import("@/view/article/articleDetails"),
            meta: {
                title: false,
                keepAlive: false
            }
        },
        {
            path: "/test",
            name: "test",
            component: () => import("@/view/test.vue"),
            meta: {
                title: "测试页面",
                keepAlive: true
            }
        },
    ]
})

export default router