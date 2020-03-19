<template>
  <div class="detail-page">
       <m-header></m-header>
       <div class="detail-bg-container">
         <div class="detail-bg"></div>
         <div class="detail-bg-title">title</div>

       </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.detail-page{
  height: 1000px;
  background-color: rgb(234, 234, 234);
}

.detail-bg-container{
  position: relative;
  display: flex;
  align-items: center;
  height: 40vh;
}

.detail-bg{
  width: 100%;
  height: 100%;
  background-image: url(http://static.blinkfox.com/20181124-design.jpg);
  background-position: center center;
  background-size: cover;
  transform: translate3d(0px, 0px, 0px);
}

.detail-bg:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0px;
    right: 0px;
    background: rgba(255, 120, 0, 0.7);
    height: 100%;
    z-index: 0;
}

.detail-bg-title{
  display: inline;;
  color: white;
}

</style>