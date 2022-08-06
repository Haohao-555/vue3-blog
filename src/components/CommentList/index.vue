<!--
 * @Date: 2022-08-06 11:06:39
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue3-blog-1\src\components\CommentList\index.vue
-->
<template>
   <div class="comment-list">
      <el-card v-for="item in list" :key="item.id">
        <div class="comment-container" >
          <div class="top">
            <div class="ava">
              <el-image style="width: 50px; height: 50px" :src="item.ava" :fit="fit" />
            </div>
          </div>
          <div class="info">
              <div class="nickName">{{item.nickName}}</div>
              <div class="time">{{item.time}}</div>
              <div class="content">{{item.content}}</div>
          </div>
        </div>
      </el-card>
   </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  list: {
    type: Array,
    default () {
      return []
    }
  }
})
</script>
<style lang="scss" scoped>
.comment-list {
  margin-top: 12px;
  ::v-deep .el-card {
    margin-top: 12px;
  }
  .comment-container {
    display: flex;
    .top {
      display: flex;
      ::v-deep .el-card {
        box-shadow: none;
      }
      .ava {
        ::v-deep .el-image {
          border-radius: 50%;
        }
      }
    }
    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        padding-left: 12px;
        box-sizing: border-box;
        .nickName {
           padding-top: 6px;
        }
        .time {
          font-size: 12px;
          padding-bottom: 6px;
          padding-top: 6px;
        }
        .content {
          padding-top: 8px;
        }
    }

  }
}
</style>
