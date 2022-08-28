<!--
 * @Date: 2022-07-23 15:02:51
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue3-blog-1\src\components\NavHeader\index.vue
-->
<template>
<el-affix :offset="0">
  <div class="header">
    <el-main>
      <div class="header-container">
        <pc-nav :routeList="routeList" v-show="!current"></pc-nav>
        <mobile-nav v-show="current"></mobile-nav>
      </div>
    </el-main>
  </div>
</el-affix>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { isMobile } from '@/util/head.js'
import PcNav from './component/PCNav'
import MobileNav from './component/MobileNav'
const routeList = ref([
  // {
  //   route: '/index',
  //   text: '主页'
  // },
  {
    route: '/blog',
    text: '博客'
  },
  {
    route: '/message',
    text: '留言板'
  },
  {
    route: '/production',
    text: '作品集'
  },
  {
    route: '/about',
    text: '关于我'
  }
])
const current = ref(false)
onMounted(() => {
  current.value = isMobile()
})
</script>
<style lang="scss" scoped>
::v-deep .el-main {
  padding-top: 0px;
}

.header {
  height: 50px;
  background-color: rgba(255,255,255,.5);
  padding: 0px 12px;
  box-sizing: border-box;
  line-height: 50px;
  color: #000;
  z-index: 999;
  .header-container {
    display: flex;
    justify-content: flex-end;
    position: sticky !important;
    top: 0;
  }
}
</style>
