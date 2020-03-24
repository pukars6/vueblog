<template>
  <div class="detail-page">
       <m-header></m-header>
       <div class="detail-bg-container" :style="{backgroundImage: 'url('+post.imgUrl+')'}">
         <a-spin id="detail-bg-loading" :spinning="loading">
         <div class="detail-bg-title">{{post.title}}</div>
         </a-spin>
       </div>
       <div class="detail-content-container">
         <div class="content-main">
           <div class="content-left">
             <div class="card">
               
               <div class="card-up">
                 <div class="card-tags">
                    <div :key="index" v-for="(item,index) in post.tags" class="card-tag-item">
                      {{item.name}}
                    </div>
                 </div>
                 <div class="card-categories">
                   <a-icon class="category-icon" type="folder" />
                  <span :key="index" v-for="(item,index) in post.categories" class="card-category-item">
                      {{item.name}}
                    </span>
                 </div>
               </div>
               <div class="card-info">
                 <div class="info-time">
                   <a-icon class="item-icon" type="clock-circle" />
                   {{post.createdAt}}
                 </div>
                 <div class="card-view">
                   <a-icon class="el-icon-view" type="eye"/>
                   {{post.viewCount}}次
                 </div>
               </div>
               <div class="card-content">
                 <a-skeleton :loading="loading" active />
                 <div id="content" class="card-content-item"  v-html="post.content" v-highlight></div>
                 </div>
                 
               <!-- <div class="card-bottom"></div> -->
             </div>
             <div class="comment"></div>
           </div>
           <div class="content-right">
             <div class="markdown-menu">
                 <a-anchor>
               <div class="menu-title">
                  <a-icon class="menu-icon" type="project" />
                 目录</div>
               <div class="menu-content" >
               
                 <tree :key="index" v-for="(item,index) in markDownTitle" :treelist="item"></tree>
                 
               </div>
               </a-anchor>
             </div>
           </div>
         </div>
       </div>
       <m-footer></m-footer>
  </div>
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import servicePath from '../config/apiUrl'

import tree from '../components/treelist.vue'
export default {
  components:{
        'tree':tree
    },
  data(){
    return{
      post:{
        title:'',
        imgUrl:'',
        content:'',
        tags:[{name:''}],
        catrgories:[{name:''}],
        createdAt:'',
        viewCount:0,
        comments:[{}]
        // categor

      },
      loading:true,
      markDownTitle:[]
    }
  },
  methods:{
    getMarkDownTitle(str){
      const pattern = /<(h[1-6])[\s\S]+?(?=<\/\1>)/g
      const list = []
      function pushItem(arr, item) {
        const len = arr.length
        const matchItem = arr[len - 1]
        if (matchItem && matchItem.tag !== item.tag) {
          pushItem(matchItem.children, item)
        } else {
          arr.push(item)
          // debugger
        }
      }
      str.replace(pattern, ($0, $1) => {
        const title = $0.replace(/.*?>/, '')
        const startIndex = $0.indexOf('"')
        const endIndex = $0.indexOf('">')

        const href = `#${$0.slice(startIndex + 1, endIndex)}`
        const currentItem = {
          tag: $1, // 标签类型
          title,
          href,
          children: []
        }
        pushItem(list, currentItem)
      })
    this.markDownTitle = list
    }
  },
  mounted(){
    
      marked.setOptions({
          renderer: new marked.Renderer(),
          highlight: function(code) {
            return hljs.highlightAuto(code).value;
          },
          pedantic: false,
          gfm: true,
          tables: true,
          breaks: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          xhtml: false
        }
      );
      
    },
    updated(){
      
    }
    ,
  created(){
    
    const postid = this.$route.params.id
    //  获取文章详情
     this.axios.get(servicePath.getPostDetail+postid)
      .then((res=>{
               this.post = res.data
               this.loading = false
               this.post.content = marked(this.post.content)
               this.getMarkDownTitle(this.post.content)
               document.title = this.post.title+' | PUKARS的博客';
           }))
  }
}
</script>

<style>

.detail-page{
  height: auto;
  background-color: rgb(234, 234, 234);
}

