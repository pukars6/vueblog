import Vue from 'vue'
import Router from 'vue-router'

//components
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
Vue.use(Router)

const router = new Router({
    mode:'history',//路由模式，nginx需要配置
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/post/:id',
            name:'detail',
            component:Detail
        }
    ],
})

export default router