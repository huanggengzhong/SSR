<template>
  <div class="container">
    <nuxt-link to="/student">跳转到student页面</nuxt-link>
    <button @click='jumpTo'>跳转到student页面</button>
    <!-- 不要使用a标签跳转,它会刷新页面,它不是SPA -->
    <a href="/student">a标签跳转到student页面</a>
    <!-- 测试elementUI -->
    <el-button type="primary">主要按钮</el-button>
    <ul>
      <li v-for="item in movieList" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from '~/plugins/axios.js';
export default {
  components: {},
  data() {
    return {
      movieList: []
    }
  },
  //注意:在nuxt中发请求不能写在生命周期函数里,应该写在asyncData方法里
  created() {
    // console.log("created");//这样是有问题的,既然是服务器端渲染,我们不希望前端也打印
    // setTimeout(() => {
    //   this.movieList = [
    //     {
    //       title: '中国功夫',
    //       id: 1
    //     },
    //     {
    //       title: '大圣归来',
    //       id: 2
    //     },
    //     {
    //       title: '肖申克的救赎',
    //       id: 3
    //     }
    //   ]
    // }, 2000)
  },
  // asyncData(context, callback) {
  //   console.log(context) //不能使用this,改为context,context里面有error,params,quary等信息
  //   setTimeout(() => {
  //     //下面这里调用callback,它有两个参数,参数1是错误对象,第二个是数据对象
  //     callback(null, {
  //       movieList: [
  //         {
  //           title: '中国功夫1',
  //           id: 1
  //         },
  //         {
  //           title: '大圣归来1',
  //           id: 2
  //         },
  //         {
  //           title: '肖申克的救赎1',
  //           id: 3
  //         }
  //       ]
  //     })
  //   }, 100)
  // },

  //promise异步数据
  // asyncData(context,callback){
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(() => {
  //       resolve({
  //       movieList: [
  //         {
  //           title: '中国功夫1',
  //           id: 1
  //         },
  //         {
  //           title: '大圣归来1',
  //           id: 2
  //         },
  //         {
  //           title: '肖申克的救赎1',
  //           id: 3
  //         }
  //       ]
  //     })
  //     }, 1000);
  //   }).then(res=>{
  //     // console.log(res);
  //     callback(null,{
  //       movieList:res.movieList
  //     })
      
  //   }).catch(err=>{
  //     // callback(err)或者下面这种方式也可以
  //     context.error(err)
  //   })
  // },
  asyncData(context,callback){
    axios.get('/in_theaters').then(res=>{
      console.log(res.data);
      // 赋值直接调用callback()方法
      callback(null,{
        movieList:res.data
      })
    })
  },
  methods: {
    jumpTo() {
      // this.$router.push({path:'/student'})//可以
      this.$router.push({ name: 'student' }) //这种方式也可以,不需要斜杠
    }
  }
}
</script>

<style>
</style>

