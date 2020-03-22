<template>
  <div class="category-page">
      <m-header></m-header>
      <div class="category-bg-container" :style="{backgroundImage: 'url('+CategoryBgImgUrl+')'}">
        <div class="category-bg-info">
           <div class="category-bg-title">PUKARS</div>
           <div class="category-bg-content">No Bug No Life</div>
        </div>
      </div>
      <div class="category-content">
          <div class="category-cloud">
              <div class="category-card">
                  <div class="card-title"><a-icon class="cat-icon" type="folder" />文章分类</div>
                   <a-spin id="category-loading" :spinning="loading">
                  <div class="card-chips">
                      <router-link v-for="(item,index) in CategoryList" :key="index" class="chips-item" :to="item.jumpUrl" :style="randomRgb()">
                          <span>{{item.name}}</span>
                          <span class="chips-count">{{item.count}}</span>
                          
                      </router-link>
                  </div>
                  </a-spin>
              </div>
          </div>
          <div class="category-radar"></div>
      </div>
  </div>
</template>

<script>
import servicePath from '../config/apiUrl'
export default {
    data(){
        return{
            CategoryBgImgUrl:require('../../assets/img/swiper/1.jpg'),
            CategoryList:'',
            loading:true
        }
    },
    methods:{
        addCategoryUrl(list){
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
        }
    },
    created(){
        this.axios.get(servicePath.getCategoryList)
        .then((res=>{
            this.CategoryList = res.data
            this.addCategoryUrl(this.CategoryList)
            this.loading=false
            // console.log(this.CategoryList)
        }))
    }
}
</script>

<style>

.category-page{
  height: auto;
  background-color: rgb(234, 234, 234);
}

.category-bg-container{
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

.category-bg-container:before {
    filter: brightness(.7);
    content: "";
    position: absolute;
    bottom: 0;
    left: 0px;
    right: 0px;
    background: rgba(255, 120, 0, 0.6);
    height: 100%;
}
.category-bg-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    z-index: 1;
    /* height: 100%; */
    /* align-content: center; */
}


.category-bg-title{
    font-weight: 600;
    font-size: 4.6rem;
    color: #fff;
}
.category-bg-content{
    font-size: 2rem;
    color: #eee;
}


#category-loading .ant-spin-dot{
    width: 2.4rem;
    height: 2.4rem;
  }

#category-loading .ant-spin-dot i{
    color: #ccc !important;
    background-color: #ccc;
    width: 1.2rem;
    height: 1.2rem;
  }



.category-content{
    padding-bottom: 2.4rem;
    width: 100%;
    height: auto;
}

.category-cloud{
    margin:0 auto;
    width: 74%;
    height: auto;
}

.category-card{

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

.category-card .card-title{
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
    .category-cloud{
        width: 94%;
    }
    .category-card .card-title{
        font-size: 1.4rem;
    }
    .card-chips{
        margin:0;
        padding:1rem;
    }
    .category-bg-title{
        font-size: 4rem;
    }
    .category-bg-content{
        font-size: 1.8rem;
    }
    
    
}

</style>