.detail-bg-container{
  text-align: center;
  filter: brightness(.8);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
  
}

.detail-bg-container:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0px;
    right: 0px;
    background: rgba(255, 120, 0, 0.6);
    height: 100%;
    z-index: 0;
}

#detail-bg-loading .ant-spin-dot{
    width: 2.4rem;
    height: 2.4rem;
  }

#detail-bg-loading .ant-spin-dot i{
    color: #fff !important;
    background-color: #fff;
    width: 1.2rem;
    height: 1.2rem;
  }

.detail-bg-title{
  z-index: 1;
  text-align: center;
  line-height: 1.4em;
  color: #fff;
  font-size: 2.5rem;
}

.detail-content-container{

  height: auto;
  width: 90%;
  margin: 0 auto;
  max-width: 1250px;
}



.content-main{
    display: flex;
    justify-content: center;
    padding: 0 1rem;
    margin-bottom: 2rem;
}

.content-left{
  width: 75%;
  height: auto;
  padding: 0 1rem;
  /* background-color: brown; */
}
.content-main .content-right{
  width: 25%;
  height: auto;
  /* margin-left: auto;
  left: auto;
  right: auto; */
}

.content-left .card{
  padding: 1.2rem 2rem;
  border-radius: .7rem;
  box-shadow: 0 10px 35px 2px rgba(0, 0, 0, .15), 0 5px 15px rgba(0, 0, 0, .07), 0 2px 5px -5px rgba(0, 0, 0, .1) !important;
  position: relative;
  margin-top: -3.6rem;
  width: 100%;
  height: auto;
  background: #fff;
}

.card-up{
  
  margin-bottom: 1.2rem;
  padding: 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
}

.card-up .card-tags{
  display: flex;
  justify-content: flex-start;
}

.card-tags .card-tag-item{
  font-size: 1rem;
  color: #fff;
  border-radius: 1rem;
  line-height: 1.6rem;
  height: 2rem;
  padding: .16rem .8rem;
  margin-right: .8rem;
  background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
}

.card-categories{
  font-size: 1rem;
  line-height: 2rem;
  color: #42b983;
}

.card-categories .card-category-item{
  margin:0 .4rem 0 0;
  font-size: 1.1rem;
  line-height: 2rem;
  color: #42b983;
  font-weight: 500;
}

.card-info{
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;
  font-size: .9rem;
  display: flex;
  justify-content: flex-start;
    color: #525f7f;
}

.card-info .info-time{
  margin-right: 1rem;
}

.card-content .card-content-item{
  height: auto;
  font-size: 1.05rem;
  line-height: 1.5rem;
  color: #34495e !important;
  /* background: yellow; */
}

.content-right{
  padding: 2rem 1rem 2rem .4rem;
}

.menu-title{
  margin-left: 2rem;
  font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5rem;
}

.menu-content{
  margin-top: 1rem;
}

.ant-affix{
  top: 6rem !important;
  height: auto !important;
  max-height: 100% !important;
}

.ant-anchor-wrapper{
  
  background: transparent !important;
}

.ant-anchor-link-active a{
      color: #42b983 !important;
      font-weight: 700;
}

.ant-anchor-ink-ball{
    border: 2px solid #42b983;
}

.ant-anchor-ink::before {

    background-color: #efefef !important;

}
.hljs{
  margin:.8rem 0;
  padding:1rem;
  border-radius: .6rem;
}

@media screen and (max-width:1440px){
  

}

@media screen and (max-width:1024px){

    
}



@media screen and (max-width:640px){
  .detail-bg-title{
    font-size: 2rem;
  }
  .detail-content-container{
    width: 100%;
  }
  .content-main{
    padding: 0;
  }
  .content-left{
    padding: 0 .8rem;
    width: 100%;
  }
  .content-right{
    display: none;
  }
  .content-left .card{
    padding: 1rem 1rem;
  }
  .card-content .card-content-item{
    font-size: .9rem;
    line-height: 1.4rem;
  }
  .card-tags .card-tag-item{
    font-size: .9rem;
    padding: .10rem .65rem;
  }
  .card-categories .card-category-item {
    font-size: 1rem;
  }
    
}

</style>