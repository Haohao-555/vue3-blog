<!--
 * @Date: 2022-07-24 09:31:41
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue3-blog-1\src\views\blog\index.vue
-->
<template>
  <div class="blog">
    <el-main class="blog-bg">
      <div class="blog-container">
        <el-row justify="center">
          <el-col :lg="18" :md="24" :sm="24" :xs="24">
             <banner></banner>
          </el-col>
          <el-col :lg="18" :md="24" :sm="24" :xs="24">
            <el-row :gutter="20" >
              <el-col :md="18">
                <div class="wrapper">
                   <tools-item></tools-item>
                   <blog-list :list="list"></blog-list>
                </div>
              </el-col>
              <el-col :md="6" style="position: relative; top: 0px;">
                 <nav-aside></nav-aside>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import BlogList from './component/BlogList/index'
import NavAside from './component/NavAside/index'
import ToolsItem from '@/components/ToolsItem/index'
import Banner from '@/components/Banner/index'
const list = ref([])
const getBlogList = () => {
  list.value = [
    {
      id: 1,
      title: '10月27号、28号、29号、30四天PC端云音乐项目总结',
      introduction:
        '🌈前序 本来是昨天要写总结的，昨天就已经基本完成了将音乐进度条移植到项目中并且与音频实现联动的。',
      time: '2021-11-06',
      class: '云音乐项目',
      blogImg: 'http://39.104.61.32/imgHome/blog/blog(2).jpg',
      top: true,
      num: 1000,
      support: 1000
    },
    {
      id: 2,
      title: '10月24号、25号、26号三天PC端云音乐项目总结',
      introduction:
        '🌈成果展示项目到今天已经经过 12 天了，下面把这 12 天的目前页面效果展示如下（目前仅差歌曲播放页）🥰 💪🏻主页 💪🏻歌手 💪🏻排行版 💪🏻MV 💪🏻MV 详情 💪🏻歌手介绍 💪🏻歌单详情一 💪🏻歌单详情二 💪🏻歌单详情三 由于时间比较仓促',
      time: '2021-11-07',
      class: '云音乐项目',
      blogImg: 'http://39.104.61.32/imgHome/blog/blog(3).jpg',
      top: false,
      num: 1000,
      support: 1000
    },
    {
      id: 3,
      title: '10月27号、28号、29号、30四天PC端云音乐项目总结',
      introduction:
        '🌈前序 本来是昨天要写总结的，昨天就已经基本完成了将音乐进度条移植到项目中并且与音频实现联动的。',
      time: '2021-11-06',
      class: '云音乐项目',
      blogImg: 'http://39.104.61.32/imgHome/blog/blog(1).png',
      top: false,
      num: 1000,
      support: 1000
    },
    {
      id: 4,
      title: '10月27号、28号、29号、30四天PC端云音乐项目总结',
      introduction:
        '🌈前序 本来是昨天要写总结的，昨天就已经基本完成了将音乐进度条移植到项目中并且与音频实现联动的。',
      time: '2021-11-06',
      class: '云音乐项目',
      blogImg: 'http://39.104.61.32/imgHome/blog/blog(4).jpg',
      top: false,
      num: 1000,
      support: 1000
    }
  ]
}
getBlogList()
</script>
<style lang="scss" scoped>
::v-deep .el-card {
  margin-bottom: 12px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px 8px 8px 12px;
  border: rgba(255, 255, 255, 0.5);
}
.blog {
  .blog-bg {
    .blog-container {
      .banner {
        height: 300px;
      }
    }
  }
}
</style>
