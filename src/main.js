import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import infiniteScroll from 'vue-infinite-scroll'
import { VueMasonryPlugin } from 'vue-masonry';

Vue.config.productionTip = false
Vue.use(infiniteScroll)
Vue.use(VueMasonryPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
