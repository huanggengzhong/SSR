<template>
<!-- 设置默认主页 -->
    <div class="movie">
        <h1>欢迎访问本网站!</h1>
    </div>
</template>
<script>
export default {
    layout:'movie',
    head(){
        return{
            title:'豆瓣电影首页',
            meta:[{
                'name':'keywords',
                'content': '电影、经典电影、热映、电视剧、美剧、影评、电影院、电影票、排行、推荐'
            }]
        }
    }
}
</script>