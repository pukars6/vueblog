<template>
    <div class="header" :class="{ showheader:showBackground}">
        <div class="brand-logo">
            <img class="header-logo" :src=logourl />
            <span class="logo-span">PUKARS</span>
        </div>
       <div class="nav-right">
           <router-link :key="item.name" v-for="(item) in navItemList" class="navitem-link" :to="{path:'/'}">
            <div class="navitem">
                <i :class="item.icon"></i>
                {{item.name}}
            </div>
           </router-link>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            logourl:require('../assets/nav-logo.png'),
            navItemList:[
                {name:'首页',icon:'el-icon-s-home'},
                {name:'标签',icon:'el-icon-collection-tag'},
                {name:'分类',icon:'el-icon-folder-opened'},
                {name:'归档',icon:'el-icon-notebook-1'},
                {name:'关于',icon:'el-icon-s-custom'},
                {name:'友情链接',icon:'el-icon-position'},
                {icon:'el-icon-search'}
            ],
            showBackground:false

        }
    },
    methods:{
        scrollToTop() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // console.log("scrollTop:"+scrollTop)
        scrollTop >100? this.showBackground =true: this.showBackground =false
        }
    },
    mounted:function (){
        window.addEventListener('scroll', this.scrollToTop)
    },
}
</script>

<style>
.header{
    transition: all .4s;
    width: 100%;
    height: 5rem;
    z-index: 2;
    position: fixed;
    padding: 0 7rem;
    top:0;
    
}

.showheader{
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 7px 10px 0 rgba(0, 0, 0, 0.12);
    background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
}

.brand-logo{
    text-align: center;
    font-family: "Microsoft YaHei";
    position: absolute;
    color: #fff;
    padding: 0;
    
    left:6rem
}

.header-logo{
    padding-top:.45rem;
    height: 4rem

}

.logo-span{
    line-height: 4rem;
    display: inline-block;
    font-size: 2.6rem;
    line-height:5rem;
    height: 5rem;
    text-align: center;
}

.nav-right{
    text-align: center;
    line-height: 5rem;
    font-size: 1.2rem;
    color:#fff;
    display: flex;
    justify-content: center;
    position: absolute;
    width: auto;
    right: 6rem;
    height: 5rem;
    
}

.navitem{
    transition: all .4s;
    text-decoration: none !important;
    padding: 0 1.2rem;
    width: auto;
    height:5rem;
}

.navitem:hover{
    background: rgba(0, 0, 0, 0.2)
}

.navitem-link{
    color:white;
    text-decoration: none;
}

.router-link-active {
    text-decoration: none;
}
</style>