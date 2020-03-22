<template>
  <div class="post-list">
      <a-spin :spinning="spinning"  id="postlist-loading">
      <div class=" post-list-container" >
            <div 
            class="post-item post-reveal-bottom" 
            :key="index" 
            v-for="(item,index) in postList" 
            >
                    <router-link 
                    class="item-header" 
                    :to="{path:'/post/'+item.id}">
                        <img class="item-img" :src="item.imgUrl" alt="">
                        <div class="item-title">{{item.title}}</div>
                    </router-link> 
                    <div class="item-info">
                        <div class="item-content">
                            {{item.content}}
                        </div>
                        <div class="item-description">

                            <div class="item-time"><a-icon class="item-icon" type="clock-circle" />{{item.createdAt}}</div>
                            <div class="item-category">
                                <a-icon class="item-icon" type="folder" />
                                <span :key="index" v-for="(cat,index) in item.categories">
                                    {{cat.name}}
                                </span>
                                </div>
                        </div>
                        <div class="item-tag-list">
                            <div :key="index" v-for="(tag,index) in item.tags" class="item-tag">
                                {{tag.name}}
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
    data(){
        return{
            scrollReveal: scrollReveal(),
            postList:[],
            spinning:true
            }
    },
    method:{
        animatePulse(){
            console.log("1")

        }
    },
    updated(){
        // mounted更新postList后需要重新加载渲染
          this.scrollReveal.reveal('.post-reveal-bottom', {
            // 动画的时长
            duration:600,
            // 延迟时间
            delay: 200,
            // 动画开始的位置，'bottom', 'left', 'top', 'right'
            origin: 'bottom',
            // 回滚的时候是否再次触发动画
            reset: true,
            // 在移动端是否使用动画
            mobile: true,
            // 滚动的距离，单位可以用%，rem等
            distance: '10rem',
            // 其他可用的动画效果
            opacity: 0.001,
            easing: 'linear',
            scale: 0.1,
        });
    },
    created(){
        
        // 获取最新文章列表
        this.axios.get(servicePath.getPostList,{
            params:{
                page:1,
                pageSize:9
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
.post-list{
    min-height: 20vh;
    margin-top: 2rem;
    width: 100%;
    height:auto;
}
.post-list-container{
    display: flex;
    justify-content: center;
    /* align-items:flex-end; */
    flex-wrap: wrap;
    width: 74%;
    height:auto;
    margin:0 auto;
}

.post-item{
    margin:1rem .65rem;
    background: #fff;
    width: 30%;
    height: auto;
    border-bottom-left-radius: .8rem;
    border-bottom-right-radius: .8rem;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07) !important;
}


.post-item .item-header{
    background-color: transparent;
    position: relative;
    width: 100%;
    height: 14rem;
    display:block;
    


}

.post-item .item-img{
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    filter: brightness(.7);
}

.post-item .item-title{
    color: #fff;
    position: absolute;
    display: block;
    left:0;
    bottom: 0;
    max-width: 100%;
    padding: .8rem;
    font-size: 1.6rem;
    font-weight: 300;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
}

.post-item .item-info{
    height: auto;
    width: 100%;
    padding:1rem 1rem .5rem 1rem;
}

.post-item .item-content{
    color: #34495e;
    overflow: hidden;
    width: 100%;
    height: 4rem;
    text-overflow:clip;
    margin-bottom: .2rem;
    word-break: break-all;
}

.post-item .item-description{
    line-height: 1.2rem;
    padding:.4rem .1rem;
    border-bottom: 1px solid rgba(160,160,160,0.2);
    display: flex;
    justify-content: space-between;

}

.post-item .item-icon{
    margin-right: .1rem;
    color:rgb(52,73,94);
    font-size:1rem;
}

.post-item .item-category{
    color:rgb(52,73,94);
    font-size:1rem;
}

.post-item .item-time{
    color: #525f7f;
    font-size:.9rem;
}

.post-item .item-tag-list{
    display: flex;
    justify-content: flex-start;
    margin-top: .5rem;
}

.post-item .item-tag{
    margin-right: .4rem;
    padding:.2rem 1rem;
    font-size: .8rem;
    font-weight: 400;
    color: #fff;
    width: auto;
    height: 1.6rem;
    text-align: center;
    border-radius: 1rem;
    background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
   
}

.loading{
    margin:2rem 0 1rem;
    width: 100%;
    height: auto;
}
.loading-btn{
    font-size: 1.2rem;
    font-weight: 300;
    color:rgb(100,100,100);
    border-radius: 2rem;
    border:none;
    background: rgb(200,200,200);
    display: block;
    margin:0 auto;
    width: 10rem;
    height: 3rem;
}

.loading-btn:hover{
    text-decoration: none;
    cursor: pointer;
    color:#fff;
    background: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);

}

.circular .path{
    stroke:rgb(130, 130, 130) !important
}

#postlist-loading .ant-spin-dot{
     width: 2.2rem;
    height: 2.2rem;
  }

#postlist-loading .ant-spin-dot i{
    color: #fff !important;
    background-color:rgb(130, 130, 130);
    width: 1rem;
    height: 1rem;
  }

.ant-spin{
    color:rgb(130, 130, 130) !important
}

@media screen and (max-width:1440px){

}

@media screen and (max-width:1024px){
    .post-list-container{
        width: 80%;
    }
    .post-item{
        width: 45%;
    }
}

@media screen and (max-width:640px){
    .post-list-container{
        width: 80%;
    }
    .post-item{
        width: 100%;
    }
}

</style>