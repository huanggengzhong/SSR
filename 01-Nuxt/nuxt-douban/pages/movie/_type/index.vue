<template>
    <div class="movie-type">
        <!-- $route.params.type:是vue的方式获取路由参数 -->
        <nuxt-link class="movie-box" :to="`/movie/${$route.params.type}/${item.id}`" v-for="item in movieList" :key="item.id">
            <img :src="item.img" :alt="item.title">
            <h4>电影名:{{item.title}}</h4>
            <p>上映评分:{{item.rating===0?'暂无评分':item.rating}}</p>
        </nuxt-link>
    </div>
</template>
<script>
import axios from '~/plugins/axios'
export default {
  data() {
    return {
      movieList: []
    }
  },
  layout: 'movie',
  asyncData(context, callback) {
    //获取动态路由参数
    let type = context.route.params.type
    // console.log(type);//得到路由参数

    axios.get(`/${type}`).then(res => {
      // console.log(res);
      callback(null, {
        movieList: res.data
      })
    })
  }
}
</script>
<style  scoped>
.movie-type {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.movie-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    padding: 10px 0;
    width:20%;
    box-shadow: 0 0 10px #bbb;
    color: #000;
}
.movie-box:hover{
    box-shadow: rgba(0,0,0,.3) 0 19px 60px;
}
</style>
