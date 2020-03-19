<template>
  <div class="homecard-container">
    <a-spin :spinning="spinning" tip="加载中">
      <div class="homecard">
            <div class="recommend-music">
                <span class="recommend-music-body">
                    <a-icon class="recommend-music-icon" type="customer-service" />
                    听听音乐</span>
                 <div class="homecard-player-body">
                    <aplayer class="homecard-player" :audio="audio" :lrcType="3" />
                </div>
            </div>
            <div class="recommend-post">
                <span class="recommend-post-article" >
                    <a-icon class="recommend-post-article-icon" type="fire" />
                    热门文章</span>
                 <div 
                 class="homecard-post-body"
                 >
                        <div :key="index" v-for="(item,index) in postList" class="homecard-post-item">
                            <div class="reveal-bottom recomment-post-card ">
                                <div class="post-img-body">
                                 <img class="post-img" :src="item.imgUrl" alt="">
                                </div>
                                <div class="post-info">
                                    <div class="post-info-detail">
                                        <span class="card-category">{{item.category}}</span>
                                        <h3 class="card-title">{{item.title}}</h3>
                                        <h3 class="card-content">{{item.content}}</h3>
                                    </div>
                                    <div class="post-btn-detail"></div>
                                    <button class="card-button" @click="jumpToDetail(item.id)"><i class="el-icon-view post-btn-icon"></i>阅读更多</button>
                                </div>
                            </div>
                         </div>
                </div>
            </div>
           
      </div>
    </a-spin>
  </div>
</template>

<script>
import scrollReveal from 'scrollreveal';
import servicePath from '../config/apiUrl'
export default {
    
    data() {
        return {
            //aplayer内容
            audio: [
            {
            name: '东西（Cover：林俊呈）',
            artist: '纳豆',
            url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
            cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
            lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
            },
            {
            name: '响喜乱舞（Cover：MARiA）',
            artist: '泠鸢yousa',
            url: 'https://cdn.moefe.org/music/mp3/kyoukiranbu.mp3',
            cover: 'https://p1.music.126.net/AUGVPQ_rVrngDH9ocQrn3Q==/109951163613037822.jpg?param=300y300', // prettier-ignore
            lrc: 'https://cdn.moefe.org/music/lrc/kyoukiranbu.lrc',
            },
            {
            name: '啵唧',
            artist: 'Hanser',
            url: 'https://cdn.moefe.org/music/mp3/kiss.mp3',
            cover: 'https://p1.music.126.net/K0-IPcIQ9QFvA0jXTBqoWQ==/109951163636756693.jpg?param=300y300', // prettier-ignore
            lrc: 'https://cdn.moefe.org/music/lrc/kiss.lrc',
            },
            ],
            postList:[
            ],
            scrollReveal: scrollReveal(),
            spinning:true
        };
    },
    methods:{
        //跳转post详情页
        jumpToDetail(id){
            this.$router.push('/post/'+id)
        }
    },
    mounted() {
    // wowjs动画
    this.scrollReveal.reveal('.reveal-bottom', {
        // 动画的时长
        duration: 400,
        // 延迟时间
        delay: 300,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'bottom',
        // 回滚的时候是否再次触发动画
        reset: true,
        // 在移动端是否使用动画
        mobile: true,
        // 滚动的距离，单位可以用%，rem等
        distance: '3rem',
        // 其他可用的动画效果
        opacity: 0.001,
        easing: 'linear',
        scale: 0.9,
    });
    },
    updated(){
        // mounted更新postList后需要重新加载渲染
        this.scrollReveal.reveal('.reveal-bottom', {
        // 动画的时长
        duration: 400,
        // 延迟时间
        delay: 300,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'bottom',
        // 回滚的时候是否再次触发动画
        reset: true,
        // 在移动端是否使用动画
        mobile: true,
        // 滚动的距离，单位可以用%，rem等
        distance: '3rem',
        // 其他可用的动画效果
        opacity: 0.001,
        easing: 'linear',
        scale: 0.9,
    });
    },
    created(){
        //获取热门文章列表
        this.axios.get(servicePath.getPostList,{
            params:{
                page:1,
                pageSize:4,
                order:'viewCount DESC'
            }
            
        })
        .then((res=>{
                this.postList = res.data.rows
                 this.spinning = false
               
           }))
         
    }
}
</script>

