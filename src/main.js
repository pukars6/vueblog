/* eslint-disable */
// 在main.js下关闭eslint规范
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/main.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import APlayer from '@moefe/vue-aplayer';
import 'swiper/dist/css/swiper.css'
import axios from 'axios'

//导入自定义组件
import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import HomeCard from './components/HomeCard.vue'
import PostList from './components/PostList.vue'
import Footer from './components/Footer.vue'

//element组件按需加载
import {Icon} from 'element-ui'
import {Backtop} from 'element-ui'
import {Loading} from 'element-ui'
Vue.use(Icon);
Vue.use(Backtop);
Vue.use(Loading);

//外部组件引用
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png', // set the default cover
  productionTip: false, // disable console output
});
Vue.use(VueAwesomeSwiper, /* { default global options } */)

//自定义组件
Vue.component('m-header',Header)
Vue.component('m-footer',Footer)
Vue.component('m-homecard',HomeCard)
Vue.component('m-swiper',Swiper)
Vue.component('m-postlist',PostList)

//跳转页面后回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
