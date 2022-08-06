<!--
 * @Date: 2022-07-24 15:19:20
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue3-blog-1\src\views\blog\component\NavAside\index.vue
-->
<template>
  <div class="aside-list">
    <user-item :info="info"></user-item>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import UserItem from './component/UserItem'
const info = ref({})

// 获取用户信息
const getUserInfo = () => {
  info.value = {
    avaUrl: 'https://i.loli.net/2021/07/25/B7uKGgRdVXp8L3N.jpg',
    nickName: '岁月可贵',
    signature: '用尽一切奔向你',
    blogNum: 100,
    tagNum: 10,
    classNum: 12
  }
}

getUserInfo()
</script>
<style lang="scss" scoped>
.aside-list {}
</style>
