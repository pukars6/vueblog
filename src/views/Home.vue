<template>
    <div class="home-page">
        <m-header></m-header>
        <swiper class="swiper-wrapper" :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
                <div class="swiper-img-list">
                    <img class="swiper-img-item" :src="item"/>
                </div>
            </swiper-slide>
            <!-- 分页器 -->
            <div class="swiper-pagination"  slot="pagination"></div>   
        </swiper>
    </div>
</template>

<script>

export default {
    data(){
        return{
            swiperOption:{
                    //显示分页
                    pagination: {
                      el: '.swiper-pagination'
                    },

                    //自动轮播
                    autoplay: {
                      delay: 2000,
                      //当用户滑动图片后继续自动轮播
                      disableOnInteraction: false,
                    },
                    //开启循环模式
                    loop: true
                },
            carouselArr:[
                require('../assets/img/swiper/1.jpg'),
                require('../assets/img/swiper/2.jpg'),
                require('../assets/img/swiper/3.jpg'),
                require('../assets/img/swiper/4.jpg'),
                require('../assets/img/swiper/5.jpg'),
                require('../assets/img/swiper/6.jpg')

            ]
        }
    }
}
</script>

<style>
.swiper-wrapper{
    width: 100%;
   
}

.swiper-img-list{
    position: relative; 
    height: 100vh;
    overflow: hidden;
}

.swiper-img-item{
    width: 100%;
    position: absolute;
    top:-10%;
}

.swiper-img-list:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0px;
    right: 0px;
    background: rgba(153, 50, 204, 0.6);
    height: 100%;
    /* z-index: 0; */
}

.swiper-pagination{
    bottom: 50px !important; 
    color:white !important;
}

.swiper-pagination-bullet-active{
    background: #fff !important;
}

.swiper-pagination-bullet{
    background: #fff !important;
    width:10px !important;
    height:10px !important;
}
</style>