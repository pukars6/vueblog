<template>
    <div class="header">
        <div class="brand-logo">
            <!-- <img class="header-logo" :src=logourl /> -->
            <span class="logo-span">PUKARS</span>
        </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            logourl:require('../assets/nav-logo.png')
        }
    }
}
</script>

<style>
.header{
    z-index: 2;
    position: fixed;
    top:0;
}

.brand-logo{
    font-family: "Microsoft YaHei";
    position: absolute;
    color: #fff;
    display: inline-block;
    font-size: 2.1rem;
    padding: 0;
}

.header-logo{
    height: 80px
}

.logo-span{
    height: 45px;
    vertical-align: middle;
}
</style>