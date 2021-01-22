import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router=new Router({
    routes:[{
        path:"/",
        name:"homepage",
        component:()=>import("@/view/hompage/homepage.vue"),
        meta:{
            title:"我的博客网站",
            keepAlive:false
        }
    },{
        path:"/test",
        name:"test",
        component:()=>import("@/view/test.vue"),
        meta:{
            title:"测试页面",
            keepAlive:true
        }
    }]
})

export default router