<template>
  <div class="homecard-container">
      <div class="homecard">
            <div class="recommend-music">
                <span class="recommend-music-body"><i class="el-icon-headset recommend-music-icon"></i>听听音乐</span>
                 <div class="homecard-player-body">
                    <aplayer class="homecard-player" :audio="audio" :lrcType="3" />
                </div>
            </div>
            <div class="recommend-post">
                <span class="recommend-post-article"><i class="el-icon-sunny recommend-post-article-icon"></i>推荐文章</span>
                 <div class="homecard-post-body">
                         <div :key="index" v-for="(item,index) in postList" class="homecard-post-item">
                             
                            <div class="recomment-post-card">
                                <div class="post-img-body">
                                 <img class="post-img" :src="item.imgUrl" alt="">
                                </div>
                                <div class="post-info">
                                    <div class="post-info-detail">
                                        <span class="card-category">{{item.category}}</span>
                                        <h3 class="card-title">{{item.title}}</h3>
                                    </div>
                                    <div class="post-btn-detail"></div>
                                    <button class="card-button"><i class="el-icon-view post-btn-icon"></i>阅读更多</button>
                                </div>
                            </div>
                         </div>
                </div>
            </div>
           
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
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
        postList:[{
            imgUrl:require('../assets/img/swiper/1.jpg'),
            title:'如何用 es6+ 写出优雅的 js 代码',
            category:"算法设计"
        },{
            imgUrl:require('../assets/img/swiper/2.jpg'),
            title:'利用 github webhooks 实现自动化部署',
            category:"前端"
        },{
            imgUrl:require('../assets/img/swiper/3.jpg'),
            title:'实现 ssh 免密登陆服务器',
            category:"后端"
        },{
            imgUrl:require('../assets/img/swiper/4.jpg'),
            title:'一些练手小项目的汇总',
            category:"生活杂谈"
        }
        ]
        };
    },
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
    padding: 2rem 3rem;
    margin:0 auto;
    height: auto;
    width: 84%;
    z-index: 1;
    background: #fff;
    /* position: absolute; */

}

.recommend-music{
    margin-top: 2rem;
    margin-bottom: 4rem;
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
    font-size: 2.2rem;
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
    margin-top: 6rem;
    margin-bottom: 2rem;
    text-align: center;
    width: 100%;
    height: auto;
}

.recommend-post-article{
    color: #34495e;
    font-size: 2.2rem;
    font-weight: 700;
    
}

.homecard-post-body{
    /* margin-top: 2rem; */
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
    padding: 2.4rem;
    width: 50%;
    height:26rem;

}

.recomment-post-card{
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    border-radius: 1.2rem;
    background-color:blue ;
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
.card-button:hover{
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
    font-size: 2rem;
    font-weight: bold;
    line-height: 2.6rem;
}


</style>