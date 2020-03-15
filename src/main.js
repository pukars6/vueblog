import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Header from './components/Header.vue'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.component('m-header',Header)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
