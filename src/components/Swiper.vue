<template>
        <swiper class="swiper-wrapper" :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
                <div class="swiper-img-list">
                    <div class="swiper-img-container">
                        <img class="swiper-img-item" :src="item.imgurl"/>
                    </div>
                    <div class="swiper-content">
                        <span class="swiper-title">{{item.title}}</span>
                        <span class="swiper-read-info">{{item.description}}</span> 
                        <button class="swiper-read-btn">
                            <i class="el-icon-view"></i>
                            阅读更多
                        </button>

                            
                    </div>
                </div>
            </swiper-slide>
            <!-- 分页器 -->
            <div class="swiper-pagination"  slot="pagination"></div>   
        </swiper>
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
                      delay: 11000,
                      //当用户滑动图片后继续自动轮播
                      disableOnInteraction: false,
                    },
                    //开启循环模式
                    loop: true,
                    height: window.innerHeight
                },
            carouselArr:[
                {
                    title:'PUKARS BlOG',
                    description:'No Bug No Life',
                    imgurl:require('../assets/img/swiper/1.jpg')
                },
                
                {
                    title:'主题参考',
                    description:'基于 Hexo 的 hexo-theme-matery主题',
                    imgurl:require('../assets/img/swiper/6.jpg')
                },
                {
                    title:'关于本站',
                    description:'Just For Practice',
                    imgurl:require('../assets/img/swiper/4.jpg')
                }

            ],
        }
    },

}
</script>

<style>
.swiper-wrapper{
    width: 100%;
    height: 100vh;
    /* max-height: 100vh; */
   
}

.swiper-img-list{
    
    position: relative; 
    height: auto;
    overflow: hidden;
}

.swiper-img-item{
    width:100% ;
    /* position: absolute; */
    top:-10%;
}

.swiper-content{

    color: white;
    position: absolute;
    width: 100%;
    top:30%;
    text-align: center;


}

.swiper-title{
    word-break:normal; 
    display:block; 
    white-space:pre-wrap;
    word-wrap : break-word ;
    overflow: hidden ;
    height: auto;
    width: 50%;
    margin:0 auto;
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 700;
}

.swiper-read-info{
    color: #eee;
    word-break:normal; 
    display:block; 
    white-space:pre-wrap;
    word-wrap : break-word ;
    overflow: hidden ;
    height: auto;
    width:75%;
    margin:0 auto;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2rem;
    margin-top: 2rem;
}

.swiper-read-btn{
    transition: all .2s;
    cursor: pointer;
    margin-top: 3rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: transparent ;
    border: .12rem solid #fff;
    /* z-index: 3; */
    border-radius: 2rem;
    width: 12rem;
    height: 4rem;
}

.swiper-read-btn:hover{
    border: .12rem solid rgb(244,67,54) ;
    background-color: rgb(244,67,54) ;
}

.swiper-img-container:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0px;
    right: 0px;
    background: rgba(255, 120, 0, 0.7);
    height: 100%;
    z-index: 0;
}



.swiper-pagination{
    bottom: 3rem !important; 
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


@media screen and (max-width:1440px){
    .swiper-title{
        font-size: 4rem;
    }
    .swiper-read-info{
        margin-top: 1.8rem;
    }
    .swiper-img-item{
    height: 100vh;
    top:-4%;
    }
}
@media screen and (max-width:1024px){
    .swiper-title{
        font-size: 4rem;
    }

   

}

@media screen and (max-width:640px){
    .swiper-title{
        width: 94%;
        font-size: 2.8rem;
    }
    .swiper-read-info{
        font-size: 1.6rem;
        margin-top: 1rem;
    }
    .swiper-read-btn{
        font-family: "Microsoft YaHei";
        margin-top: 2rem;
        font-size: .9rem;

        border: .06rem solid #fff;
        border-radius: 2rem;
        width: 6.4rem;
        height:2.4rem;
    }

}
</style>