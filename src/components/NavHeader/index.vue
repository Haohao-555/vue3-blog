<template>
  <!-- <el-affix :offset="0"> -->
    <div class="header">
      <el-main>
        <div class="header-container">
          <div class="title">{{ info.nickName }}</div>
          <pc-nav :routeList="routeList"></pc-nav>
        </div>
      </el-main>
    </div>
  <!-- </el-affix> -->
</template>
<script setup>
import { ref, onMounted } from 'vue'
import PcNav from './component/PCNav'
import { getBloggerInfo } from '@/api/user'
import { filtersRoutes } from '@/util/router'
import { useRouter } from 'vue-router'

const info = ref({})
const routeList = ref([])
const router = useRouter()

onMounted(() => {
  getUserInfo()
  const fRoutes = filtersRoutes(router.getRoutes())
  routeList.value = fRoutes[0].children
})

// 获取用户信息
const getUserInfo = () => {
  getBloggerInfo().then((res) => {
    info.value = res
  })
}
</script>
<style lang="scss" scoped>
::v-deep .el-main {
  padding-top: 0px;
}

.header {
  height: 50px;
  padding: 0px 6px;
  box-sizing: border-box;
  line-height: 50px;
  z-index: 999;
  border-bottom: 1px solid var(--border-color);
  .header-container {
    position: relative;
    display: flex;
    justify-content: flex-end;
    .title {
      position: absolute;
      left: 0px;
      top: 0px;
      bottom: 0px;
      margin: auto;
      font-weight: bolder;
      font-size: 20px;
      color: var(--el-color-primary);
    }
  }
}
</style>
