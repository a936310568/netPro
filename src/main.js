import Vue from 'vue'
import VueWaypoint from "vue-waypoint";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'viewerjs/dist/viewer.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.use(VueWaypoint);
Vue.config.productionTip = false

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
