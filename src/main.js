import Vue from 'vue';
import App from './App.vue';
import router from '../src/router/router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import 'mavon-editor/dist/markdown/github-markdown.min.css';
import axios from 'axios'
import * as directives from './directives/index'

Vue.use(ElementUI)
Vue.use(mavonEditor)

Vue.config.productionTip = false
Vue.prototype.$http = axios

//  全局注册自定的vue指令
Object.keys(directives).forEach((item,index)=>{
  Vue.directive(item,directives[item])
})

// 根据router配置动态设置title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})


axios.defaults.baseURL = "/blog";
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
