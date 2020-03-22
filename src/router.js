import Vue from 'vue'
import Router from 'vue-router'

//components
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import Tag from './views/Tag.vue'
import Category from './views/Category.vue'

Vue.use(Router)

const router = new Router({
    mode:'history',//路由模式，nginx需要配置
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home,
            meta:{
                // 页面标题title
                title: 'PUKARS的博客'
            }
        },
        {
            path:'/post/:id',
            name:'detail',
            component:Detail,
            meta:{
                // 页面标题title
                title: 'PUKARS的博客'
            }
        },
        {
            path:'/tag',
            name:'tag',
            component:Tag,
            meta:{
                // 页面标题title
                title: '文章标签 | PUKARS的博客'
            }
        },
        {
            path:'/category',
            name:'category',
            component:Category,
            meta:{
                // 页面标题title
                title: '文章分类 | PUKARS的博客'
            }
        }
    ],
})

export default router