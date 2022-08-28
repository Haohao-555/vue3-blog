<!--
 * @Date: 2022-08-06 13:30:03
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue3-blog-1\src\views\blog\component\NavAside\component\SiteItem.vue
-->
<template>
   <el-card>
    <div class="site">
      <div class="title" style="display: flex;">⚡ <beat-text text="网站技术栈"></beat-text></div>
      <div class="content">
        <img src="https://img.shields.io/badge/vue3-3.2.8-brightgreen?style=flat-square" alt="">
        <img src="https://img.shields.io/badge/vue--router-4.0.11-yellowgreen?style=flat-square" alt="">
        <img src="https://img.shields.io/badge/vuex-4.0.2-blue?style=flat-square" alt="">
        <img src="https://img.shields.io/badge/element--plus-3.2.8-blueviolet?style=flat-square" alt="">
      </div>
    </div>
   </el-card>
</template>
<script setup>
import BeatText from '@/components/BeatText'
</script>
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
