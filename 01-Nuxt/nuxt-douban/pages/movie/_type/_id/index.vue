<template>
    <div class="movie-detail">
       <div class="detail-wrapper">
           <img
         :src="movieDetail.img"
         :alt="movieDetail.title"
        >
        <h1>{{movieDetail.title}}</h1>
        <p>上映时间: {{movieDetail.details[0].year}}</p>
        <p>电影类型: {{movieDetail.genres.join(',')}}</p>
        <p>电影简介:{{movieDetail.details[0].summary}}</p>
       </div>
    </div>
</template>
<script>
import axios from '~/plugins/axios'
export default {
    data(){
        return {
            movieDetail:{}
        }
    },
    layout:'movie',
    asyncData(context,callback){
        axios.get(`/${context.route.params.type}/${context.route.params.id}?_embed=details`)
        .then(res=>{
            console.log(res);
            callback(null,{
                movieDetail:res.data
            })
        })
    }
}
</script>
<style scoped>
.movie-detail{
  
    width: 20%;
    margin: 0 auto;
    box-sizing: border-box;
    box-shadow: 0 0 10px #bbb;
}
.detail-wrapper{
    text-align: center;
}
</style>
