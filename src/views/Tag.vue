<template>
  <div class="tag-page">
      <m-header></m-header>
      <div class="tag-bg-container" :style="{backgroundImage: 'url('+tagBgImgUrl+')'}">
        <div class="tag-bg-info">
           <div class="tag-bg-title">PUKARS</div>
           <div class="tag-bg-content">No Bug No Life</div>
        </div>
      </div>
      <div class="tag-content">
          <div class="tag-cloud">
              <div class="tag-card">
                  <div class="card-title"><a-icon class="cat-icon" type="folder" />文章标签</div>
                   <a-spin id="tag-loading" :spinning="loading">
                  <div class="card-chips">
                      <div 
                      v-for="(item,index) in tagList" 
                      :key="index" 
                      class="chips-item" 
                      :to="item.jumpUrl" 
                      :style="randomRgb()"
                      @click="changePostListByTag(item)">
                          <span>{{item.name}}</span>
                          <span class="chips-count">{{item.count}}</span>
                          
                      </div>
                  </div>
                  </a-spin>
              </div>
          </div>
          <div class="tag-radar"></div>
          <m-postlist :axiosListParams="axiosListParams"></m-postlist>
      </div>
  </div>
</template>

<script>
import servicePath from '../config/apiUrl'
export default {
    data(){
        return{
            tagBgImgUrl:require('../../assets/img/swiper/1.jpg'),
            tagList:'',
            loading:true,
            axiosListParams:Object
        }
    },
    methods:{
        addtagUrl(list){
            const currentPath = this.$router.history.current.fullPath
            
            list.map(i=>{
               i.jumpUrl = currentPath+'/'+i.name 
            })
        },
        randomRgb(){
            let R = Math.floor(Math.random() * 220);
			let G = Math.floor(Math.random() * 220);
			let B = Math.floor(Math.random() * 220);
            return {
            background: 'rgba(' + R + ',' + G + ',' + B + ',0.6)'
                };
        },
        changePostListByTag(item){
            this.axiosListParams.tag = item.name
        }
    },
    created(){  
        this.axios.get(servicePath.getTagList)
        .then((res=>{
            this.tagList = res.data
            this.addtagUrl(this.tagList)
            this.loading=false
            const firstTag = this.tagList[0].name
            this.axiosListParams ={
                page:1,
                pageSize:15,
                tag:firstTag
        }
        }))
    }
}
</script>

<style>

.tag-page{
  height: auto;
  background-color: rgb(234, 234, 234);
}

.tag-bg-container{
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transform: translate3d(0px, 0px, 0px);
  
}

.tag-bg-container:before {
    filter: brightness(.7);
    content: "";
    position: absolute;
    bottom: 0;
    left: 0px;
    right: 0px;
    background: rgba(255, 120, 0, 0.6);
    height: 100%;
}
.tag-bg-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    z-index: 1;
    /* height: 100%; */
    /* align-content: center; */
}


.tag-bg-title{
    font-weight: 600;
    font-size: 4.6rem;
    color: #fff;
}
.tag-bg-content{
    font-size: 2rem;
    color: #eee;
}

#tag-loading .ant-spin-dot{
    width: 2.4rem;
    height: 2.4rem;
  }

#tag-loading .ant-spin-dot i{
    color: #ccc !important;
    background-color: #ccc;
    width: 1.2rem;
    height: 1.2rem;
  }

.tag-content{
    padding-bottom: 2.4rem;
    width: 100%;
    height: auto;
}

.tag-cloud{
    margin:0 auto;
    width: 74%;
    height: auto;
}

.tag-card{

    padding: 1.5rem;
    margin: .5rem 0 1rem 0;
    position: relative;
    margin-top: -4rem;
    background: #fff;
    width: 100%;
    height: auto;
    border-radius: .8rem;
    box-shadow: 0 1rem 2rem rgba(50, 50, 93, .1), 0 .4rem 1rem rgba(0, 0, 0, .07) !important;
}

.tag-card .card-title{
    text-align: center;
    width: 10rem;
    margin:0 auto;
    color: #3C4858;
    font-size: 1.75rem;
    font-weight: 400;

}

.card-title .cat-icon{
    margin-right: .4rem;
}

.card-chips{
    height: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    margin:0 2rem;
    padding: 1rem 2rem;
}

.chips-item{
    color: #fff;
    margin: .7rem .7rem;
    padding: 0 1rem;
    display: flex;
    justify-content: space-around;
    height: auto;
    min-width: 5rem;
    width: auto;
    line-height: 2.6rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: .4rem;
    word-wrap: break-word;
    cursor: pointer;
    box-shadow: 0 .4rem .8rem rgba(0, 0, 0, .12);
}

.chips-item:hover{
    color: #fff;
}

.chips-item .chips-count{
    color: #eee;
    margin-left: .4rem;
}

@media screen and (max-width:1440px){

}
@media screen and (max-width:1024px){

    
}

@media screen and (max-width:640px){
    .tag-cloud{
        width: 94%;
    }
    .tag-card .card-title{
        font-size: 1.4rem;
    }
    .card-chips{
        margin:0;
        padding:1rem;
    }
    .tag-bg-title{
        font-size: 4rem;
    }
    .tag-bg-content{
        font-size: 1.8rem;
    }
    
}

</style>