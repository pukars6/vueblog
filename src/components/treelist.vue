<template>
  <div class="navigation-item">

    <a-anchor-link :href="treelist.href" :title="treelist.title" />
      <tree  v-for="(item,index) in treelist.children"   
                    :treelist="item" 
                    :key="index"
                >
                </tree>
  </div>
</template>

<script>
export default {
    name: 'tree',
    props:['treelist']
}
</script>

<style>
.navigation-item{
    margin-left: 1rem;
    /* width: auto;
    height:2rem; */
}
</style>