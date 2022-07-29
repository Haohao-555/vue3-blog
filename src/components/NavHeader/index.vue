<!--
 * @Date: 2022-07-23 15:02:51
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue3-blog\src\components\NavHeader\index.vue
-->
<template>
  <div class="nav-header">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" router mode="horizontal" background-color="#fff" text-color="#000" active-text-color="#F4E7D7">
        <el-menu-item index="/introduction">主页</el-menu-item>
        <el-menu-item index="/blog">博客</el-menu-item>
        <el-menu-item index="/message">留言榜</el-menu-item>
        <el-menu-item index="/production">作品集</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.nav-header {
  z-index: 100;
  position: fixed;
  width: 100%;
  top: 0;
}
.flex-grow {
  flex-grow: 1;
}
</style>