<style>
.homecard-container{
    z-index: 1;
    position: relative;
    background: rgb(234,234,234) transparent;
    width: 100%;
    height: auto;


}

.homecard{
    border-radius: .8rem;
    box-shadow: 0 1rem 1rem rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) !important;
    padding: 2rem 2rem 0;
    margin:0 auto;
    height: auto;
    width: 74%;
    z-index: 1;
    background: #fff;
    /* position: absolute; */

}

.recommend-music{
    margin-top: 2rem;
    text-align: center;
    width: 100%;
    height: auto;
}

.recommend-music-icon {
    margin-right: .6rem;
}
.recommend-post-article-icon{
     margin-right: .6rem;
}

.recommend-music-body{
    color: #34495e;
    font-size: 2rem;
    font-weight: 700;
    
}

.homecard-player-body{
    text-align: left;
    width: 60%;
    height: auto;
    margin:1rem auto;
    margin-top: 2rem;
    box-shadow: 0 .2rem 1rem 0 rgba(0,0,0,.2), 0 .5rem .5rem -.6rem rgba(0,0,0,.5) !important;
}

.homecard-player{

    margin-top: 1.6rem;
    margin:0;
    font-family: 'Microsoft YaHei';
    width: 100%;
    /* height: 3rem; */
}

.aplayer-title{
    font-size: 1.2rem !important;
}
.aplayer-author{
    font-size: .8rem !important;
}

.recommend-post{
    margin-top: 4rem;
    padding-bottom: 1.2rem;
    margin-bottom: 2rem;
    text-align: center;
    width: 100%;
    height: auto;
}

.recommend-post-article{
    color: #34495e;
    font-size: 2rem;
    font-weight: 700;
    
}

.homecard-post-body{
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;

}
.post-img-body{
    width: 100%;
    height: 100%;
    filter: brightness(.7);
}

.post-img-body .post-img{
    
    height: 100%;
}

.homecard-post-item{
    
    padding:1.2rem 1.6rem ;
    width: 50%;
    height:22rem;

}

.recomment-post-card{
    box-shadow: 0 1rem 2rem rgba(50, 50, 93, .1), 0 .5rem 1rem rgba(0, 0, 0, .07);
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background-repeat:no-repeat;
    background-size:100% 100%;
    
}

.post-info{
    padding: 1rem;
    left:10%;
    width: 80%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

}

.post-info-detail{
    width: 100%;
}

.post-btn-detail{
    width: 100%;
}

.card-content{
    font-weight: 400;
    margin:1rem 1rem;
    color: hsla(0, 0%, 100%, .78) !important;
    font-size: .9rem;
}

.card-button{
    
    transition: all .2s;
    cursor: pointer;
    margin-top: 3rem;
    font-size: 1.1rem;
    color: #fff;
    background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
    border: none;
    border-radius: 2rem;
    margin:0 auto;
    width: 8rem;
    height: 3rem;
}

.post-btn-icon{
    margin-right: .4rem;
}


.recomment-post-card .card-category{
    cursor: pointer;
    display: inline-block;
    margin-bottom: 4rem;
    color: hsla(0, 0%, 100%,.8) !important;
    font-size: 1.1rem;
    font-weight: 500;
}
.recomment-post-card .card-title{
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2rem;
}

@media screen and (max-width:1440px){
    .homecard{
        width: 80%;
    }
    .homecard-post-item{
        padding: 1.2rem 1.0rem;
    }
}
@media screen and (max-width:1024px){
    .homecard{
        width: 86%;
    }
    .homecard-post-item{
        padding:1.2rem .8rem;
    }
}

@media screen and (max-width:640px){
    .homecard{
        width: 94%;
        padding: 1rem 1rem .2rem;
    }
    .recommend-music-body{
        font-size: 1.8rem;
    }
    .homecard-post-item{
        width: 100%;
        padding: 1.2rem 0 0;
    }
    .homecard-player-body{
        width: 100%;
    }
    .recommend-post{
    padding-bottom: 0;

    }
    .recommend-post-article{
        font-size: 1.8rem;
    }
    .recommend-music{
    margin-top: .4rem;
    }
    .post-info{
        left: 0;
        width: 100%;
    }
    .card-button{
        width: 7rem;
        height: 2.8rem;
        font-size: 1rem;
    }
}

</style>