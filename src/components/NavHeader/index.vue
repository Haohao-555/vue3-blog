<!--
 * @Date: 2022-07-23 15:02:51
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue3-blog-1\src\components\NavHeader\index.vue
-->
<template>
  <div class="nav-header">
    <el-menu :default-active="activeRouter" :class="['el-menu-demo', isClick ? 'active' : '']" router mode="horizontal" background-color="#000" text-color="#fff" active-text-color="#fff">
        <el-menu-item index="/blog">博客</el-menu-item>
        <el-menu-item index="/message">留言榜</el-menu-item>
        <el-menu-item index="/production">作品集</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const activeRouter = ref('/blog')
watch(
  () => router.currentRoute.value.path,
  val => {
    activeRouter.value = val
  },
  {
    immediate: true
  }
)
</script>
<style lang="scss" scoped>
::v-deep .el-menu--horizontal {
  border-bottom: none;
}
::v-deep .el-menu-item:hover {
  outline: 0 !important;
  color: #fff !important;
  background: transparent !important;
}
::v-deep .el-menu-item.is-active {
  color: #fff !important;
  background: transparent !important;
}
.nav-header {
  z-index: 100;
  position: fixed;
  width: 100%;
  top: 0;
  .active {
    background-color: #000;
  }
}
</style>
