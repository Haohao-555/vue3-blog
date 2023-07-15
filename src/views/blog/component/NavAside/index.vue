<template>
  <div class="aside-list">
    <user-item :info="info"/>
    <site-item/>
    <wechatItem/>
    <time-item/>
    <other-item/>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import UserItem from './component/UserItem'
import SiteItem from './component/SiteItem'
import TimeItem from './component/TimeItem'
import OtherItem from './component/OtherItem'
import wechatItem from './component/wechatItem'
import { getBloggerInfo } from '@/api/user'
const info = ref({})

// 获取用户信息
const getUserInfo = () => {
  getBloggerInfo().then(res => {
    info.value = res
  })
}

getUserInfo()
</script>
<style lang="scss" scoped>
.aside-list {
}
</style>
