<template>
    <div>
      <!--这是vue引用外部组件的做法 <mynav></mynav> -->
     
        <h3>这是老师列表页</h3>
        <ul>
            <li v-for="item in teacherList" :key='item.id'>
                <nuxt-link :to="`/teacher/${item.id}`">{{item.name}}</nuxt-link>
            </li>
        </ul>
        <!-- 嵌套路由的出口 -->
        <nuxt-child />
    </div>
</template>
<script>
import Mynav from '~/components/Mynav.vue';//解释~代表根目录
export default {
  layout:'headerlayout',//nuxt引用外部组件的方法
  data() {
    return {
      teacherList: [
        { name: 'teacher1', id: 1 },
        { name: 'teacher2', id: 2 },
        { name: 'teacher3', id: 3 }
      ]
    }
  },
  components:{
    Mynav
  }
}
</script>
