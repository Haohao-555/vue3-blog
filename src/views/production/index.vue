<!--
 * @Date: 2022-07-24 09:41:20
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue3-blog-1\src\views\production\index.vue
-->
<template>
  <div class="production">
    <el-main class="production-bg">
      <div class="container"></div>
    </el-main>
  </div>
</template>
<script setup>
import {} from 'vue'
</script>
<style lang="scss" scoped>
.production {
  min-height: 100%;
  .production-bg {
    @media screen and (min-width: 970px) {
      background-image: url('http://39.104.61.32/imgHome/blog/bg(2).jpg');
      background-position: center bottom;
    }
    @media screen and (max-width: 750px) {
      background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
      background-image: url('http://39.104.61.32/imgHome/blog/mobile-bg.jpg');
      background-position: center bottom;
    }
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    min-height: 100%;
    background-attachment: fixed;
    .container {
      height: 100vh;
    }
  }
}
</style>
