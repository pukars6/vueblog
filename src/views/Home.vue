<template>
    <div class="home-page">
        <m-header></m-header>
        <m-swiper></m-swiper>
        <div class="home-content">
            <m-homecard>
            </m-homecard>
            <m-postlist :axiosListParams="axiosListParams">
            </m-postlist>
        </div>
        <m-footer></m-footer>
    </div>
</template>

<script>
export default {
    data(){
        return{
            axiosListParams:Object
        }
    },
    created(){
        this.axiosListParams ={
                page:1,
                pageSize:9
            }
    },
    destroyed () {
    window.removeEventListener('scroll', this.handleScroll); // 离开页面 关闭监听 不然会报错
}
}
</script>

<style>

.home-content{
    padding-bottom: 2rem;
    margin-top: -2rem;
    width: 100%;
    height: auto;
    background: rgb(234,234,234);
}
</style>