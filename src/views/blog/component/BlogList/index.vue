<template>
   <div class="blog-list">
      <el-card v-for="item in list" :key="item.id" class="item">
          <div class="blog-item">
            <div class="blog-img"></div>
            <div class="blog-info">
              <h3 class="title">{{ item.title }}</h3>
              <div class="blog-about">{{item.introduction}}</div>
              <div class="tag-list">
                <span v-for="tag in item.tagList" :key="tag" class="tag">{{tag}}</span>
              </div>
              <span class="classify">分类: {{item.class}}</span>
              <div class="row"></div>
              <div class="time">发布时间：{{item.time}}</div>
            </div>
          </div>
          <div class="hover-box"></div>
      </el-card>
   </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  list: {
    require: true,
    type: Array
  }
})
</script>
<style lang="scss" scoped>
::v-deep .el-card .el-card__body{
  padding: 0px;
}
.blog-list {
  .item {
    &:hover {
      // transform: translateY(-20px);
      // box-shadow: 0 26px 40px -24px rgb(0 36 100 / 50%);
      // .hover-box {
      //   left: 110%;
      //   transition: all 0.3s;
      // }
    }
    .blog-item {
      position: relative;
      overflow: hidden;
      transition: all 0.2s;
      .blog-img {
        height: 280px;
        background-repeat: no-repeat;
         background-image: url('http://39.104.61.32/imgHome/blog/blog(1).jpg');
        background-size: cover;
        background-position: center top;
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
        }
        .blog-about {
           padding: 12px;
           box-sizing: border-box;
           line-height: 24px;
           text-align: justify;
        }
        .tag-list {
          display: flex;
          .tag {
            font-size: 12px;
            padding: 4px 6px;
            margin: 6px;
            background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
            border-radius: 6px;
            color: #fff;
            &:hover {
              cursor: pointer;
            }
          }
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
          height: 2px;
          background-color: #ccc;
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
}
</style>
