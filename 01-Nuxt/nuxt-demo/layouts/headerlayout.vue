<template>
    <div>
       <mynav></mynav> 
       <!-- 下面放一个nuxt坑,凡是使用了nuxt组件的页面都会放到这个坑里 -->
       <nuxt/>  
    </div>
</template>
<script>
import Mynav from '~/components/Mynav.vue'
export default {
   components:{
       Mynav
   } 
}
</script>