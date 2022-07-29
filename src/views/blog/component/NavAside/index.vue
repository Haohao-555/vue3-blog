<template>
  <div class="aside-list">
    <user-item :info="info"></user-item>
    <tools-item :announce="announce"></tools-item>
    <tag-item :tagList="tagList"></tag-item>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import UserItem from './component/UserItem'
import ToolsItem from './component/ToolsItem'
import TagItem from './component/TagItem'

const info = ref({})
const announce = ref({})
const tagList = ref([])

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

// 获取公告
const getAnnounce = () => {
  announce.value = {
    content: '还不知道要写啥',
    img: 'https://i.loli.net/2021/08/31/HuYRbwtBSvFKynM.gif'
  }
}

// 获取标签
const getTagList = () => {
  tagList.value = ['Array', 'Hexo', 'JWT', 'JavaScript', 'JavaScript数据结构', 'Koa2', 'LeanCloud', 'MDN', 'String', 'Vue 全家桶', 'artitalk', 'http', 'jQuery', 'node', 'sequelize', 'vite', '云音乐项目', '作用域', '前端项目构建', '变量提升', '引擎', '微信小程序']
}

getTagList()
getAnnounce()
getUserInfo()
</script>
<style lang="scss" scoped>

</style>
