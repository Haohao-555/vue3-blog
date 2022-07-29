<template>
  <div class="blog">
    <el-main class="blog-bg">
      <div class="blog-container">
        <el-row justify="center">
          <el-col :lg="18" :md="24" :sm="24" :xs="24">
            <el-row>
              <div class="banner"></div>
            </el-row>
            <el-row :gutter="20">
              <el-col :md="18">
                <blog-list :list="list"></blog-list>
              </el-col>
              <el-col :md="6">
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
import NavAside from './component/NavAside'

const list = ref([])
const getBlogList = () => {
  list.value = [{
    id: 1,
    title: '10月27号、28号、29号、30四天PC端云音乐项目总结',
    Introduction: '🌈前序 本来是昨天要写总结的，昨天就已经基本完成了将音乐进度条移植到项目中并且与音频实现联动的。但是，昨天晚上自己手贱😂，为了将功能实现的更好，希望能够实现保存之前用户播放的歌曲，下次打开时能够直接显示出来。就是要增加这个功能，一直再改，改到晚上8，9点。没改出来，还出来了bug。所以就没时间写总结。🤣 🌈四天的内容展示 美化 MV 详情页💪🏻',
    time: '2021-11-06',
    class: '云音乐项目',
    num: 1000,
    support: 1000
  }]
}
getBlogList()

</script>
<style lang="scss" scoped>
::v-deep .el-card {
  margin-bottom: 12px;
  background: rgba(255,255,255,.5);
  border-radius: 12px 8px 8px 12px;
}
.blog {
  .blog-bg {
    background-image: url('~@/assets/img/2.jpg');
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    min-height: 100%;
    background-attachment: fixed;
    .blog-container {
      .banner {
        height: 300px;
      }
    }
  }
}
</style>
