<template>
  <el-card class="item" ref="blogRef">
    <div class="blog-item">
      <div class="blog-img">
        <div class="top" v-if="blog.top">置顶</div>
      </div>
      <div class="blog-info">
        <h3 class="title">{{ blog.title }}</h3>
        <div class="blog-about">{{blog.introduction}}</div>
        <span class="classify">分类: {{blog.class}}</span>
        <div class="row"></div>
        <div class="time">发布时间：{{blog.time}}</div>
      </div>
    </div>
    <div class="hover-box"></div>
  </el-card>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  blog: {
    type: Object,
    default: () => {
      return []
    }
  }
})

// eslint-disable-next-line
const imgUrl = `url('${props.blog.blogImg}')`

</script>
<style lang="scss" scoped>
@import '@/styles/theme.scss';
.item {
  &:hover {
    @media screen and (min-width: 970px) {
      transform: translateY(-10px);
      box-shadow: 0 26px 40px -24px rgb(0 36 100 / 50%);
      .hover-box {
        left: 110%;
        transition: all 0.3s;
      }
    }
  }
  .blog-item {
    position: relative;
    overflow: hidden;
    transition: all 0.2s;
    .blog-img {
      position: relative;
      height: 140px;
      @media screen and (min-width: 992px) {
        height: 280px;
      }
      @media screen and (min-width: 768px) and (max-width: 992px) {
        height: 220px;
      }
      @media screen and (max-width: 760px) {
        height: 180px;
      }
      background-image: v-bind(imgUrl);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center bottom;
      .top {
         position: absolute;
         right: -27px;
         top: 16px;
         padding-top: 4px;
         padding-bottom: 4px;
         width: 100px;
         background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
         text-align: center;
         font-size: 12px;
         color: #fff;
         transform: rotate(45deg);
      }
    }
    .blog-info {
      padding: 12px;
      box-sizing: border-box;
      .title {
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-bottom: 12px;
        &:hover {
          cursor: pointer;
          color: $activeText;
          opacity: 0.8;
        }
      }
      .blog-about {
        padding: 12px;
        box-sizing: border-box;
        line-height: 24px;
        text-align: justify;
      }
      .classify {
        padding: 0px 8px;
        box-sizing: border-box;
        font-size: 12px;
        cursor: pointer;
      }
      .row {
        margin-top: 12px;
        width: 100%;
        height: 1px;
        background-color: #C00000;
        opacity: 0.4;
        border-radius: 12px;
      }
      .time {
        padding: 12px;
        font-size: 12px;
      }
    }
  }
  .hover-box {
    z-index: 100;
    width: 100%;
    height: 100%;
    position: absolute;
    left: -1000%;
    top: 0;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    );
    transform: skew(-30deg);
  }
}
</style>
