import Vue from 'vue';
import App from './App.vue';
import router from '../src/router/router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

Vue.use(ElementUI)
Vue.use(mavonEditor)

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title=to.meta.title;
    next();
  }
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
