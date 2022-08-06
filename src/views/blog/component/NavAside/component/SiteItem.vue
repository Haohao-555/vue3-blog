<template>
   <el-card>
    <div class="site">
      <div class="title">网站技术栈</div>
      <div class="content">
        <img src="https://img.shields.io/badge/vue3-3.2.8-brightgreen?style=flat-square" alt="">
        <img src="https://img.shields.io/badge/vue--router-4.0.11-yellowgreen?style=flat-square" alt="">
        <img src="https://img.shields.io/badge/vuex-4.0.2-blue?style=flat-square" alt="">
        <img src="https://img.shields.io/badge/element--plus-3.2.8-blueviolet?style=flat-square" alt="">
      </div>
    </div>
   </el-card>
</template>
<script setup></script>
<style lang="scss" scoped>
.site {
  .title {
    font-weight: bold;
    padding-bottom: 12px;
  }
   .content {
      display: flex;
      flex-wrap: wrap;
      img {
        margin: 4px;
      }
    }
}
</style>
