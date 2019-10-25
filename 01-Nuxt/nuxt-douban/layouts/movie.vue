<template>
    <div class='movie-layout'>
        <!-- <h3>这里应该有一个组件</h3>
         -->
        <movie-header></movie-header>
        <nuxt/>
    </div>
</template>
<script>
import MovieHeader from '~/components/MovieHeader'
export default {
  components: {
    MovieHeader
  }
}
</script>
<style scoped>
.movie-layout{
    padding-top: 60px;
}
</style>
