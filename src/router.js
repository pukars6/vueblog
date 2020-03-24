import Vue from 'vue'
import Router from 'vue-router'

//components
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import Tag from './views/Tag.vue'
import Category from './views/Category.vue'
import Archive from './views/Archive.vue'
import About from './views/About.vue'
import Friend from './views/Friend.vue'
import Search from './views/Search.vue'


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
        },
        {
            path:'/archives',
            name:'archive',
            component:Archive,
            meta:{
                // 页面标题title
                title: '文章归档 | PUKARS的博客'
            }
        },
        {
            path:'/about',
            name:'about',
            component:About,
            meta:{
                // 页面标题title
                title: '关于 | PUKARS的博客'
            }
        },
        {
            path:'/friend',
            name:'friend',
            component:Friend,
            meta:{
                // 页面标题title
                title: '友情链接 | PUKARS的博客'
            }
        },
        {
            path:'/search',
            name:'search',
            component:Search,
            meta:{
                // 页面标题title
                title: '搜索 | PUKARS的博客'
            }
        }
    ],
})

export default router