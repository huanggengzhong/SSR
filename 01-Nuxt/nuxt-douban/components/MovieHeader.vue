<template>
    <div class="movie-header">
        <ul>
            <li>
                <nuxt-link to="/movie/in_theaters">正在热映</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/movie/coming_soon">即将上映</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/movie/top250">top250</nuxt-link>
            </li>

        </ul>
    </div>
</template>
<style scoped>
.movie-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  background-color: #1b2734;
  margin: 0;
 
}
li {
  line-height: 30px;
  height: 30px;
}

</style>
