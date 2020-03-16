import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/main.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import APlayer from '@moefe/vue-aplayer';
import 'swiper/dist/css/swiper.css'

import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import HomeCard from './components/HomeCard.vue'
import PostList from './components/PostList.vue'


import {Icon} from 'element-ui'
Vue.use(Icon);

Vue.config.productionTip = false
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png', // set the default cover
  productionTip: false, // disable console output
});
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.component('m-header',Header)
Vue.component('m-homecard',HomeCard)
Vue.component('m-swiper',Swiper)
Vue.component('m-postlist',PostList)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
