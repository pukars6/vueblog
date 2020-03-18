<template>
  <div class="footer">
      <div class="info">
          UI参考:
          <span class="light">hexo-theme-matery</span>
          <br />
          本站由<span class="light">Vue</span> + <span class="light">Koa2</span> + <span class="light">Mysql</span> 驱动
          <br />
         <span class="light">鄂ICP备19030205号-1</span>
          
      </div>
      
  </div>

</template>

<script>
export default {

}
</script>

<style>

.footer{
    background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
    padding:.6rem 0;
    height: auto;
    width: 100%;
}

.info{
    font-size: .9rem;
    line-height:1.5rem;
    text-align: center;
    color:#dbdbdb;;
}

.info .light{
    color: #fff;
}

</style>